const { getAdoptAPetData } = require('../models/apiUtils');

const renderAdoptablePetsPage = async (req, res) => {
  const data = await getAdoptAPetData('animals');
  res.render('adoptablePets', { pets: data.animals });
};

module.exports = {
  renderAdoptablePetsPage,
};
