const express = require('express');
const router = express.Router();
//const League = require('../models/league');
const Draft = require('../models/draft');

// router.get('/', (req, res) => {
//     Draft.find({}, function(err, docs) {
//         if (!err){
//             console.log(docs);
//             res.json(docs);
//         } else {throw err;}
//     });
// });

router.get('/:leagueId?/:participantName?', (req, res) => {
    let arg1 = req.params.leagueId;
    let arg2 = req.params.participantName;
    if(arg1 === undefined && arg2 === undefined) {
        Draft.find({}, function(err, docs) {
            if (!err){
                console.log(docs);
                res.json(docs);
            } else {throw err;}
        });
    }
    //just league
    else if (arg2 === undefined) {
        Draft.getByLeague(req.params.leagueId, function (err, docs) {
            if(err) res.json(err);
            if(!docs) {return res.json({success: false, msg: "league not found"});}
            console.log("good for league");
            return res.json(docs);
        });
    }
    //just participant
    else if (arg1 === undefined) {
        //nothing?
    }
    //leagueid and leaguename exists
    else {
        Draft.getByPartAndLeague(req.params.participantName, req.params.leagueId, function (err, docs) {
            if(err) res.json(err);
            if(!docs) {return res.json({success: false, msg: "league/part not found"});}
            console.log("good for league and part??");
            return res.json(docs);
        });
    }
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

router.delete('/delete/:leagueId?/:participantName?', function (req, res) {
    let arg1 = req.params.leagueId;
    let arg2 = req.params.participantName;

    if(arg1 === undefined && arg2 === undefined) {
        Draft.deleteMany({}, function(err) {
            if(err) {
                return res.json({success: false, msg: 'failed on delete many'});
            }
            else {
                return res.json({success: true, msg: 'deleted all'});
            }
        });
    }
    //only get leagues
    else if(arg2 === undefined) {
        Draft.deleteByLeague(arg1, function (err, something) {
            if(err) throw (err);
            if(!something) {return res.json({success: false, msg: "something not found!!"});}
            console.log(something);
            return res.json(something);
        });
    }
    //only get people
    else if(arg1 === undefined) {
        Draft.deleteByPart(arg2, function (err, something) {
            if(err) throw (err);
            if(!something) {return res.json({success: false, msg: "something not found!!"});}
            console.log(something);
            return res.json(something);
        });
    }

    else {
        Draft.deleteByLeagueAndPart(arg1, arg2, function (err, something) {
            if(err) throw (err);
            if(!something) {return res.json({success: false, msg: "something not found!!"});}
            console.log(something);
            return res.json(something);
        });
    }
});

router.delete('/deletebypro/:league_id?/:pro_name?', function (req, res) {
    let arg1 = req.params.league_id;
    let arg2 = req.params.pro_name;

    Draft.deleteByLeagueAndPro(arg1, arg2, function (err, something) {
        if(err) throw (err);
        if(!something) {return res.json({success: false, msg: "something not found!!"});}
        console.log(something);
        return res.json(something);
    });
});


module.exports = router;
