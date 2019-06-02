const express = require('express');
const router = express.Router();
//const League = require('../models/league');
const Draft = require('../models/draft');

router.get('/', (req, res) => {
    Draft.find({}, function(err, docs) {
        if (!err){
            console.log(docs);
            res.json(docs);
        } else {throw err;}
    });
});

router.get('/:leagueId/:participantName', (req, res) => {
    console.log(req.params.leagueId);
    console.log(req.params.participantName);
    Draft.getByPartAndLeague(req.params.participantName, req.params.leagueId, function (err, docs) {
        if(err) res.json(err);
        if(!docs) {return res.json({success: false, msg: "league/part not found"});}
        console.log("good for league and part??");
        return res.json(docs);
    });
});

router.post('/add', function (req, res){
    let newDraft = new Draft({
        leagueId: req.body.leagueId,
        leagueName: req.body.leagueName,
        participantName: req.body.participantName,
        proName: req.body.proName
    });

    Draft.addNewDraft(newDraft, function (err, docs) {
        if (err) {
            res.json(err);
        }
        else {
            res.json({success: true, msg: 'added new draft'});
        }
    });
});

module.exports = router;
