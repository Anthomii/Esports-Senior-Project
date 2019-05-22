const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Player = require('../models/player');
const League = require('../models/league');
const Draft = require('../models/draft');

router.get('/:draftID?', (req, res) => {

    if(req.params.draftID === undefined) {
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
        Draft.getByDraftId(req.params.draftID, function (err, id) {
            if(err) throw (err);
            if(!id) {return res.json({success: false, msg: "id not found"});}
            console.log(id);
            return res.json(id);
        });
    }
    //console.log(req.params.playerID);

    //mongo.get(req.paramsPlayerID)
});


router.post('', function (req, res){

});
module.exports = router;
