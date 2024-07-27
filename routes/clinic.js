

const express = require('express');
const router = express.Router();
const clinicController = require('../controllers/clinicController');

router.get('/:id', clinicController.renderClinicDetails);

module.exports = router;
