

const express = require('express');
const router = express.Router();
const petStoreController = require('../controllers/petStoreController');

router.get('/:id', petStoreController.renderPetStoreDetails);

module.exports = router;
