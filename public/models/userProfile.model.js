/*
 * @author arjunk
 */

var UserItem = require('./userItem.model');

var userProfile = class UserProfileModel {

    /**
     * Constructor
     * @param userID
     * @param userItemsList[]
     */
    constructor(userID, userItemsList) {
        this.userID = userID;
        this.userItemsList = userItemsList;
    }

    checkIfItemExists(userItemCode) {

        for (let i=0; i < this.userItemsList.length; i++)
        {
            if (this.userItemsList[i]._itemCode === userItemCode) {
                return true;
            }
        }
        return false;
    };


    addItem(userItem) {

        if(this.checkIfItemExists(userItem._itemCode)) {
            return this.userItemsList;
        }

        else {
            let useritem = new UserItem(this._userID, userItem._itemName, userItem._itemCode, userItem._itemCategory, userItem._rating, userItem._madeIt);
            this.userItemsList.push(useritem);
            return this.userItemsList;
        }

    };

    deleteItem(userItem) {
        let valueExists = false;

        for(let i=0; i < this.userItemsList.length; i++) {
            if(this.userItemsList[i]._itemCode == userItem._itemCode) {
                console.log("Element found, removing...");
                valueExists = true;
                this.userItemsList.splice(i, 1);
                break;
            }
        }

        if(valueExists == false) {
            console.log('Error removing the value');
            return this.userItemsList;
        } else {
            console.log('Value removed successfully');
            return this.userItemsList;
        }
    };

    updateItem(userItem) {

        if(this.checkIfItemExists(userItem._itemCode)) {
            let item = {};
            item = userItem;

            if (userItem._madeIt === 'on') {
                userItem._madeIt = 'Yes';
            } else {
                userItem._madeIt = 'No';
            }

            if (userItem._rating != undefined) {
                item._rating = userItem._rating;
                item._madeIt = userItem._madeIt;

                for (let i = 0; i < this.userItemsList.length; i++) {
                    if (this.userItemsList[i]._itemCode == item._itemCode) {
                        this.userItemsList.splice(i, 1);
                        let useritem = new UserItem(this._userID, userItem._itemName, userItem._itemCode, userItem._itemCategory, item._rating, item._madeIt);
                        this.userItemsList.push(useritem);
                        break;
                    }

                }
            }

            return this.userItemsList;
        }

    };

    getItems() {
        return this.userItemsList;
    };

    deleteAll() {
        this.userItemsList = [];
        return this.userItemsList;
    };
};


module.exports = userProfile;