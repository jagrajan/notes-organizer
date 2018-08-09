import bodyParser from 'body-parser';
import express from 'express';
import env from 'dotenv';
import session from 'express-session';

import indexRouter from '../routes/index';

// Load dotenv
env.config();

// Initialize the app server
const app = express();

// Set view engine
app.set('view engine', 'pug');

// Set up body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up session middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));

app.post('/login', (req, res, next) => {
  if (req.body.username === process.env.AUTH_USERNAME
    && req.body.password === process.env.AUTH_PASSWORD) {
    req.session.authenticated = true;
  }
  next();
});

app.get('/login', (req, res) => res.render('login'));

app.use(indexRouter);

// Listen for incoming requests
app.listen(process.env.PORT, () => console.log(`App is running on port ${process.env.PORT}`));
