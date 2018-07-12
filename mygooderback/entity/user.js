const io = require('socket.io-client');
const initOptions = {
    error(error, e) {
        if (e.cn) {
            console.log('CN:', e.cn);
            console.log('EVENT:', error.message || error);
        }
    }
};
const cn = {
    host: 'mygooderserver.postgres.database.azure.com',
    port: 5432,
    database: 'mygooderdb',
    user: 'invite@mygooderserver',
    password: 'invite'
};

const bcrypt = require('bcrypt');
const pgp = require('pg-promise')(initOptions);
const db = pgp(cn);



function inscription(req, res, next) {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    const email = req.query.email;
    const password = req.query.password;

    bcrypt.hash(password, 5, function(err, bcryptedPassword) {
        db.connect()
        .then(obj => {
            db.none('INSERT INTO mygooder.user(firstname, lastname, email, password, statut) ' +
                'VALUES($1, $2, $3, $4, 1)', [firstname, lastname, email, bcryptedPassword])
            .then(() => {
                res.status(201)
                .json({
                    status: 'success',
                    message: 'Inscription OK'
                });
            })
            .catch((err) => next(err));
        })
        .catch(error => {
            console.log('ERROR:', error.message || error);
        });
    });
}

function connexion(req, res, next) {
    const email = req.query.email;
    const password = req.query.password;
    
    db.connect()
    .then(obj => {
        db.one('SELECT * FROM mygooder.user WHERE email = $1', email)
        .then(results => {
            bcrypt.compare(password, results.password, function(err, doesMatch){
                if (doesMatch) {
                    res.status(201)
                    .json({
                        status: 'success',
                        results: results,
                        message: 'Connection OK'
                    });
                }
            });
        })
        .catch((err) => next(err));
    })
    .catch(error => {
        console.log('ERROR:', error.message || error);
    });
}

function logements(req, res, next) {
    const user_id = req.query.user_id;

    db.connect()
    .then(obj => {
        db.many('SELECT * FROM mygooder.period ' +
        'LEFT JOIN mygooder.location ON mygooder.period.location_id = mygooder.location.id ' +
        'WHERE mygooder.period.user_id = $1', user_id)
        .then(results => {
            res.status(201)
            .json({
                results: results
            });
        })
        .catch((err) => next(err));
    })
    .catch(error => {
        console.log('ERROR:', error.message || error);
    });
}

function logement(req, res, next) {
    const user_id = req.query.user_id;
    const location_id = req.query.location_id;

    db.connect()
    .then(obj => {
        db.one('SELECT location.id, address, zipcode, town, ip_arduino FROM mygooder.location ' +
        'JOIN mygooder.user ON mygooder.user.id = mygooder.location.user_id ' +
        'WHERE mygooder.user.statut = 0 ' +
        'AND mygooder.location.user_id = $1 ' +
        'AND mygooder.location.id = $2', [user_id, location_id])
        .then(results => {
            res.status(201)
            .json({
                results: results
            });
        })
        .catch(err => {
            res.status(403).json();
        });
    })
    .catch(error => {
        console.log('ERROR:', error.message || error);
    });
}

function updatelogement(req, res, next) {
    const user_id = req.query.user_id;
    const location_id = req.query.location_id;
    const address = req.query.address;
    const zipcode = req.query.zipcode;
    const town = req.query.town;
    const ip_arduino = req.query.ip_arduino;

    db.connect()
    .then(obj => {
        db.none('UPDATE mygooder.location ' +
        'SET address = $1, zipcode = $2, town = $3, ip_arduino = $4 ' +
        'WHERE user_id = $5' +
        'AND id = $6', [address, zipcode, town, ip_arduino, user_id, location_id])
        .then(results => {
            res.status(201)
            .json({
                results: results
            });
        })
        .catch(err => {
            res.status(403).json();
        });
    })
    .catch(error => {
        console.log('ERROR:', error.message || error);
    });
}

function historique(req, res, next) {
    db.connect()
    .then(obj => {
        db.many('SELECT firstname, lastname, address, zipcode, town, open_door FROM mygooder.log ' +
        'LEFT JOIN mygooder.location ON mygooder.location.id = mygooder.log.location_id ' +
        'LEFT JOIN mygooder.user ON mygooder.user.id = mygooder.log.user_id')
        .then(results => {
            res.status(201)
            .json({
                results: results
            });
        })
        .catch((err) => next(err));
    })
    .catch(error => {
        console.log('ERROR:', error.message || error);
    });
}

function ouverture(req, res, next) {
    const user_id = req.query.user_id;
    const location_id = req.query.location_id;
    const type_door = req.query.type_door;

    var tempsEnMs = Math.floor(Date.now() / 1000);
    console.log(tempsEnMs);

    db.connect()
    .then(obj => {
        db.many('SELECT *, ' +
        'extract(epoch from mygooder.period.start) as time_start, ' +
        'extract(epoch from mygooder.period.end) as time_end FROM mygooder.period ' +
        'WHERE user_id = $1 ' +
        'AND location_id = $2 ', [user_id, location_id])
        .then(results => {
            results.forEach(period => {
                console.log(period);
                if (tempsEnMs >= period.time_start && tempsEnMs <= period.time_end) {
                    var socket = io.connect('http://localhost:3000');
                    socket.emit('garage');
                    socket.emit('porte');

                    db.none('INSERT INTO log VALUES ($1, $2, now())', [user_id, location_id])
                    .then(results => {
                        res.status(201)
                        .json({
                            results: results
                        });
                    })
                    .catch(err => {
                        res.status(403).json();
                    });
                }
                res.status(403).json();
            });
        })
        .catch((err) => next(err));
    })
    .catch(error => {
        console.log('ERROR:', error.message || error);
    });
}

module.exports = {inscription, connexion, logements, logement, updatelogement, historique, ouverture};