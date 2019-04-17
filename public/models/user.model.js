/*
 * @author arjunk
 */

class UserModel {

    /**
     * Constructor
     * @param userID
     * @param firstName
     * @param lastName
     * @param emailAddress
     * @param addressField_1
     * @param addressField_2
     * @param city
     * @param state
     * @param zipCode
     * @param country
     * @param dateOfBirth
     * @param phoneNumber
     */
    constructor(userID, firstName, lastName, emailAddress, addressField_1, addressField_2, city, state, zipCode,
                country, dateOfBirth, phoneNumber) {
        this._userID = userID;
        this._firstName = firstName;
        this._lastName = lastName;
        this._emailAddress = emailAddress;
        this._addressField_1 = addressField_1;
        this._addressField_2 = addressField_2;
        this._city = city;
        this._state = state;
        this._zipCode = zipCode;
        this._country = country;
        this._dateOfBirth = dateOfBirth;
        this._phoneNumber = phoneNumber;

    }


    get userID() {
        return this._userID;
    }

    set userID(value) {
        this._userID = value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get emailAddress() {
        return this._emailAddress;
    }

    set emailAddress(value) {
        this._emailAddress = value;
    }

    get addressField_1() {
        return this._addressField_1;
    }

    set addressField_1(value) {
        this._addressField_1 = value;
    }

    get addressField_2() {
        return this._addressField_2;
    }

    set addressField_2(value) {
        this._addressField_2 = value;
    }

    get city() {
        return this._city;
    }

    set city(value) {
        this._city = value;
    }

    get state() {
        return this._state;
    }

    set state(value) {
        this._state = value;
    }

    get zipCode() {
        return this._zipCode;
    }

    set zipCode(value) {
        this._zipCode = value;
    }

    get country() {
        return this._country;
    }

    set country(value) {
        this._country = value;
    }

    get dateOfBirth() {
        return this._dateOfBirth;
    }

    set dateOfBirth(value) {
        this._dateOfBirth = value;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    set phoneNumber(value) {
        this._phoneNumber = value;
    }
}

module.exports = UserModel;