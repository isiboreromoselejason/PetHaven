

const express = require('express');
const router = express.Router();
const adoptablePetsController = require('../controllers/adoptablePetsController');

router.get('/', adoptablePetsController.renderAdoptablePetsPage);

module.exports = router;
