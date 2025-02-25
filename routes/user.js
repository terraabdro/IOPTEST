const express = require('express');
const User = require('../models/User');
const isAdminUtil = require('../utils/adminUtils');
const router = express.Router();

// Authenticate User
router.post('/auth', async (req, res) => {
  const { id, username, first_name } = req.body;

  try {
    let user = await User.findOne({ telegramId: id });

    if (!user) {
      user = new User({
        telegramId: id,
        username,
        name: first_name,
        isAdmin: isAdminUtil(id),
      });
      await user.save();
    }

    if (!user.isAdmin && isAdminUtil(id)) {
      user.isAdmin = true;
      await user.save();
    }

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
