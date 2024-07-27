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

const getAdoptAPetData = async () => {
  const response = await axios.get('https://api.adoptapet.com/v1/pets', {
    headers: {
      Authorization: `Bearer ${process.env.ADOPT_A_PET_API_KEY}`,
    },
  });
  return response.data;
};

module.exports = {
  getGoogleMapsData,
  getAdoptAPetData,
};
