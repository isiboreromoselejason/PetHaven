

const express = require('express');
const router = express.Router();
const adoptionCenterController = require('../controllers/adoptionCenterController');

router.get('/:id', adoptionCenterController.renderAdoptionCenterDetails);

module.exports = router;
