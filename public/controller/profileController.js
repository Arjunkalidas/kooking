/*
 * @author arjunk
 */
const express = require('express');
const router = express.Router();
const itemDb = require('../utils/ItemDB');
const userDB = require('../utils/UserDB');
const userItemModel = require('../models/userItem.model');
const UserModel = require('../models/user.model');

const path = require('path');
const bodyParser = require('body-parser');
const viewpath = path.join(__dirname, '../views/pages/');

const urlencodedParser = bodyParser.urlencoded({
    extended: false
});

/* Login functionality */
router.post('/myProfile', urlencodedParser, function(req, res){

    var data= {
        title:'Login',
        path: req.url,
    };
    var flag = true;

    if(!req.session.theUser) {
        var username = req.body.username;
        var password = req.body.password;
        console.log("=========USERNAME=========="+username);
        console.log("=========PASSWORD=========="+password);
        var userData = userDB.getUsers();
        userData.then(function (users) {
            console.log(users.length);
            for(let i=0; i < users.length; i++) {
                if(users[i].userID === username && users[i].password === password && username !== '' && password !== '') {
                    flag = false;
                    let user = new UserModel(users[i].userID, users[i].firstName, users[i].lastName, users[i].emailAddress, users[i].addressField_1,
                        users[i].addressField_2, users[i].city, users[i].state, users[i].zipCode, users[i].country,
                        users[i].dateOfBirth, users[i].phoneNumber, users[i].password);

                    req.session.theUser = user;
                    break;
                }
            }
            if (flag === true) {
                res.render(viewpath + 'login', {flag: flag, data:data});
            }
            else {
                let queryUserItems = userItemModel.getUserItems(username);
                queryUserItems.then(function (result) {
                    console.log("result    +++++++++++++++++++++    " + result);
                    req.session.userItem = result;
                    res.render(viewpath + 'myitems', {
                        user_obj: req.session.theUser,
                        items: req.session.userItem,
                        data: data,
                        isLogin: true
                    });
                })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
        })
            .catch(function (err) {
                console.log(err);
            });

    } else {
        console.log("Session exists");
        res.render(viewpath + 'myitems', {data: req.session.theUser, items: req.session.userItem});
    }
});


/* "My Recipes" button functionality */
router.get('/myItems', function(req, res) {

    var data= {
        title:'Login',
        path: req.url,
    };

    if(req.session.theUser){

        console.log("Session exists");
        res.render(viewpath + 'myitems', {data: req.session.theUser, items:req.session.userItem});

    } else {
        console.log("not in session!");
        res.render(viewpath + 'login', {isLogin: false, data: data, flag:false});
    }
});

/* Sign out button functionality */
router.get('/signout', function(req, res){
    isLogin = true;
    console.log('Sign out >> ');
    var homePageData = itemDb.getHomePageItems();
    var data= {
        title:'Home',
        path: req.url,
        homePageData: homePageData
    };

    if(isLogin){
        console.log("session active, destroying...");
        req.session.theUser = undefined;
        req.session.destroy();
        this.isLogin = false;
        res.render(viewpath + 'index', {data: data});
    }
});

/* Saveit button function */
router.post('/addItem', urlencodedParser, function(req, res){

    if(req.session.theUser) {
        isLogin = true;
        var itemName = req.body.itemName;
        var itemCategory = req.body.itemCategory;
        var userId = req.session.theUser._userID;
        var itemCode = parseInt(req.body.itemCode);
        var rating = req.body.rating;
        var madeIt = req.body.madeIt;

        let query = userItemModel.getUserItemByItemCode(userId, itemCode);
        query.then(function (result) {
            if(result.length === 1) {
                res.render(viewpath + 'myitems', {data: req.session.theUser, items:req.session.userItem});
            } else {
                let itemToSave = userItemModel.addUserItem(userId, itemCode, itemName, itemCategory, rating, madeIt);
                itemToSave.then(function (result) {
                    console.log("------------------"+result);
                    let itemsToDisplay = userItemModel.getUserItems(userId);

                    itemsToDisplay.then(function (items) {

                        req.session.userItem = items;
                        res.render(viewpath + 'myitems', {data: req.session.theUser, items:req.session.userItem});
                    })
                })
                    .catch(function (err) {
                        console.log(err);
                    })
            }
        })
            .catch(function (err) {
                console.log(err);
            })
    } else {
        console.log("not in session!");
        var data = {
            title: 'Item'
        };
        res.render(viewpath + 'login', {isLogin: false, data:data, flag:false});
    }
});

/* Navigate to Feedback, when "Rate it" or "Update" is clicked */
router.get('/feedback', function(req, res) {

    if(req.session.theUser) {
        var itemCode = req.query.itemCode;
        var userId = req.session.theUser._userID;

        let userItems = itemDb.getItem(itemCode);
        userItems.then(function (result) {
            if (result.length >= 1) {
                console.log("++++++++++++++++++ Feedback Page -> " + result + '  ------'+itemCode);
                let item = userItemModel.getUserItems(userId);
                item.then(function (item) {
                    console.log("++++++++++++++++++ Feedback Page ITEM -> " + item);
                    res.render(viewpath + 'feedback', {data: result, item:item});
                })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    } else {
        console.log("No session found, but loading the page with minimal actions");
        var data = {
            title: 'My items',
            path: req.url
        };
        res.render(viewpath + 'feedback', {data: data});
    }
});

/* Update function */
router.post('/feedbackManager', urlencodedParser, function(req, res){

    if(req.session.theUser) {
        var itemCode = req.body.itemCode;
        var new_rating = req.body.ratingSelection;
        var checkBox = req.body.madeIt;

        var user_session = req.session.theUser;
        var userId = user_session._userID;

        madeIt = checkBox === 'on';

        var data= {
            title:'My Items',
            path: req.url,
        };

        let query = userItemModel.addItemRating(userId, itemCode, new_rating, madeIt);
        query.then(function (result) {

            let updatedItemQuery = userItemModel.getUserItems(userId);
            updatedItemQuery.then(function (updatedList) {

                req.session.userItem = updatedList;
                res.render(viewpath + 'myitems', {items: req.session.userItem, data: data});
            })
                .catch(function (err) {
                    console.log(err);
                })
        })
            .catch(function (err) {
                console.log(err);
            });
    }
});

/* Delete function */
router.get('/myProfile', function(req, res) {

    if(req.session.theUser) {
        var itemCode = req.query.itemCode;
        var userId = req.session.theUser._userID;

        var data = {
            title: 'My Items',
            path: req.url
        };

        let queryItem = userItemModel.deleteUserItem(userId, itemCode);
        queryItem.then(function (result) {
            console.log(result.deletedCount);

            if(result.deletedCount === 1) {
                let reloadedSet = userItemModel.getUserItems(userId);
                reloadedSet.then(function (newList) {
                    req.session.userItem = newList;
                    res.render(viewpath + 'myitems', {items: req.session.userItem, data: data});
                })
                    .catch(function (err) {
                        console.log(err);
                    })
            }
        })
            .catch(function (err) {
                console.log(err);
            })
    }
});

module.exports = router;
