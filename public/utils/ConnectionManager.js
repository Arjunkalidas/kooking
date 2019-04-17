/*
 * @author arjunk
 */

const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/kooking';
let connection = mongoose.connect(url);

connection.then(() =>  {
    console.log('Connection Successful!');
}).catch(err => {
    if (err) throw err;
    console.log('Error');
});

// create an item recipe schema
const Recipe = new mongoose.Schema({
    itemCode: {type: String, required: true},
    itemName: {type: String, required: true},
    catalogCategory: {type: String, required: true},
    mealType: {type: String, required: true},
    rating: {type: Number, default: 0},
    description: {type: String, required: true},
    ingredients: {type: Array, required: true},
    directions: {type: Array, required: true},
    imageURL: {type: String, required: true}
}, {collection: 'recipes'});

// create a user schema
const User = new mongoose.Schema({
    userID: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    emailAddress: {type: String, required: true},
    addressField_1: {type: String, required: true},
    addressField_2: {type: String, required: false},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zipCode: {type: String, required: true},
    country: {type: String, required: true},
    dateOfBirth: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    password: {type: String, required: true}
}, {collection: 'user'});

// create a useritem schema
const UserItem = new mongoose.Schema({
    userID: {type: String, required: true},
    itemName: {type: String, required: true},
    itemCode: {type: String, required: true},
    catalogCategory: {type: String, required: true},
    rating: {type: Number, required: true},
    madeIt: {type: Boolean, required: true}
}, {collection: 'useritem'});

const RecipeModel = mongoose.model('recipes', Recipe,'recipes');
const UserModel = mongoose.model('user', User, 'user');
const UserItemModel = mongoose.model('useritem', UserItem, 'useritem');

module.exports = {
    RecipeModel: RecipeModel,
    UserModel: UserModel,
    UserItemModel: UserItemModel
};