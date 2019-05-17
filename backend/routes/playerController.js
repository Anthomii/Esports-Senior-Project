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

//get
router.get('/:playerID?', (req, res) => {

    if(req.params.playerID === undefined) {
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
        Player.find({}, function (err, docs) {
            if(!err) {
                for(var i = 0; i < docs.length; i++) {
                    if(docs[i].accountID === req.params.playerID) {
                        return res.json(docs[i]);
                    }
                }
            } else { throw err; }
        });
        //
        // Player.findById({accountID: req.params.playerID}, (err, player) => {
        //     if(err) {console.log(err);}
        //     else {res.json(player);}
        // });
        // Player.find({accountID: req.param.playerID}, (err, player) => {
        //     if(err) {console.log(err);}
        //     else {res.json(player);}
        // });
    }
    //console.log(req.params.playerID);

    //mongo.get(req.paramsPlayerID)
});

module.exports = router;