/*
 * @author arjunk
 */

var useritem = class UserItemModel {

    /**
     * Constructor
     * @param item
     * @param rating
     * @param madeIt
     */
    constructor(userID, itemName, itemCode, itemCategory, rating, madeIt) {
        this._userID = userID;
        this._itemName = itemName;
        this._itemCode = itemCode;
        this._itemCategory = itemCategory;
        this._rating = rating;
        this._madeIt = madeIt;
    }


    get userID() {
        return this._userID;
    }

    set userID(value) {
        this._userID = value;
    }

    get itemName() {
        return this._itemName;
    }

    set itemName(value) {
        this._itemName = value;
    }

    get itemCode() {
        return this._itemCode;
    }

    set itemCode(value) {
        this._itemCode = value;
    }

    get itemCategory() {
        return this._itemCategory;
    }

    set itemCategory(value) {
        this._itemCategory = value;
    }

    get rating() {
        return this._rating;
    }

    set rating(value) {
        this._rating = value;
    }

    get madeIt() {
        return this._madeIt;
    }

    set madeIt(value) {
        this._madeIt = value;
    }
};

module.exports = useritem;