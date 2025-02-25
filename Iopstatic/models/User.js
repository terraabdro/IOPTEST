const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  telegramId: String, // Telegram user ID
  username: String, // Telegram username
  name: String, // User's full name
  isAdmin: { type: Boolean, default: false }, // Whether the user is an admin
});

module.exports = mongoose.model('User', UserSchema);
