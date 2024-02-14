// load .env data into process.env
require('dotenv').config();
const path = require("path");

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieSession = require('cookie-session');

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, "./public")));
app.use(cookieSession({
  name: 'session',
  keys: ['catch22'],
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own

const mealApiRoutes = require('./routes/menu-items-api');
const orderRoutes = require('./routes/orders-api');
const cartItemsRoutes = require('./routes/cart_items-api');
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`

app.use('/api/menu-items', mealApiRoutes);

app.use('/api/orders', orderRoutes);
app.use('/api/cart-items', cartItemsRoutes);
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).


// Set our Id
app.get('/login/:id', (req, res) => {
  req.session.user_id = req.params.id;
  res.redirect('/');
});

// // Used for retrieving ID
// app.post('/login/', (req, res) => {
//   res.redirect('/');
// });

app.get('/logout', (req, res) => {
  req.session = null;
  res.redirect('/');
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
