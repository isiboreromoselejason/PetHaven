require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const homeRouter = require('./routes/home');
const mapRouter = require('./routes/map');
const weatherRouter = require('./routes/weather');

app.use(express.static(path.join(__dirname, '../public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', homeRouter);
app.use('/map', mapRouter);
app.use('/weather', weatherRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
