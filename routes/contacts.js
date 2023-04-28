const express = require('express');
const router = express.Router();

const contactsCont = require('../controllers/contacts');

router.get('/', contactsCont.getAllContacts);

router.get('/:id', contactsCont.getAContact);

router.post('/', contactsCont.newContact);

router.put('/:id', contactsCont.updContact);

router.delete('/:id', contactsCont.delContact);

module.exports = router;
