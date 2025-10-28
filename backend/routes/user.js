// routes/user.js
const express = require('express');
const router = express.Router();
const { getUsers, addUser } = require('../controllers/userController');

// GET /users
router.get('/', getUsers);

// POST /users
router.post('/', addUser);

module.exports = router;
