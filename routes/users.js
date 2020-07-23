const express = require('express');
const usersController = require('./../controllers/UsersController');
const sessionsController = require('./../controllers/SessionsController');
const router = express.Router();

router.route('/')
  .post(
    usersController.store,
    sessionsController.generateToken,
    sessionsController.sendToken
  );

module.exports = router;
