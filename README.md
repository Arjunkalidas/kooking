# kooking
A website for recipes, sharing and buying!

This webiste features an intuitive user experience for browsing recipes, creating account, bookmarking recipes and sharing with others. Future updates would include buying appliances and recipe packages, payment gateway integration and Google analytics for collecting statistics.

Special Features:
The general layout is a card based layout. 
Categories is a special feature of my website, where users can find recipes based on the many categories of food. 
Every recipe is displayed in the form of cards as well, that features, a small trivia, ingredients, steps to make and saving or rating the same.
Hovering over the cards gives a smooth animation that gives a perception of lifting the cards.

## Technical Stack

1. I have used an MVC approach with Views, Routes, Express Middleware, Sessions and Database integration. 
2. HTML5 pages are validated for errors after every iteration.
3. EJS templating is used for pages to present the view to the browser.
Implemented “Sign in” and “Sign out” features by using node.js sessions.
Users can find a modal window for sign in
mongoDB is used here for database part of the application.
File path to access the assets were kept relative and not specific to my machine
I have ProfileController to deal with the user items and personal profile
    This route controller is responsible for handling the following two requests:
    a. for a request to view the complete list of items this controller responds by
        bringing all item models from the database and sending that data to the
        categories/catalog view for display.
    b. for a request to view a single item this controller responds by bringing the
        requested item model from the database and sending that data to the item view for display.
Dynamic user profile functionality was implemented and session were used to store
data.


## Getting Started

* Download the "public" folder as zip or clone the repository
* Navigate to the folder in the terminal and run "npm install" - this will install all the dependencies mentioned as per the "package.json" file.
* Launch a mongodb session in one terminal
* Open another terminal window to run the database script to setup database using mongodb.
* Run the command "mongo hw4_create_db.txt" to setup db
* Run npm start to launch a session and in the browser, navigate to "localhost:3000/"

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc



