var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//const User = require('./user');
//const Player = require('./player');

var schema = new Schema({
    leagueId: {type: String, required: true},
    leagueName: {type: String, required: true},
    participantName: {type: String, required: true},
    proName: {type: String, required: true}
});

const Draft = module.exports = mongoose.model('Draft', schema);

module.exports.addNewDraft = function (newDraft, callback) {
    newDraft.save(callback);
    console.log("RAWR");
};

module.exports.getByPartAndLeague = function (part_name, leagueId, callback) {
    const query = {participantName: part_name, leagueId:leagueId};
    Draft.find(query, callback);
};

module.exports.getByLeague = function (leagueId, callback) {
    const query = {leagueId:leagueId};
    Draft.find(query, callback);
};


module.exports.deleteByLeagueAndPart = function (league_id, part_name, callback) {
    const query = {participantName: part_name, leagueId:league_id};
    Draft.deleteOne(query, callback);
};

module.exports.deleteByLeague = function (league_id, callback) {
    const query = {leagueId:league_id};
    Draft.deleteMany(query, callback);
};

module.exports.deleteByPart = function (part_name, callback) {
    const query = {participantName: part_name};
    Draft.deleteMany(query, callback);
};

module.exports.deleteByLeagueAndPro = function (league_id, pro_name, callback) {
    const query = {leagueId:league_id, proName: pro_name};
    Draft.deleteOne(query, callback);
};