var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const User = require('./user');
const Player = require('./player');

var schema = new Schema({
    leagueID: {type: Number, required: true},
    leagueName: {type: String, required: true},
    userID: {type: User, required: true},
    playerID: {type: Player, required: true}
});

module.exports = mongoose.model('Draft', schema);
