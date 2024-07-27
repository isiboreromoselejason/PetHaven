const { getGoogleMapsData } = require('../models/apiUtils');

const renderPetStoreDetails = async (req, res) => {
  const placeId = req.params.id;
  const data = await getGoogleMapsData(`place_id:${placeId}`);
  res.render('petStoreDetails', { details: data.result });
};

module.exports = {
  renderPetStoreDetails,
};
