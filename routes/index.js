

const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const mapController = require('../controllers/mapController');

router.get('/', homeController.renderHomePage);
router.get('/search', homeController.handleSearch);
router.get('/map', mapController.renderMapPage);

module.exports = router;
