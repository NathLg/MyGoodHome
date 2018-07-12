/*var serialport = require('serialport');
const parsers = serialport.parsers;
var portName = process.argv[2];

const parser = new parsers.Readline({ 
  delimiter: '\r\n'
});

var arduino = new serialport(portName, {
    baudRate: 115200
});

arduino.pipe(parser);

arduino.on('open', onOpen);
arduino.on('data', onData);

function onOpen(){
    console.log('Open connections!');
}

function onData(data){
    console.log('on Data ' + data);
}

arduino.write('1');*/