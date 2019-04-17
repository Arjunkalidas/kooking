/*
 * @author arjunk
 */
const connMan = require('../utils/ConnectionManager');
const userItem = connMan.UserItemModel;

var useritem = class UserItemModel {

    /**
     * Constructor
     * @param item
     * @param rating
     * @param madeIt
     */
    constructor(userID, itemName, itemCode, catalogCategory, rating, madeIt) {
        this._userID = userID;
        this._itemName = itemName;
        this._itemCode = itemCode;
        this._catalogCategory = catalogCategory;
        this._rating = rating;
        this._madeIt = madeIt;
    }
};

var addItemRating = function (userID, itemCode, rating, madeIt) {
    return userItem.findOneAndUpdate({userID: userID, itemCode: itemCode}, {
        $set: {
            rating: rating,
            madeIt: madeIt
        }
    }, {new: true}).exec();
};

var addUserItem = function(userID, itemCode, itemName, catalogCategory, rating, madeIt) {
    return userItem.findOneAndUpdate({userID: userID, itemCode: itemCode}, {
        $set: {
            userID: userID, itemCode: itemCode, itemName: itemName,
            catalogCategory: catalogCategory, rating: rating, madeIt: madeIt
        }
    }, {new: true, upsert: true}).exec();
};

var getUserItems = function(userID) {
    return userItem.find({userID: userID}).exec();
};

var getUserItemByItemCode = function(userID, itemCode) {
    return userItem.find({userID: userID, itemCode: itemCode}).exec();
};

var getAllUserItems = function() {
    return userItem.find({}).exec();
};

var deleteUserItem = function(userID, itemCode) {
    return userItem.deleteOne({userID: userID, itemCode: itemCode}).exec();
};

module.exports = {
    useritem: useritem,
    addItemRating: addItemRating,
    addUserItem: addUserItem,
    getUserItems: getUserItems,
    getUserItemByItemCode: getUserItemByItemCode,
    getAllUserItems: getAllUserItems,
    deleteUserItem: deleteUserItem
};