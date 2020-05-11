const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const equipementRoutes = require('./routes/equipement');
const siteRoutes = require('./routes/site');
const secteurRoutes = require('./routes/secteur');
const atelierRoutes = require('./routes/atelier');
const avisRoutes = require('./routes/avis');

const app = express();
const url ='mongodb+srv://anis:22225544@cluster0-hjb4o.mongodb.net/test?retryWrites=true&w=majority';
// Connect to BDD
mongoose.connect(url,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
// Gerer le CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  // transformer le core de la requete en objet javaScript
  app.use(bodyParser.json());
   //Route authentification
  app.use('/api/auth', userRoutes);
  app.use('/api/equipement', equipementRoutes);
  app.use('/api/site', siteRoutes);
  app.use('/api/secteur', secteurRoutes);
  app.use('/api/atelier', atelierRoutes);
  app.use('/api/avis', avisRoutes);

module.exports = app;