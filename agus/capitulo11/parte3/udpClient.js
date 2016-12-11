var dgram = require('dgram');
var client = dgram.createSocket("udp4");

var server = 'localhost';
var serverPort = 9094;

// send message
var message = new Buffer("this is client message");
// o client envia informação e fecha a conexão ativa
client.send(message, 0, message.length, serverPort, server, function (err, bytes) {
    if (err) console.log(err);
    else client.close();
});
