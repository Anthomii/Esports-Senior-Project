var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const User = require('./user');

var schema = new Schema({
    leagueID: {type: Number, required: true},
    leagueName: {type: String, required: true},
    usersList: {type: [User], required: true}
});

module.exports = mongoose.model('League', schema);
