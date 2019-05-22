const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Player = require('../models/player');
const League = require('../models/league');

router.get('/:leagueID?', (req, res) => {

    if(req.params.leagueID === undefined) {
        //console.log("NOTHING IN HERE");
        League.find({}, function(err, docs) {
            if (!err){
                console.log(docs);
                res.json(docs);
            } else {throw err;}
        });
    }
    else {
        //get unique id - league
        League.getByLeagueId(req.params.playerID, function (err, id) {
            if(err) throw (err);
            if(!id) {return res.json({success: false, msg: "id not found!!"});}
            console.log(id);
            return res.json(id);
        });
    }
    //console.log(req.params.playerID);

    //mongo.get(req.paramsPlayerID)
});
//get by user ..... wrong dataset ... can only get league by userid from
// router.get('/usersLeague/:userID?', (req, res) => {
//
//     if(req.params.leagueID === undefined) {
//         console.log("NOTHING IN HERE");
//         res.json({success: false, msg: 'need a userID'});
//     }
//     else {
//         //get all leagues with userID
//         var leagueMap = [];
//         var counter = 0;
//
//         League.find({}, function(err, leagues) {
//             leagues.forEach(function(league) {
//                 if(league.)
//                 leagueMap[counter] = league;
//             });
//         });
//     }
//     //console.log(req.params.playerID);
//
//     //mongo.get(req.paramsPlayerID)
// });


router.post('/add', function (req, res){
    let newLeague = League ({
        leagueID : 0,
        leagueName : req.body.leagueName,
        usersIdList: req.body.usersIdList
    });
    //console.log(newLeague);
    //console.log('INIT OBJ...ADD');
    League.addLeague(newLeague, function (err, docs) {
        //res.json({success: true, msg: 'added new league'});
        if (err) {
            //res.json(err);
            //console.log(res)
            res.json({success: false, msg: 'failed to add new league'});
        }
        else {
            //console.log(docs);
            res.json(docs)
            //res.json({success: true, msg: 'added new league'});
        }
        //console.log('added new league');
    });
});

router.delete('/delete/:league?', function (req, res) {
    //res.json({msg : req.params});
    if(req.params.league === undefined) {
        //console.log("NOTHING IN HERE");
        //res.json({msg : req.params});
        League.deleteMany({}, function(err) {
             if(err) {
                 return res.json({success: false, msg: 'failed on delete many'});
             }
             else {
                 return res.json({success: true, msg: 'deleted all'});
             }
         });
    }
    //res.json({msg : "hello"});
    else {
        //get unique id - league
        League.deleteByLeagueId(req.params.league, function (err, id) {
            if(err) throw (err);
            if(!id) {return res.json({success: false, msg: "id not found!!"});}
            console.log(id);
            return res.json(id);
        });
    }
});

module.exports = router;
