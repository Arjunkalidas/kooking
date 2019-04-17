/*
 * @author arjunk
 */

const express = require('express');
const path = require('path');
var app = express();

let catalogController = require('./controller/catalogController');

// view engine setup
app.set('view engine', 'ejs');
app.use('/assets', express.static(path.join(__dirname, 'assets')));

//  define routes
app.use('/', catalogController);
app.use('/index', catalogController);
app.use('/myitems', catalogController);
app.use('/categories',catalogController);
app.use('/categories/:categoryName',catalogController);
app.use('/categories/item/:itemCode',catalogController);
app.use('/contact', catalogController);
app.use('/about', catalogController);

module.exports = app;