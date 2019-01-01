const express = require('express');
const expressLayouts  = require('express-ejs-layouts');
const morgan = require('morgan');
const app = express();
const router = express.Router();
const env = require('./config/env');

// Views
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

// Logging
app.use(morgan('dev'));

// Static files
app.use(express.static(`${__dirname}/public`));

// Routes
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(env.port, () => console.log(`Server up and running on port: ${env.port}.`));
