const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const indexRoutes = require('./routes/index');
const petStoreRoutes = require('./routes/petStore');
const clinicRoutes = require('./routes/clinic');
const adoptionCenterRoutes = require('./routes/adoptionCenter');
const adoptablePetsRoutes = require('./routes/adoptablePets');

app.use('/', indexRoutes);
app.use('/pet-store', petStoreRoutes);
app.use('/clinic', clinicRoutes);
app.use('/adoption-center', adoptionCenterRoutes);
app.use('/adoptable-pets', adoptablePetsRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
