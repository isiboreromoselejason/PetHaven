const express = require('express');
const axios = require('axios');
const router = express.Router();

const FOURSQUARE_API_KEY = process.env.FOURSQUARE_API_KEY;

router.get('/', async (req, res) => {
  const { query } = req.query;
  if (query) {
    try {
      const response = await axios.get('https://api.foursquare.com/v3/places/search', {
        params: {
          query: query,
          limit: 10
        },
        headers: {
          accept: 'application/json',
          Authorization: FOURSQUARE_API_KEY
        }
      });
      console.log(response.data.results[0]);
      res.render('map', { locations: response.data.results });
    } catch (error) {
      console.error('Error fetching Foursquare data:', error);
      res.render('map', { error: 'Unable to fetch data from Foursquare.' });
    }
  } else {
    res.render('map');
  }
});

module.exports = router;
