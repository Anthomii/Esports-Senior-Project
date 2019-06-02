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


