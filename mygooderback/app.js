/* REQUIRE APP */
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* REQUIRE ARDUINO */
const five = require('johnny-five');
const board = new five.Board();

/* Interaction avec l'arduino */
board.on('ready', function() {
	var ledRouge = new five.Led(2);//Led rouge sur la pin 2
	var ledVerte = new five.Led(3);//Led verte sur la pin 3
	var servo = new five.Servo({pin: 10, startAt: 0});//Servomoteur sur la pin 10
	var garageIsOpen = false;

	ledRouge.on();//Initialiser la led rouge

	io.on('connection', function(socket){
		console.log('a user connected');

		//Ouverture de la porte
		socket.on('porte', function() {
			ledRouge.off();//Led rouge éteinte
			ledVerte.on();//Led verte allumé

			setTimeout(function() {
				ledRouge.on();
				ledVerte.off();
			}, 5000);//Temps d'ouverture 5 sec
		});

		//Ouverture de la porte de garage
		socket.on('garage', function() {
			if (!garageIsOpen) {
				servo.to(150);//Ouverture de la porte de garage
				garageIsOpen = true;
			}
			else {
				servo.home();//Fermeture de la porte de garage
				garageIsOpen = false;
			}
		});
	});
});

/* CRUD app - bdd */
const user = require('./entity/user');

app.post('/inscription', user.inscription);
app.post('/connexion', user.connexion);
app.get('/logements', user.logements);
app.get('/logement', user.logement);
app.put('/logement', user.updatelogement);
app.get('/historique', user.historique);
app.post('/ouverture', user.ouverture);

http.listen(3000, function(){
	console.log('listening on *:3000');
});