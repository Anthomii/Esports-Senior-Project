const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

router.delete('/deleteLeagues', function (req, res) {
  User.resetOnLeagues(function (err) {
    if(err) {
      res.json({success: false, msg: 'failed to delete all leagues'});
      //throw(err);
    }
    else {
      res.json({success: true, msg: 'deleted all leagues from users'});
    }
  });
});

router.post('/update', (req, res) => {
  let newUser = User ({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    leagues: req.body.leagues
  });

  User.updateUserOnLeagues(newUser, function (err, docs) {
    if (err) {
      res.json({success: false, msg: 'failed to update user'});
    }
    else {
      //console.log(docs);
      res.json(docs)
    }
  });
});


router.post('/updateUserLeagueList/:username/:leagueId?', (req, res) => {
  if(req.params.leagueId === undefined) {
    res.json({success: false, msg: 'Failed to update user'});
  }
  else {
    User.pushLeagueId(req.params.username, req.params.leagueId, function (err, res) {
      if(err) {
        res.json({success: false, msg: 'Failed to push leagueId to user'});
      }
      else {
        res.json({success: true, msg: 'pushed leagueid'});
      }
    });
    //res.json({success: success, msg: 'updated a user'});
  }

});

// Register
router.post('/register', (req, res, next) => {
  //console.log("HELLO");
  let newUser = new User ({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    leagues: null
  });


  User.addUser(newUser, (err, user) => {
    if(err) {
      res.json({success: false, msg: 'Failed to register user'});
    } else {
      res.json({success: true, msg: 'User registered'});
    }
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

// get all users
router.get('/:username?', function(req, res) {
  if(req.params.username === undefined) {
    //console.log("NOTHING IN HERE");
    User.find({}, function(err, docs) {
      if (!err){
        //console.log(docs);
        return res.json(docs);
      } else {throw err;}
    });
  }
  else {
    //get unique id - league
    User.getUserByUsername(req.params.username, function (err, id) {
      if(err) throw (err);
      if(!id) {return res.json({success: false, msg: "id not found"});}
      //console.log(id);
      return res.json(id);
    });
  }
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user) {
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch) {
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800 // 1 week
        });
        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        })
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

module.exports = router;
