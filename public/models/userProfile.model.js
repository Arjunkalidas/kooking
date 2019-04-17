/*
 * @author arjunk
 */

var UserItem = require('./userItem.model');

class UserProfileModel {

    /**
     * Constructor
     * @param userID
     * @param userItemsList[]
     */
    constructor(userID, userItemsList) {
        this._userID = userID;
        this._userItemsList = userItemsList;
    }

    checkIfItemExists(userItemCode) {

        for (let i=0; i < this._userItemsList.length; i++)
        {
            if (this._userItemsList[i]._itemCode == userItemCode) {
                return true;
            }
        }
        return false;
    };


    addItem(userItem) {

        if(this.checkIfItemExists(userItem._itemCode)) {
            return this._userItemsList;
        }

        else {
            let useritem = new UserItem(this._userID, userItem._item, userItem._itemCode, userItem._itemCategory, userItem._rating, userItem._madeIt);
            this._userItemsList.push(useritem);
            return this._userItemsList;
        }

    };

    removeItem(userItem) {
        let valueExists = false;

        for(let i=0; i < this._userItemsList.length; i++) {
            if(this._userItemsList[i]._itemCode == userItem._itemCode) {
                console.log("Element found, removing...");
                valueExists = true;
                this._userItemsList.splice(i, 1);
                break;
            }
        }

        if(valueExists == false) {
            console.log('Error removing the value');
            return this._userItemsList;
        } else {
            console.log('Value removed successfully');
            return this._userItemsList;
        }
    };

    updateItems(userItem) {
        let valueExists = false;
        for (let i = 0; i < this._userItemsList.length; i++) {

            if(this._userItemsList[i]._itemCode == userItem._itemCode) {
                valueExists = true;

                this.removeItem(userItem);
                let useritem = new UserItem(this._userID, userItem._item, userItem._itemCode, userItem._itemCategory, userItem._rating, userItem._madeIt);
                this._userItemsList.push(useritem);
            }

        }

        if(valueExists == false) {
            return this._userItemsList;
        } else {
            return this._userItemsList;
        }

    };

    getItems() {
        return this._userItemsList;
    };

    deleteItem() {
        this._userItemsList = [];
        return this._userItemsList;
    };
}


module.exports = UserProfileModel;