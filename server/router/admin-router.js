const express = require('express');
const { getAllUsers, getAllContacts } = require('../controllers/admin-controller');
const router = express.Router();

router.get('/users', getAllUsers); // Removed middleware for debugging
router.get('/contacts', getAllContacts); // Removed middleware for debugging

module.exports = router;
