/*'use strict';
var Stomp = require('stomp-client');
var MessageProducer = function MessageProducer(){
  this._stompClient = null;
};
MessageProducer.prototype.init = function init(){
  this._stompClient = new Stomp('127.0.0.1', 61613, 'admin', 'admin');
  this._stompClient.connect(function(sessionId){
    console.log("STOMP client connected.");
  });
};
MessageProducer.prototype.sendMessage = function sendMessage(messageToPublish){
  this._stompClient.publish('/queue/order', messageToPublish);
  console.log("Message Sent");
};
MessageProducer.prototype.recMessage = function recMessage(){
};
module.exports = new MessageProducer();*/
var stomp = require('stomp');
var config = require('./../config.json');
var stomp_args = {
    port: config.activemq.port,
    host: config.activemq.host,
    debug: config.activemq.debug,
    login: config.activemq.login,
    passcode: config.activemq.passcode
}
var queue = '/queue/'+config.activemq.queue;
var headers = {
    destination: queue,
    ack: 'client'
};
var receipt = true;
var client;
var MessageProducer = function MessageProducer(){
  client = null;
};
MessageProducer.prototype.init = function init(){
  console.log('Using '+stomp_args.host+':'+stomp_args.port+' to connect to ActiveMQ.');
};
MessageProducer.prototype.sendMessage = function sendMessage(message){
client = new stomp.Stomp(stomp_args);
client.connect();
client.on('connected', function() {
        client.send({
            'destination': queue,
            'body': message,
            'persistent': 'true'
        }, receipt);
	client.disconnect();
	});
}
MessageProducer.prototype.recMessage = function recMessage(){
client = new stomp.Stomp(stomp_args);
client.connect();
client.on('connected', function() {
    client.subscribe(headers,  function(body, headers) {
    console.log('Order received ' + body);
	});
});
client.disconnect();
};
module.exports = new MessageProducer();