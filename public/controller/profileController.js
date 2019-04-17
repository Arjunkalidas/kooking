/*
 * @author arjunk
 */
const express = require('express');
const router = express.Router();
const itemDb = require('../utils/ItemDB');
const userDB = require('../utils/UserDB');
const userItemModel = require('../models/userItem.model');
const path = require('path');
const bodyParser = require('body-parser');
const viewpath = path.join(__dirname, '../views/pages/');

const urlencodedParser = bodyParser.urlencoded({
    extended: false
});

/* Sign In button functionality */
router.get('/myItems', urlencodedParser, function(req, res){
    if(req.session.theUser){

        console.log("session created");
        res.render(viewpath + 'myitems', {data: req.session.theUser,items:req.session.userItem});

    } else {

        req.session.theUser = userDB.getUser('1kng001');
        req.session.userItem = userDB.getUserItems('1kng001');

        res.redirect('/userProfile/myItems');
    }
});

/* Sign out button functionality */
router.get('/signout', function(req, res){

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
        var itemCode = req.body.itemCode;
        var itemName = req.body.itemName;
        var itemCategory = req.body.itemCategory;

        let flag = false;
        let userItems = req.session.userItem;


        for (let i = 0; i < userItems.length; i++) {

            if (userItems[i]._itemCode == itemCode) {

                console.log("Object found...not saving!");
                flag = true;
                break;
            }
        }

        if(!flag) {
            var userItemObj = new userItemModel(req.session.theUser._userID, itemName, parseInt(req.body.itemCode), itemCategory, 0, 'No');
            userItems.push(userItemObj);
        }

        req.session.userItem = userItems;

        res.render(viewpath + 'myitems', {data: req.session.theUser, items:req.session.userItem});
    } else {
        res.redirect('/userProfile/myItems');
        console.log("not in session!");
    }

});

/* Rate it button function */
router.post('/myProfile/feedback', urlencodedParser, function(req, res){
    var userData = {};

    if(!req.session.theUser){

        var itemData = itemDb.getItems();
        var data = {
            title:'My Items',
            path: req.url,
            items: itemData
        };
        res.render(viewpath + 'myitems', {data:data});
    } else {
        let sessionData = req.session;
        sessionData.theUser = userData;
    }
});


/* Navigate to Feedback */
router.get('/feedback', function(req, res){

    let isAllowedToRate = false;
    if(req.session.theUser) {
        let userItems = itemDb.getItems();

        let flag = false;
        let item = {};

        for (let i = 0; i < userItems.length; i++) {

            if (userItems[i]._itemCode == req.query.itemCode) {
                item = userItems[i];
                isAllowedToRate = true;
                flag = true;
                break;
            }
        }
        console.log(isAllowedToRate);

        if (flag) {
            res.render(viewpath + 'feedback', {data: item, items: req.session.userItem, canRate: isAllowedToRate});
        }
    }
});

/* Update function */
router.post('/feedbackManager', urlencodedParser, function(req, res){

     let flag = false;
    if(req.session.theUser) {
        let userItems = req.session.userItem;

        let item = {};

        for (let i = 0; i < userItems.length; i++) {

            if (userItems[i]._itemCode == req.body.itemCode) {

                item = userItems[i];
                flag = true;
                break;
            }
        }
        console.log(item);

        if (flag) {

            var new_rating = req.body.ratingSelection;
            var madeIt = req.body.madeIt;

            if(madeIt === 'on') {
                madeIt = 'Yes';
            } else {
                madeIt = 'No';
            }
            if (new_rating != undefined) {
                item._rating = new_rating;
                item._madeIt = madeIt;
                for (let i = 0; i < item.length; i++) {
                    if (userItems[i]._itemCode == item._itemCode) {
                        userItems[i].splice(i, 1);
                        userItems[i].push(item);
                        break;
                    }

                }
            }

            res.render(viewpath + 'myitems', {items: userItems, data: req.session.theUser});
        }

     }
});

/* Delete function */
router.get('/myProfile', function(req, res) {

    var item = itemDb.getItem(req.session.userItem._itemCode);
    var itemData = itemDb.getItems();

    var data = {
        title: 'My Items',
        path: req.url,
        items: itemData,
    };

    if(req.session.theUser) {
        let userItems = req.session.userItem;

        let item = {};

        for (let i = 0; i < userItems.length; i++) {

            if (userItems[i]._itemCode == req.query.itemCode) {

                item = userItems[i];
                userItems.splice(i, 1);
                flag = true;
                break;
            }
        }
            console.log(userItems);
            res.render(viewpath + 'myitems', {items: userItems, data: data});
        }

});

module.exports = router;
