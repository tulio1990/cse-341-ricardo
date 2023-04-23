const express = require('express');
const router = express.Router();

const contactsCont = require('../controllers/contacts');

router.get('/', contactsCont.getAllContacts);

router.get('/:id', contactsCont.getAContact);

module.exports = router;