var server           = require('./config/config')();
var http            = require('http').Server(server);
var io              = require('socket.io')(http);

server.set('io', io);
var porta = process.env.PORTA || 3000;
http.listen(porta, function(){
  console.log('Server ONLINE');
});
