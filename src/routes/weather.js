const express = require('express');
const axios = require('axios');
const router = express.Router();

const OPENWEATHERMAP_API_KEY = process.env.OPENWEATHERMAP_API_KEY;

router.get('/current', async (req, res) => {
  const { lat, lon } = req.query;
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        lat: lat,
        lon: lon,
        appid: OPENWEATHERMAP_API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Unable to fetch weather data.' });
  }
});

router.get('/', (req, res) => {
  res.render('weather');
});

module.exports = router;
