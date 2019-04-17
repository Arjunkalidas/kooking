/*
 * @author arjunk
 */
const connMan = require('../utils/ConnectionManager');
const user = connMan.UserModel;
var UserProfile = require('../models/userProfile.model');
var itemDb = require('../utils/ItemDB');

var getUsers = function () {
    return user.find({}).exec();
};

/**
 *
 * @param userID
 * @returns {*}
 */
var getUser = function (userID) {
    return user.find({userID: userID}).exec();
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

// const userProfile = [
//         {
//          userID: '1kng001',
//          userItem: this.getUserItems('1kng001')
//         }
// ];

module.exports = {
    getUsers: getUsers,
    getUser: getUser
};