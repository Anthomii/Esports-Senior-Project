var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String, required: true},
    avatar: {type: String, required: true},
    drafted: {type: Boolean, required: true},
});

module.exports = mongoose.model('Player', schema);
