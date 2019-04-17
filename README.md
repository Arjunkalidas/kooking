# kooking
A website for recipes, sharing and buying!

This webiste features an intuitive user experience for browsing recipes, creating account, bookmarking recipes and sharing with others. Future updates would include buying appliances and recipe packages, payment gateway integration and Google analytics for collecting statistics.

Special Features:
The general layout is a card based layout. 
Categories is a special feature of my website, where users can find recipes based on the many categories of food. 
Every recipe is displayed in the form of cards as well, that features, a small trivia, ingredients, steps to make and saving or rating the same.
Hovering over the cards gives a smooth animation that gives a perception of lifting the cards.

## Technical Stack

* I have used an MVC approach with Views, Routes, Express Middleware, Sessions and Database integration. 
* HTML5 pages are validated for errors after every iteration.
* EJS templating is used for pages to present the view to the browser.
* Implemented “Sign in” and “Sign out” features by using node.js sessions.
* Users can find a modal window for sign in
* mongoDB is used here for database part of the application.
* File path to access the assets were kept relative and not specific to my machine
* I have ProfileController to deal with the user items and personal profile
* This route controller is responsible for handling the following two requests:
    a. for a request to view the complete list of items this controller responds by
        bringing all item models from the database and sending that data to the
        categories/catalog view for display.
    b. for a request to view a single item this controller responds by bringing the
        requested item model from the database and sending that data to the item view for display.
* Dynamic user profile functionality was implemented and session were used to store
  data.


## Getting Started

* Download the "public" folder as zip or clone the repository
* Navigate to the folder in the terminal and run "npm install" - this will install all the dependencies mentioned as per the "package.json" file.
* Launch a mongodb session in one terminal
* Open another terminal window to run the database script to setup database using mongodb.
* Run the command "mongo hw4_create_db.txt" to setup db
* Run npm start to launch a session and in the browser, navigate to "localhost:3000/"

### Prerequisites

What libraries and packages you need to install the software and how to install them

You should have installed node in your system.
Instructions to install node:
https://nodejs.org/en/download/package-manager/

Follow the instructions on the website and install node according to the OS you are on.

Other dependecies required for the project are:

* debug
* ejs - 2.6.1 or above
* express - 4.16.4 or above
* express-session - 1.15.6 or above
* http-errors
* mongoose - 5.4.21 or above
* nodemon - 1.18.10 or above

Steps to install the dependencies after you install node on your system:

* Download the project as zip or clone directly.
* Navigate to the public folder of the project
* run the command below and wait for it to finish.

```
$ npm install

```


### Installing

A step by step series of examples that tell you how to get a development env running

Step 1.

Setup the mongodb
* Make sure you follow the steps mentioned on this website to install mongodb and validate the installation
    
    https://treehouse.github.io/installation-guides/mac/mongo-mac.html
    
* Also, now you should be able to launch mongodb glabally on mac    

```
$ mongod --directoryperdb --dbpath /usr/local/mongodb/data/db --logpath /usr/local/mongodb/log/mongo.log --logappend

```

Now you won't see anything happening on terminal although it would seem like the execution has hung. But it is not, hold on.

* Open another terminal and execute as below:

```
$ mongo

```

Now you will see the terminal giving a verbose output and your terminal will be in mongo shell now.

Execute commands as mentioned below:

```
> show dbs

```

You can see some default databases that come with mongodb installation. Now let's create a database schema to begin using this website and user profiles to start with.

For that first exit the mongo session by typing in as below:

```
> exit
```

Now change the extension of "hw4_create_db.txt" this file to ".js"

Then in the terminal, execute as below:

```
$ mongo <path to the hw4_create_db.js file>

```

This will set up a database with a pre-defined schema and model.

Execute as below on terminal:

```
> show dbs

```

You will be able to see a new database named "kooking" in the list. If that appeared, then you are good to go.


## Launch the application

Now that database is setup, navigate to the public folder in the terminal and execute as below:

```
npm start

```

You will be able to see the application starting in the localhost 127.0.0.1 and using the port 3000.

Go to your browser and enter the url below:

```
http://localhost:3000/

```

Tada!


## Deployment

Additional notes about how to deploy this on a live system will be updated soon!

## Built With

* Node.js
* Embedded JavaScript Templates
* HTML5, CSS3 and JavaScript
* jQuery
* Bootstrap
* mongodb

## Contributing

Instruction and details on our code of conduct, and the process for submitting pull requests to us will be posted soon.

## Versioning

Versioning not implemented yet! 

## Authors

* **Arjun Kalidas** - *Initial work*

## License

Haven't filed for licensing.

## Acknowledgments

* fontawesome icons



