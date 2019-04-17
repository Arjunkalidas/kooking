/*
 * @author arjunk
 */
var express = require('express');
var router = express.Router();
var itemDb = require('../utils/ItemDB');
var path = require('path');

var viewpath = path.join(__dirname, '..', '/views/pages/');

/* GET index page. */
router.get('/', function(req, res) {
    var homePageData = itemDb.getHomePageItems();

    var data= {
        title:'Home',
        path: req.url,
        homePageData: homePageData
    };
    res.render(viewpath + 'index', { data: data });
});

router.get('/index', function(req, res) {
    var homePageData = itemDb.getHomePageItems();
    var data= {
        title:'Home',
        path: req.url,
        homePageData: homePageData
    };
    res.render(viewpath + 'index', { data: data });
});

router.get('/categories', function(req, res) {

    var categories = getCategories();
    var itemData = itemDb.getItems();

    var data= {
        title:'Categories',
        path: req.url,
        categories: categories,
        items: itemData
    };

    res.render(viewpath + 'categories', { data: data });
});

router.get('/contact', function(req, res) {

    var data= {
        title:'Contact Us',
        path: req.url
    };
    res.render(viewpath + 'contact', {data:data});
});

router.get('/about', function(req, res) {

    var data= {
        title:'About Us',
        path: req.url
    };
    res.render(viewpath + 'about', {data:data});
});

router.get('/categories/:categoryName', function(req, res) {
    var categoryName = req.params.categoryName;
    var categories = getCategories();
    var itemData = itemDb.getItems();
    sortedCategories=categories.join('|').toLowerCase().split('|');
    if(sortedCategories.includes(categoryName.toLowerCase())){
        var category = [];
        category.push(categories[sortedCategories.indexOf(categoryName.toLowerCase())]);
        var data = {
            title: 'Categories',
            path: req.url,
            categoryName: categoryName,
            categories: category,
            items: itemData,
        };
        res.render(viewpath + 'categories', { data: data });
    }else{
        data = {
            title: 'Categories',
            path: req.url,
            categories: categories,
            items: itemData,
        };
        res.render(viewpath + 'error', {data: data});
    }
});

router.use('/categories/item/:itemCode', function(req, res, next) {
    var itemCode = req.params.itemCode;
    var item = itemDb.getItem(itemCode);
    var categories = getCategories();
    var itemData = itemDb.getItems();

    if(item === null) {
        var data = {
            title: 'Item',
            path: req.url,
            categories: categories,
            items: itemData,
        };
        res.render(viewpath + 'error', {data: data});
    }
    next();
});

router.get('/categories/item/:itemCode', function (req, res) {
    var itemCode = req.params.itemCode;
    var item = itemDb.getItem(itemCode);

    var data = {
        title: 'Item',
        path: req.url,
        item: item
    };
    res.render(viewpath + 'item', {data: data});
});

router.get('/myitems', function(req, res) {
    var itemData = itemDb.getItems();

    var data= {
        title:'My Items',
        path: req.url,
        items: itemData
    };
    res.render(viewpath + 'myitems', {data:data});
});

router.use('/myitems/item/:itemCode', function(req, res, next) {
    var itemCode = req.params.itemCode;
    var item = itemDb.getItem(itemCode);
    var categories = getCategories();
    var itemData = itemDb.getItems();

    if(item === null) {
        var data = {
            title: 'Item',
            path: req.url,
            categories: categories,
            items: itemData,
        };
        res.render(viewpath + 'error', {data: data});
    }
    next();
});

router.get('/myitems/item/:itemCode', function(req, res) {
    var itemCode = req.params.itemCode;
    var item = itemDb.getItem(itemCode);

    var data= {
        title:'Item',
        path: req.url,
        item: item
    };
    res.render(viewpath + 'item', {data: data});
});

router.get('/feedback', function(req, res) {

    var data= {
        title:'Feedback',
        path: req.url
    };
    res.render(viewpath + 'feedback', {data: data});
});

router.get('/*', function(req, res) {

    var data= {
        title:'404',
        path: req.url
    };
    res.render(viewpath + '404', {data: data});
});

var categories = [];

let getCategories = function() {
    // get the category of each item
    var data = itemDb.getItems();
    data.forEach(function (item) {
        if(!categories.includes(item.catalogCategory)){
            categories.push(item.catalogCategory);
        }
    });
    return categories;
};

module.exports = router;