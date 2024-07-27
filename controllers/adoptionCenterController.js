const { getGoogleMapsData } = require('../models/apiUtils');

const renderAdoptionCenterDetails = async (req, res) => {
  const placeId = req.params.id;
  const data = await getGoogleMapsData(`place_id:${placeId}`);
  res.render('adoptionCenterDetails', { details: data.result });
};

module.exports = {
  renderAdoptionCenterDetails,
};
