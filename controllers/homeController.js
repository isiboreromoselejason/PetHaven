const { getGoogleMapsData } = require('../models/apiUtils');

const renderHomePage = (req, res) => {
  res.render('home');
};

const handleSearch = async (req, res) => {
  const query = req.query.search;
  const data = await getGoogleMapsData(query);
  res.render('map', { results: data.results });
};

module.exports = {
  renderHomePage,
  handleSearch,
};
