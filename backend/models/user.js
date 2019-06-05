const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;
const config = require('../config/database');
const League = require('./league');

// User Schema
const UserSchema = Schema ({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  leagues: {
    type: [String], // type League
    required: false
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
};

module.exports.getUserByUsername = function(username, callback) {
  const query = {username: username};
  User.findOne(query, callback);
};

module.exports.addUser = function(newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
};

module.exports.updateUserOnLeagues = function(newUser, callback) {
  let temp_username = newUser.username;
  //console.log(temp_username);
  const query  = {username : temp_username};
  //let find_user = User.findOne(query);
  //find_user.leagues.push(leagueId);
  //User.findOne(query, callback);
  User.updateOne(query, {$set : {leagues : newUser.leagues}}, callback);
};

module.exports.resetOnLeagues = function(callback) {
  //let temp_username = newUser.username;
  //console.log(temp_username);
  //const query  = {username : temp_username};
  //let find_user = User.findOne(query);
  //find_user.leagues.push(leagueId);
  //User.findOne(query, callback);
  User.updateMany({}, {$set : {leagues : []}}, callback);
};

