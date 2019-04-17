# kooking
My cooking website

Special Features:
The cards are separated according to categories is a special feature of my website. Every recipe is displayed in the form of cards, that when hovered a transition can be experienced.
The user can observe the card lifting and focusses more than the rest of the cards.

This is using MVC approach with Views, Routes and Express Middleware before this assignment from the lecture videos. And I could practically implement all those learnt concepts on my web application.


1. There aren’t any errors in my HTML5 prototype. So proceeded with creating of JavaScript Objects to implement the business layer of the application. 
And used EJS template pages to present the view to the browser.
2. I implemented fetching data from database for Categories, Item, User Profile, Feedback and login page
3. Converted all the HTML5 pages to EJS templates
4. All the pages were checked for HTML5 validation requirement before proceeding
5. Implemented “Sign in” and “Sign out” features by using node.js session.
6. Added modal window for sign in
7. Improved overall animation
8. A database using mongoDB was created
9. File path to access the assets were kept relative and not specific to my machine
10. I have ProfileController to deal with the user items and personal profile
11. The application flow as per the pseudo code was implemented, with additional
validations and checks as deemed necessary.
12. When a user is signed in, “Sign out” button will be enabled, else it will remain hidden
13. Routes for business logic was added in the Controller, and only GET requests are handled right now.
14. This route controller is responsible for handling the following two requests:
    a. for a request to view the complete list of items this controller responds by
        bringing all item models from the database and sending that data to the
        categories/catalog view for display.
    b. for a request to view a single item this controller responds by bringing the
        requested item model from the database and sending that data to the item view for display.
15. Dynamic user profile functionality was implemented and session were used to store
data.

Usage instructions:
* Download the "public" folder as zip or clone the repository
* Navigate to the folder in the terminal and run "npm install" - this will install all the dependencies mentioned as per the "package.json" file.
* Launch a mongodb session in one terminal
* Open another terminal window to run the database script to setup database using mongodb.
* Run the command "mongo hw4_create_db.txt" to setup db
* Run npm start to launch a session and in the browser, navigate to "localhost:3000/"


