const config = require('./config/config');
const express = require('express');

const app = express();


const routes = require('./routes/routes');

// Middleware to parse JSON requests
app.use(express.json());

// Use routes
app.use('/', routes);

// Start the server
module.exports = app;