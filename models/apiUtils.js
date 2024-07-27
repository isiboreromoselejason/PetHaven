const axios = require('axios');

const getGoogleMapsData = async (query) => {
  const response = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json`, {
    params: {
      query,
      key: process.env.GOOGLE_MAPS_API_KEY,
    },
  });
  return response.data;
};

const getPetfinderData = async (endpoint) => {
  const response = await axios.get(`https://api.petfinder.com/v2/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${process.env.PETFINDER_API_KEY}`,
    },
  });
  return response.data;
};

module.exports = {
  getGoogleMapsData,
  getPetfinderData,
};
