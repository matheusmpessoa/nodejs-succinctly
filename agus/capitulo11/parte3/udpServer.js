var dgram = require('dgram');
var server = dgram.createSocket('udp4');

var message = 'this server message';

// server esperando a mensagem do client
server.on('message', function (data, client) {
    console.log('received data: ' + data);
    console.log('client ' + client.address + ':' + client.port);
});

// server esperando a conexão do client
server.on('listening', function () {
    var address = server.address();
    console.log('server listening on ' + address.address + ':' + address.port);
});

server.bind(9094);
