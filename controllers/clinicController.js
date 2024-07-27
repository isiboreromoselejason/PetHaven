const { getGoogleMapsData } = require('../models/apiUtils');

const renderClinicDetails = async (req, res) => {
  const placeId = req.params.id;
  const data = await getGoogleMapsData(`place_id:${placeId}`);
  res.render('clinicDetails', { details: data.result });
};

module.exports = {
  renderClinicDetails,
};
