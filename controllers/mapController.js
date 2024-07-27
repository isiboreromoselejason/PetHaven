const renderMapPage = (req, res) => {
    res.render('map', { results: [] });
  };

  module.exports = {
    renderMapPage,
  };
