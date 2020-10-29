const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema for the Twitter Strategy
const UserSchema = new Schema({
  name: String,
  screenName: String,
  twitterId: String,
  profileImageUrl: String
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
