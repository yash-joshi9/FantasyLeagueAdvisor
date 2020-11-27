const express = require("express");
const User = require("../models/User");

const auth = require("../middleware/auth");

var cors = require('cors');
const Player = require("../models/Players");
const { teams } = require("../allplayers");

var app = express();
app.use(cors())

const router = new express.Router();


var corsOptions = {
  origin: '*',
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// try {
  
//  const eachTeam = players.teams;

//  eachTeam.forEach(async function(t) {
//   const team = new Team(t)
//   await team.save()
// }); 
// } catch {

// }



router.post("/players", cors(corsOptions), async (req,res) => {
    try {
        const { teamName } = req.body;
        const players = await Player.find({team: teamName});
        return res.status(200).send(players)
    } catch (error) {
        console.log(error);
        res.status(400).send({error: "failed to fetch the data "});
    }
})

module.exports = router;
