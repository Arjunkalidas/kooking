/*
 * @author arjunk
 */

const express = require('express');
const session = require('express-session');
const path = require('path');
var app = express();

// view engine setup
app.set('view engine', 'ejs');
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(session({name:'theUser', secret:'1234',
                proxy: true,
                 resave: true,
                saveUninitialized: true, cookie:{
                maxAge:99999
        }}));

app.use(function(req, res, next){
    if(req.session.theUser === undefined){
        global.isLogin = false;
    }else{
        global.isLogin = true;
        global.theUser = req.session.theUser
    }
    next();
});

let catalogController = require('./controller/catalogController');
let profileController = require('./controller/profileController');

//  define routes
app.use('/userProfile', profileController);
app.use('/user', profileController);
app.use('/', catalogController);
app.use('/index', catalogController);
app.use('/myItems', profileController);
app.use('/categories',catalogController);
app.use('/categories/:categoryName',catalogController);
app.use('/categories/item/:itemCode',catalogController);
app.use('/contact', catalogController);
app.use('/about', catalogController);

module.exports = app;