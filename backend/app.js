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

// connect to the express server
app.listen(port, () => console.log(`Server is running on port ${port}!`));
