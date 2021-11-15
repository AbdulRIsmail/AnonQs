const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const passport = require('passport');
const passportSetup = require('./config/passport-setup');
const authRoutes = require('./routes/auth-routes');
const keys = require('./config/keys');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieSession = require("cookie-session");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");

// connect to mongodb
mongoose.connect(keys.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true},() => {
  console.log("Connected to mongodb!");
});

app.use(cookieSession({
  name: keys.COOKIE_NAME,
  keys: [keys.COOKIE_KEY],
  maxAge: 24 * 60 * 60 * 1000 // 1 day
}));

// parse cookies
app.use(cookieParser());

// parses the body
app.use(bodyParser.json());

// initalise passport
app.use(passport.initialize());

// deserialize cookie from the browser
app.use(passport.session());

// setup the passport authenticate for twitter
app.get('/auth/twitter', passport.authenticate('twitter'));

// set up cors to allow us to accept requests from our client
app.use(cors({
  origin: true, // allow server to accept request from different origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true // allow session cookie from browser to pass through
}));

// setup the auth routes
app.use('/auth', authRoutes);

const Question = require('./models/question-model');
const Answer = require('./models/answer-model');
const User = require('./models/user-model');

app.get('/questions/', async (req, res) => {
  const document = await User.findOne({screenName: req.query.screenName})

  if (document !== null) 
    res.send(document.QNAS)
  else
    res.sendStatus(401)
})


app.get('/answers/', async (req, res) => {
  const document = await User.findOne({screenName: req.query.screenName})

  if (document !== null) 
    res.send(document.QNAS)
  else
    res.sendStatus(401)
})

app.get('/ask/question', async  (req, res) => {
  // const newQuestion = await new Question({
  //   userID: '5fa063e90f07fa20f987407c',
  //   question: 'What macbook would you recommend?',
  // }).save();

  // console.log(newQuestion)
})

app.post('/answer/question', async (req, res) => {
  const { answer, questionId, screenName } = req.body

  User.updateOne({screenName, "QNAS.id": questionId}, {"$set": {
    "QNAS.$.answer": answer
  }}, function(error, success) {
    // console.log('Error:', error);
    // console.log('Success', success);
    if (success) res.sendStatus(200)
  })
})

// connect to the express server
app.listen(port, () => console.log(`Server is running on port ${port}!`));
