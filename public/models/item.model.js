/*
 * @author arjunk
 */

class ItemModel {

    /**
     * Constructor
     * @param itemCode
     * @param itemName
     * @param catalogCategory
     * @param rating
     * @param description
     * @param ingredients
     * @param directions
     * @param imageURL
     */
    constructor(itemCode, itemName, catalogCategory, mealType, rating, description, ingredients, directions, imageURL) {
        this._itemCode = itemCode;
        this._itemName = itemName;
        this._catalogCategory = catalogCategory;
        this._mealType = mealType;
        this._rating = rating;
        this._description = description;
        this._ingredients = ingredients;
        this._directions = directions;
        this._imageURL = imageURL;
    }


    /**
     *
     * Getter and Setters
     */

    get itemCode() {
        return this._itemCode;
    }

    set itemCode(value) {
        this._itemCode = value;
    }

    get itemName() {
        return this._itemName;
    }

    set itemName(value) {
        this._itemName = value;
    }

    get catalogCategory() {
        return this._catalogCategory;
    }

    set catalogCategory(value) {
        this._catalogCategory = value;
    }

    get mealType() {
        return this._mealType;
    }

    set mealType(value) {
        this._mealType = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get rating() {
        return this._rating;
    }

    set rating(value) {
        this._rating = value;
    }

    get ingredients() {
        return this._ingredients;
    }

    set ingredients(value) {
        this._ingredients = value;
    }

    get directions() {
        return this._directions;
    }

    set directions(value) {
        this._directions = value;
    }

    get imageURL() {
        return this._imageURL;
    }

    set imageURL(value) {
        this._imageURL = value;
    }


}

module.exports = ItemModel;