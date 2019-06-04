const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Player = require('../models/player');

// router.get('/', (req, res) => {
//     console.log("NOTHING IN HERE");
//     //console.log(req.params.playerID);
//     res.json("Result");
//     //mongo.get(req.paramsPlayerID)
// });

//METHODS HERE IMPLEMENTS GET/POST/DELETE

//get
router.get('/:playerName?', (req, res) => {

    if(req.params.playerName === undefined) {
        //console.log("NOTHING IN HERE");
        Player.find({}, function(err, docs) {
            if (!err){
                console.log(docs);
                res.json(docs);
            } else {throw err;}
        });
    }
    else {
        //get unique id - player

        Player.getByName(req.params.playerName, function (err, id) {
            if(err) throw (err);
            if(!id) {return res.json({success: false, msg: "id not found"});}
            console.log(id);
            return res.json(id);

        });
    }
    //console.log(req.params.playerID);

    //mongo.get(req.paramsPlayerID)
});

router.post('/add', function (req, res) {
    let newPlayer = new Player({
       accountID: req.body.accountID,
       name: req.body.name,
       avatar: req.body.avatar
    });

    Player.addPlayer(newPlayer, function (err, player) {
       if (err) {
           res.json({success: false, msg: 'failed to add new player'});
       }
       else {
           res.json({success: true, msg: 'added new player'});
       }
    });
});

router.post('/update', (req, res) => {
    let newPlayer = Player ({
        _id : req.body._id,
        accountID: req.body.accountID,//steamid
        name: req.body.name,
        avatar: req.body.avatar,
        points: req.body.points
    });

    Player.updatePlayerOnPoints(newPlayer, function (err, docs) {
        if (err) {
            res.json({success: false, msg: 'failed to update player'});
        }
        else {
            //console.log(docs);
            res.json(docs)
        }
    });
});


module.exports = router;