var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const User = require('./user');
const Player = require('./player');

var schema = new Schema({
    draftID: {type: Number, required: true},
    leagueID: {type: Number, required: true},
    leagueName: {type: String, required: true},
    userID: {type: Number, required: true},
    playerID: {type: Number, required: true}
});

const Draft = module.exports = mongoose.model('Draft', schema);

module.exports.getByDraftId = function (draftID, callback) {
    const query = {draftID:draftID};
    Draft.findOne(query, callback);
};

