var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    accountID: {type: Number, required: true},
    name: {type: String, required: true},
    avatar: {type: String, required: true},
});

module.exports = mongoose.model('Player', schema);

