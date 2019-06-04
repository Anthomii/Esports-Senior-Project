var Player = require('../models/player');
var config = require('../config/database');
var mongoose = require('mongoose');

mongoose.connect(config.database);


var players = [
    new Player({
        accountID: 5,
        name: 'Bob Johnson5',
        avatar: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwix8qqvloXiAhXHFTQIHUUoBbwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeauty%2F&psig=AOvVaw06KtnlaAlZYeqpxTx-GsBg&ust=1557172663086425'
    }),
    new Player({
        accountID: 6,
        name: 'Bob Johnson6',
        avatar: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwix8qqvloXiAhXHFTQIHUUoBbwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeauty%2F&psig=AOvVaw06KtnlaAlZYeqpxTx-GsBg&ust=1557172663086425'
    }),
    new Player({
        accountID: 7,
        name: 'Bob Johnson7',
        avatar: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwix8qqvloXiAhXHFTQIHUUoBbwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeauty%2F&psig=AOvVaw06KtnlaAlZYeqpxTx-GsBg&ust=1557172663086425'
    }),
    new Player({
        accountID: 8,
        name: 'Bob Johnson8',
        avatar: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwix8qqvloXiAhXHFTQIHUUoBbwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeauty%2F&psig=AOvVaw06KtnlaAlZYeqpxTx-GsBg&ust=1557172663086425'
    }),
    new Player({
        accountID: 9,
        name: 'Bob Johnson9',
        avatar: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwix8qqvloXiAhXHFTQIHUUoBbwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeauty%2F&psig=AOvVaw06KtnlaAlZYeqpxTx-GsBg&ust=1557172663086425'
    }),
    new Player({
        accountID: 10,
        name: 'Bob Johnson10',
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
