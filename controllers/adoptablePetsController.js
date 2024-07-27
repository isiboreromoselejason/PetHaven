const { getPetfinderData } = require('../models/apiUtils');

const renderAdoptablePetsPage = async (req, res) => {
  const data = await getPetfinderData('animals');
  res.render('adoptablePets', { pets: data.animals });
};

module.exports = {
  renderAdoptablePetsPage,
};
