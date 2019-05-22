var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const User = require('./user');

//var count = 0;

var schema = new Schema({
    leagueID: {type: Number, required: true},
    leagueName: {type: String, required: true},
    usersIdList: {
        type: [String], // type User
        required: true
    }
});

const League = module.exports = mongoose.model('League', schema);

module.exports.getByLeagueId = function (leagueID, callback) {
    const query = {leagueID:leagueID};
    League.findOne(query, callback);
};

module.exports.addLeague = function (newLeague, callback) {
    newLeague.save(callback);
};


module.exports.deleteByLeagueId = function (leagueId, callback) {
    const query = {leagueID:leagueId};
    League.deleteOne(query, callback);
};
