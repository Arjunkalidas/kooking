/*
 * @author arjunk
 */

var User = require('../models/user.model');
var UserItem = require('../models/userItem.model');
var UserProfile = require('../models/userProfile.model');
var itemDb = require('../utils/ItemDB');

module.exports.getUsers = function () {

    let users = [];
    for (let i = 0; i < userdata.length; i++) {
        let user = new User(userdata[i].userID,
            userdata[i].firstName,
            userdata[i].lastName,
            userdata[i].emailAddress,
            userdata[i].addressField_1,
            userdata[i].addressField_2,
            userdata[i].city,
            userdata[i].state,
            userdata[i].zipCode,
            userdata[i].country,
            userdata[i].dateOfBirth,
            userdata[i].phoneNumber);

        users.push(user);
    }
    return users;
};

/**
 *
 * @param userID
 * @returns {*}
 */
module.exports.getUser = function (userID) {
    for (var i = 0; i < userdata.length; i++) {
        if (userdata[i].userID == userID) {

            var user = new User(userdata[i].userID,
                userdata[i].firstName,
                userdata[i].lastName,
                userdata[i].emailAddress,
                userdata[i].addressField_1,
                userdata[i].addressField_2,
                userdata[i].city,
                userdata[i].state,
                userdata[i].zipCode,
                userdata[i].country,
                userdata[i].dateOfBirth,
                userdata[i].phoneNumber);
            return user;
        }
    }
    return null;
};

/**
 *
 * @param userID
 * @returns {*}
 */
module.exports.getUserItems = function (userID) {
    let userItems = [];
    for (var i = 0; i < userItem.length; i++) {
        if (userItem[i].userID == userID) {

            let useritem = new UserItem(userItem[i].userID,
                                        userItem[i].item,
                                        userItem[i].itemCode,
                                        userItem[i].itemCategory,
                                        userItem[i].rating,
                                        userItem[i].madeIt);

            userItems.push(useritem);
        }
    }
    return userItems;
};


/**
 *
 * @param userID
 * @returns {*}
 */
module.exports.getUserProfile = function (userID, userItem) {

    for (var i = 0; i < userProfile.length; i++) {
        if (userProfile[i].userID == userID) {

            let userprofile = new UserProfile(userProfile[i].userID,
                                              userProfile[i].userItem);

        }
        return userprofile;
    }
    return null;
};



// Hard coded data
const userdata = [
    {
        userID: '1kng001',
        firstName: 'Robert',
        lastName: 'Bosch',
        emailAddress: 'rboach91@ymail.com',
        addressField_1: '9823 Grove Hill Lane',
        addressField_2: '1827',
        city: 'Charlotte',
        state: 'NC',
        zipCode: '282903',
        country: 'United States',
        dateOfBirth: '11-03-1989',
        phoneNumber: '980-289-4303',
    }
];

const userItem= [
    {
        userID: '1kng001',
        item: itemDb.getItem(2).itemName,
        itemCode: itemDb.getItem(2).itemCode,
        itemCategory: itemDb.getItem(2).catalogCategory,
        rating: itemDb.getItem(2).rating,
        madeIt: 'Yes'
    },
    {
        userID: '1kng001',
        item: itemDb.getItem(1).itemName,
        itemCode: itemDb.getItem(1).itemCode,
        itemCategory: itemDb.getItem(1).catalogCategory,
        rating: itemDb.getItem(1).rating,
        madeIt: 'Yes'
    }
];

const userProfile = [
        {
         userID: '1kng001',
         userItem: this.getUserItems('1kng001')
        }
];