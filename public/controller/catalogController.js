/*
 * @author arjunk
 */
const express = require('express');
const router = express.Router();
const itemDb = require('../utils/ItemDB');
const UserItemModel = require('../models/userItem.model');
const path = require('path');

const viewpath = path.join(__dirname, '../views/pages/');

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
    let categoryList = [];
    let items = [];
    var categories = itemDb.getCategories();
    categories.then(function (result) {
        categoryList = result;
        // console.log("RESULT >>>>" + result);
        if(categoryList !== undefined) {
            var itemData = itemDb.getItems();
            itemData.then(function (result) {
                // console.log("RESULT >>>>" + result);
                items = result;

                var data= {
                    title:'Categories',
                    path: req.url,
                    categories: categoryList,
                    items: items
                };

                res.render(viewpath + 'categories', { data: data });
            })
                .catch(function (err) {
                    if (err) console.log(err);
                })
        }
    })
        .catch(function (err) {
            if(err) console.log(err);
            res.redirect('/');
        });
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
    var data = {};
    var categories = itemDb.getCategories();
    categories.then(function (cats) {
        var itemData = itemDb.getItembyCategory(categoryName);
        if(cats.length >= 1) {
            itemData.then(function (items) {
                var category = [];
                sortedCategories=cats.join('|').toLowerCase().split('|');
                if(sortedCategories.includes(categoryName.toLowerCase())){
                    category.push(cats[sortedCategories.indexOf(categoryName.toLowerCase())]);
                data = {
                            title: 'Categories',
                            path: req.url,
                            categoryName: categoryName,
                            categories: category,
                            items: items,
                        };
                        res.render(viewpath + 'categories', { data: data });
            }else{
                    data = {
                        title: 'Categories',
                        path: req.url,
                        categories: cats,
                        items: items,
                    };
                    res.render(viewpath + 'error', {data: data});
                }
            })
                .catch(function (err) {
                    console.log(err)
                })
        }
    })
        .catch(function (err) {
            console.log(err);
        })

});

router.use('/categories/item/:itemCode', function(req, res, next) {
    var itemCode = req.params.itemCode;

    var categories = itemDb.getCategories();
    categories.then(function (result) {
        let categoryList = result;
        var itemQuery = itemDb.getItem();
        itemQuery.then(function (itemResult) {
            let item = itemResult;
            if(item === null) {
                var data = {
                    title: 'Item',
                    path: req.url,
                    categories: categoryList,
                    items: item,
                };
                res.render(viewpath + 'error', {data: data});
            }
        })
            .catch(function (err) {
                console.log(err);
            })
    })
        .catch(function (err) {
            console.log(err);
        });
    next();
});

router.get('/categories/item/:itemCode', function (req, res) {
    var itemCode = req.params.itemCode;
    var oneItem = {};

    if(req.session.theUser) {
        var userId = req.session.theUser.userID;
    var item = itemDb.getItem(itemCode);
        item.then(function (result) {
            oneItem = result;

            if(oneItem.length === 0) {
                var pagedata= {
                    title:'404',
                    path: req.url
                };
                res.render(viewpath + '404', {data: pagedata});
            }
            var userItems = UserItemModel.getUserItemByItemCode(userId, itemCode);
            userItems.then(function (result) {
                console.log('UserItemModel.getUserItemByItemCode >>>>>>>>>>>>>'+result);

            })
                .catch(function (err) {
                    console.log(err);
                });
            var data = {
                title: 'Item',
                path: req.url,
                item: oneItem
            };
            res.render(viewpath + 'item', {data: data, flag: false});
        })
            .catch(function (err) {
                console.log(err);
            });
    } else {
        item = itemDb.getItem(itemCode);
        item.then(function (result) {
            oneItem = result;
            console.log("rESULT WHEN NOT IN SESSION "+ result.length);
            if (result.length < 1) {
                var categories = itemDb.getCategories();
                categories.then(function (result) {
                    let categoryList = result;
                    var itemQuery = itemDb.getItems();
                    itemQuery.then(function (itemResult) {

                        if(itemResult.length > 1) {
                            var data = {
                                title: 'Item',
                                path: req.url,
                                categories: categoryList,
                                items: itemResult,
                            };
                            res.render(viewpath + 'error', {data: data});
                        }
                    })
                        .catch(function (err) {
                            console.log(err);
                        })
                })
                    .catch(function (err) {
                        console.log(err);
                    });
            } else {
                var data = {
                    title: 'Item',
                    path: req.url,
                    item: result
                };
                res.render(viewpath + 'item', {data: data, flag: false});
            }
            // var data = {
            //     title: 'Item',
            //     path: req.url,
            //     item: oneItem
            // };
            // res.render(viewpath + 'item', {data: data, flag: true});
        })
            .catch(function (err) {
                console.log(err);
    });
    }
});

router.use('/myitems/item/:itemCode', function(req, res, next) {

    if(req.session.theUser) {

        let categoryList = [];

        var itemCode = req.params.itemCode;
        var categories = itemDb.getCategories();

        categories.then(function (result) {
            categoryList = result;

            if (categoryList !== undefined) {
                var itemData = itemDb.getItem(itemCode);
                itemData.then(function (result) {
                    if(result === null) {
                        var data = {
                            title: 'Item',
                            path: req.url,
                            categories: categoryList,
                            items: result,
                        };
                        res.render(viewpath + 'error', {data: data});
                    }
                })
                    .catch(function (err) {
                        if (err) console.log(err);
                    })
            }
        })
            .catch(function (err) {
                if (err) console.log(err);
                res.redirect('/');
            });
    }
    next();
});

router.get('/myitems/item/:itemCode', function(req, res) {

    var itemCode = req.params.itemCode;

    var item = itemDb.getItem(itemCode);
    item.then(function (result) {
        console.log("My item - result "+result);
        var data= {
            title:'Item',
            path: req.url,
            item: result
        };
            if(req.session.theUser) {
                res.render(viewpath + 'item', {data: data, flag: true});
            } else {
                res.render(viewpath + 'item', {data: data, flag: false});
            }
    })
        .catch(function (err) {
            console.log(err);
        });
});

router.get('/*', function(req, res) {

    var data= {
        title:'404',
        path: req.url
    };
    res.render(viewpath + '404', {data: data});
});

module.exports = router;
