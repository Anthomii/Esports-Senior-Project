var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    accountID: {type: String, required: true}, //steamid
    name: {type: String, required: true},
    avatar: {type: String, required: true},
    points: {type: Number}
});

const Player = module.exports = mongoose.model('Player', schema);

module.exports.getByAccountId = function (accountID, callback) {
    const query = {_id: accountID};
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

module.exports.updatePlayerOnPoints = function (newPlayer, callback) {
    //console.log(newPlayer._id);
    //console.log(newPlayer.name);
    const query = {name:newPlayer.name};
    Player.updateOne(query, {$set : {points : newPlayer.points}}, callback);
};


