var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    accountID: {type: Number, required: true},
    name: {type: String, required: true},
    avatar: {type: String, required: true},
});

const Player = module.exports = mongoose.model('Player', schema);

module.exports.getByAccountId = function (accountID, callback) {
    const query = {accountID: accountID};
    Player.findOne(query, callback);
};

module.exports.getAllPlayers = function () {
    Player.find();
};

module.exports.addPlayer = function (newPlayer, callback){
    newPlayer.save(callback);
};

module.exports.deletePlayer = function () {

};


