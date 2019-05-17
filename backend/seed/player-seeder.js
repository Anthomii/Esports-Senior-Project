var Player = require('../models/player');
var config = require('../config/database');
var mongoose = require('mongoose');

mongoose.connect(config.database);


var players = [
    new Player({
        accountID: 1,
        name: 'Bob Johnson1',
        avatar: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwix8qqvloXiAhXHFTQIHUUoBbwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeauty%2F&psig=AOvVaw06KtnlaAlZYeqpxTx-GsBg&ust=1557172663086425'
    }),
    new Player({
        accountID: 2,
        name: 'Bob Johnson2',
        avatar: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwix8qqvloXiAhXHFTQIHUUoBbwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeauty%2F&psig=AOvVaw06KtnlaAlZYeqpxTx-GsBg&ust=1557172663086425'
    }),
    new Player({
        accountID: 3,
        name: 'Bob Johnson3',
        avatar: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwix8qqvloXiAhXHFTQIHUUoBbwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeauty%2F&psig=AOvVaw06KtnlaAlZYeqpxTx-GsBg&ust=1557172663086425'
    })
];

var done = 0;

for(var i = 0; i < players.length; i++) {
    players[i].save(function(err, result) {
        done++;
        if(done === players.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
