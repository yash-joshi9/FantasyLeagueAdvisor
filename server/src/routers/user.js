const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/auth");
var cors = require('cors')

var app = express();
app.use(cors())



const router = new express.Router();


var corsOptions = {
  origin: '*',
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
router.post("/users", cors(corsOptions), async (req, res) => {

  const user = new User(req.body);
  try {
    const email = req.body.email;
    const isUser = await User.findOne({email});

    if(isUser) {
      return res.status(200).send({ error: "Already registered" })
    }
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e){
    console.log(e)
    res.sendStatus(400);
  }
});

router.post("/users/login", cors(corsOptions), async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.status(200).send({ user, token });
  } catch (e) {
    console.error(e);
    res.status(400).send({error: "Wrong email or password "});
  }
});

router.post("/users/id", cors(corsOptions), auth, async (req,res) => {
  try {
    const { id } = req.body;
    const user = await User.findById(id);
    res.send({user})
  } catch (error) {
      console.log(error);
      res.status(400).send({error: "failed to fetch the data "});
  }
})

router.get("/users/me", auth, async (req, res) => {
  res.status(200).send(req.user);
});

router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.status(200).send({message: "logout successful"});
  } catch (e) {
    res.sendStatus(500);
  }
});
console.log("Nikhil");
module.exports = router;
