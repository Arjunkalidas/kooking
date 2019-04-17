/*
 * @author arjunk
 */

var Item = require('../models/item.model');

module.exports.getItems = function () {

    let items = [];
    for (let i = 0; i < data.length; i++) {
        let item = new Item(data[i].itemCode,
            data[i].itemName,
            data[i].catalogCategory,
            data[i].mealType,
            data[i].rating,
            data[i].description,
            data[i].ingredients,
            data[i].directions,
            data[i].imageURL);

        items.push(item);
    }
    return items;
};

/**
 *
 * @param itemCode
 * @returns {*}
 */
module.exports.getItem = function (itemCode) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].itemCode == itemCode) {

            var item = new Item(data[i].itemCode,
                data[i].itemName,
                data[i].catalogCategory,
                data[i].mealType,
                data[i].rating,
                data[i].description,
                data[i].ingredients,
                data[i].directions,
                data[i].imageURL
            );
            return item;
        }
    }
    return null;
};

/**
 *
 * @param
 * @returns {*}
 */
module.exports.getHomePageItems = function () {

    let homeItems = [];
    for (let i = 0; i < homePageData.length; i++) {
        let item = new Item(homePageData[i].itemCode,
            homePageData[i].itemName,
            homePageData[i].catalogCategory,
            homePageData[i].mealType,
            homePageData[i].rating,
            homePageData[i].description,
            homePageData[i].ingredients,
            homePageData[i].directions,
            homePageData[i].imageURL);

        homeItems.push(item);
    }
    return homeItems;
};



// Hard coded data
var data = [
    {
        itemCode: 1,
        itemName: "Blueberry Muffin",
        catalogCategory: "American",
        mealType: "Pastry",
        rating: 5,
        description: "This recipe came to The Times in a 1987 article by Marian Burros, \"The Battle of the Blueberry Muffins.\" Two years prior, Ms. Burros wrote about a recipe for the muffins attributed to the Ritz-Carlton in Boston. The hotel had adapted a recipe used by Gilchrist's, once one of city's best-known department stores. After it ran, a reader wrote in to say that the best blueberry muffins in Boston were not from the Ritz-Carlton, but from the now-closed Jordan Marsh department store. ",
        ingredients: ['½ cup softened butter', '1 ¼ cups sugar', '2 eggs', '1 teaspoon vanilla extract', '2 cups flour', '½ teaspoon salt', '2 teaspoons baking powder', '½ cup milk', '2 cups blueberries, washed, drained and picked over', '3 teaspoons sugar'],
        directions: ['Preheat the oven to 375.', 'Cream the butter and 1 1/4 cups sugar until light.', 'Add the eggs, one at a time, beating well after each addition.',
            'Add vanilla.', 'Sift together the flour, salt and baking powder, and add to the creamed mixture alternately with the milk.',
            'Crush 1/2 cup blueberries with a fork, and mix into the batter.', 'Fold in the remaining whole berries.',
            'Line a 12 cup standard muffin tin with cupcake liners, and fill with batter.',
            'Sprinkle the 3 teaspoons sugar over the tops of the muffins, and bake at 375 degrees for about 30-35 minutes.',
            'Remove muffins from tin and cool at least 30 minutes.', 'Store, uncovered, or the muffins will be too moist the second day, if they last that long.'],
        imageURL: "/assets/images/Blueberry-Muffins.jpg"
    },
    {
        itemCode: 2,
        itemName: "Fish & Chips",
        catalogCategory: "American",
        mealType: "Breakfast",
        rating: 3,
        description: "No one knows precisely where or when fish and chips came together. Chips had arrived in Britain from France in the eighteenth century and were known as pommes frites. The first mention of chips was in 1854 when a leading chef included \"thin cut potatoes cooked in oil\" in his recipe book, Shilling Cookery. Around this time, fish warehouses sold fried fish and bread, with mention of this in Charles Dickens’ novel Oliver Twist published in 1830.",
        ingredients: ['½ cup softened butter', '1 ¼ cups sugar', '2 eggs', '1 teaspoon vanilla extract', '2 cups flour', '½ teaspoon salt', '2 teaspoons baking powder', '½ cup milk', '2 cups blueberries, washed, drained and picked over', '3 teaspoons sugar'],
        directions: ['Preheat the oven to 375.', 'Cream the butter and 1 1/4 cups sugar until light.', 'Add the eggs, one at a time, beating well after each addition.',
            'Add vanilla.', 'Sift together the flour, salt and baking powder, and add to the creamed mixture alternately with the milk.',
            'Crush 1/2 cup blueberries with a fork, and mix into the batter.', 'Fold in the remaining whole berries.',
            'Line a 12 cup standard muffin tin with cupcake liners, and fill with batter.',
            'Sprinkle the 3 teaspoons sugar over the tops of the muffins, and bake at 375 degrees for about 30-35 minutes.',
            'Remove muffins from tin and cool at least 30 minutes.', 'Store, uncovered, or the muffins will be too moist the second day, if they last that long.'],
        imageURL: "/assets/images/food_fishchips.jpg"
    },

    {
        itemCode: 3,
        itemName: "Low Carb Tortilla Wraps",
        catalogCategory: "American",
        mealType: "Lunch",
        rating: 3,
        description: "Teenager Wade Watts lives with his aunt in Oklahoma City[8] in the \"stacks\", a poverty-stricken district constructed of trailer homes piled on top of each other. He spends his spare time as a \"gunter\" (\"egg hunter\"), logging on to the OASIS as an avatar under the moniker Parzival, reading Halliday's journal Anorak's Almanac, and researching details of the 1980s pop culture, mainly classic video games and movies, that Halliday loved. One day, he realizes that the first key is located on the same virtual world as his own online high school, in a re-creation of the Dungeons & Dragons module Tomb of Horrors. He meets Art3mis, a famous female gunter and blogger who has been exploring the place, and advances further than she does when he defeats the AI Acererak at the video game Joust. He is awarded the Copper Key, and Parzival appears on the \"Scoreboard\", attracting the world's attention.",
        ingredients: ['½ cup softened butter', '1 ¼ cups sugar', '2 eggs', '1 teaspoon vanilla extract', '2 cups flour', '½ teaspoon salt', '2 teaspoons baking powder', '½ cup milk', '2 cups blueberries, washed, drained and picked over', '3 teaspoons sugar'],
        directions: ['Preheat the oven to 375.', 'Cream the butter and 1 1/4 cups sugar until light.', 'Add the eggs, one at a time, beating well after each addition.',
            'Add vanilla.', 'Sift together the flour, salt and baking powder, and add to the creamed mixture alternately with the milk.',
            'Crush 1/2 cup blueberries with a fork, and mix into the batter.', 'Fold in the remaining whole berries.',
            'Line a 12 cup standard muffin tin with cupcake liners, and fill with batter.',
            'Sprinkle the 3 teaspoons sugar over the tops of the muffins, and bake at 375 degrees for about 30-35 minutes.',
            'Remove muffins from tin and cool at least 30 minutes.', 'Store, uncovered, or the muffins will be too moist the second day, if they last that long.'],
        imageURL: "/assets/images/Tortillas.jpg"
    },

    {
        itemCode: 4,
        itemName: "Tofu Ramen",
        catalogCategory: "American",
        mealType: "Dinner",
        rating: 3,
        description: "Ramen is a noodle soup dish that was originally imported from China and has become one of the most popular dishes in Japan in recent decades. Ramen are inexpensive and widely available, two factors that also make them an ideal option for budget travelers. Ramen restaurants, or ramen-ya, can be found in virtually every corner of the country and produce countless regional variations of this common noodle dish.",
        ingredients: ['½ cup softened butter', '1 ¼ cups sugar', '2 eggs', '1 teaspoon vanilla extract', '2 cups flour', '½ teaspoon salt', '2 teaspoons baking powder', '½ cup milk', '2 cups blueberries, washed, drained and picked over', '3 teaspoons sugar'],
        directions: ['Preheat the oven to 375.', 'Cream the butter and 1 1/4 cups sugar until light.', 'Add the eggs, one at a time, beating well after each addition.',
            'Add vanilla.', 'Sift together the flour, salt and baking powder, and add to the creamed mixture alternately with the milk.',
            'Crush 1/2 cup blueberries with a fork, and mix into the batter.', 'Fold in the remaining whole berries.',
            'Line a 12 cup standard muffin tin with cupcake liners, and fill with batter.',
            'Sprinkle the 3 teaspoons sugar over the tops of the muffins, and bake at 375 degrees for about 30-35 minutes.',
            'Remove muffins from tin and cool at least 30 minutes.', 'Store, uncovered, or the muffins will be too moist the second day, if they last that long.'],
        imageURL: "/assets/images/tofu_ramen_wagamama.jpg"
    },

    {
        itemCode: 5,
        itemName: "Tiramisu",
        catalogCategory: "Italian",
        mealType: "Pastry",
        rating: 5,
        description: "Tiramisu quite literally means, “a pick me up.” One of Italy’s most popular, Tiramisu is a rich treat blending the bold flavors of cocoa and espresso with savory mascarpone cheese and wine, layered with ladyfinger biscuits.",
        ingredients: ['½ cup softened butter', '1 ¼ cups sugar', '2 eggs', '1 teaspoon vanilla extract', '2 cups flour', '½ teaspoon salt', '2 teaspoons baking powder', '½ cup milk', '2 cups blueberries, washed, drained and picked over', '3 teaspoons sugar'],
        directions: ['Preheat the oven to 375.', 'Cream the butter and 1 1/4 cups sugar until light.', 'Add the eggs, one at a time, beating well after each addition.',
            'Add vanilla.', 'Sift together the flour, salt and baking powder, and add to the creamed mixture alternately with the milk.',
            'Crush 1/2 cup blueberries with a fork, and mix into the batter.', 'Fold in the remaining whole berries.',
            'Line a 12 cup standard muffin tin with cupcake liners, and fill with batter.',
            'Sprinkle the 3 teaspoons sugar over the tops of the muffins, and bake at 375 degrees for about 30-35 minutes.',
            'Remove muffins from tin and cool at least 30 minutes.', 'Store, uncovered, or the muffins will be too moist the second day, if they last that long.'],
        imageURL: "/assets/images/choco-chip-tiramisu.jpeg"
    },

    {
        itemCode: 6,
        itemName: "Flathead Fish",
        catalogCategory: "Italian",
        mealType: "Lunch/Dinner",
        rating: 5,
        description: "Flathead is a delicious, and often overlooked fish. The sweet, soft beetroot, crunchy walnuts, spicy watercress and horseradish provide a great contrast of textures and flavours in this quick and easy dish.",
        ingredients: ['½ cup softened butter', '1 ¼ cups sugar', '2 eggs', '1 teaspoon vanilla extract', '2 cups flour', '½ teaspoon salt', '2 teaspoons baking powder', '½ cup milk', '2 cups blueberries, washed, drained and picked over', '3 teaspoons sugar'],
        directions: ['Preheat the oven to 375.', 'Cream the butter and 1 1/4 cups sugar until light.', 'Add the eggs, one at a time, beating well after each addition.',
            'Add vanilla.', 'Sift together the flour, salt and baking powder, and add to the creamed mixture alternately with the milk.',
            'Crush 1/2 cup blueberries with a fork, and mix into the batter.', 'Fold in the remaining whole berries.',
            'Line a 12 cup standard muffin tin with cupcake liners, and fill with batter.',
            'Sprinkle the 3 teaspoons sugar over the tops of the muffins, and bake at 375 degrees for about 30-35 minutes.',
            'Remove muffins from tin and cool at least 30 minutes.', 'Store, uncovered, or the muffins will be too moist the second day, if they last that long.'],
        imageURL: "/assets/images/food_flathead.jpg"
    },


    {
        itemCode: 7,
        itemName: "Bean Burger",
        catalogCategory: "Italian",
        mealType: "Lunch/Dinner",
        rating: 3,
        description: "Burgers – once considered being a quintessential meal for Americans has today become a party of daily food habit for people globally. That’s because they are ready to eat, easy to get and can be eaten while working! Very few of us are familiar with facts about this interesting food. So, today we are going to learn 20 interesting Facts about Burgers. Find out how many of these facts were known to you.",
        ingredients: ['½ cup softened butter', '1 ¼ cups sugar', '2 eggs', '1 teaspoon vanilla extract', '2 cups flour', '½ teaspoon salt', '2 teaspoons baking powder', '½ cup milk', '2 cups blueberries, washed, drained and picked over', '3 teaspoons sugar'],
        directions: ['Preheat the oven to 375.', 'Cream the butter and 1 1/4 cups sugar until light.', 'Add the eggs, one at a time, beating well after each addition.',
            'Add vanilla.', 'Sift together the flour, salt and baking powder, and add to the creamed mixture alternately with the milk.',
            'Crush 1/2 cup blueberries with a fork, and mix into the batter.', 'Fold in the remaining whole berries.',
            'Line a 12 cup standard muffin tin with cupcake liners, and fill with batter.',
            'Sprinkle the 3 teaspoons sugar over the tops of the muffins, and bake at 375 degrees for about 30-35 minutes.',
            'Remove muffins from tin and cool at least 30 minutes.', 'Store, uncovered, or the muffins will be too moist the second day, if they last that long.'],
        imageURL: "/assets/images/Burger.jpg"
    },


    {
        itemCode: 8,
        itemName: "Picadillo Salad",
        catalogCategory: "Italian",
        mealType: "Salad",
        rating: 4,
        description: "Picadillo is a traditional dish found in Spain, the Philippines and other Latin American countries. It is made with ground meat, tomatoes, fragrant spices and other ingredients that vary depending on the region. Picadillo is often served in taco shells, with rice, fried plantain or as a filling in savory pastries.",
        ingredients: ['½ cup softened butter', '1 ¼ cups sugar', '2 eggs', '1 teaspoon vanilla extract', '2 cups flour', '½ teaspoon salt', '2 teaspoons baking powder', '½ cup milk', '2 cups blueberries, washed, drained and picked over', '3 teaspoons sugar'],
        directions: ['Preheat the oven to 375.', 'Cream the butter and 1 1/4 cups sugar until light.', 'Add the eggs, one at a time, beating well after each addition.',
            'Add vanilla.', 'Sift together the flour, salt and baking powder, and add to the creamed mixture alternately with the milk.',
            'Crush 1/2 cup blueberries with a fork, and mix into the batter.', 'Fold in the remaining whole berries.',
            'Line a 12 cup standard muffin tin with cupcake liners, and fill with batter.',
            'Sprinkle the 3 teaspoons sugar over the tops of the muffins, and bake at 375 degrees for about 30-35 minutes.',
            'Remove muffins from tin and cool at least 30 minutes.', 'Store, uncovered, or the muffins will be too moist the second day, if they last that long.'],
        imageURL: "/assets/images/picadillo-cuban.jpg"
    },
];

var homePageData= [
    {
        itemCode: "",
        itemName: "Hola, your Spring Specials are here!",
        catalogCategory: "",
        mealType: "",
        rating: "",
        description: "Spring is the ultimate season for fresh produce. Bright and refreshing, our veggie-forward dishes will\n" +
            "                        awaken your taste buds after winter's heavy meals. In-season herbs, greens, vegetables, and fruits all\n" +
            "                        shine in these impressive recipes. Your weeknight dinner rotation will benefit from the addition of dinners\n" +
            "                        like Chicken-and-Vegetable Hand Pies or Spinach Pesto Pasta. While any springtime event that you host will\n" +
            "                        leave guests buzzing when you have Green Pea and Parsley Hummus or Grilled Pineapple Lemonade on the menu.",
        ingredients: "",
        directions: "",
        imageURL: "/assets/images/macaroons.jpg"
    },
    {
        itemCode: "",
        itemName: "Your guide to a healthy life",
        catalogCategory: "",
        mealType: "",
        rating: "",
        description: "\"Good nutrition is the first step to better longevity,” says Dr. Plasker. “You should develop these healthy habits not because you want to lower your cholesterol or lose weight, but because you want to enjoy your remaining years.\"",
        ingredients: "",
        directions: "",
        imageURL: "/assets/images/greens.jpg"
    },

    {
        itemCode: "",
        itemName: "How to Choose a Wine to Go With Your Dinner?",
        catalogCategory: "",
        mealType: "",
        rating: "",
        description: "Oddly enough, if you have no idea what’s on the menu, one of the best wines to bring is a champagne or sparkling wine. You’d be amazed how many dishes pair well with it. My most recent sparkling wine and food pairing surprise was sushi – the two go great together!\n"+
            " If you are not feeling the bubbly, try bringing a wine that everyone can drink before the dinner starts. This way you don’t have to stress about bringing a wine that would not pair well with a certain dish. ",
        ingredients: "",
        directions: "",
        imageURL: "/assets/images/wine-collection.jpg"
    },

    {
        itemCode: "",
        itemName: "The Best Blender for Every Budget",
        catalogCategory: "",
        mealType: "",
        rating: "",
        description: "Blenders have come a long way from their piña colada beginnings. One great thing about all blenders is that they are easy to clean and there aren’t as many parts or components to maintain as compared to juicers. In general, blenders range from expensive high-speed machines to moderately priced units that will more than likely get the job done. But the best ones are worth the added cost. Trust me. Save your pennies and make it a priority to get one when you can. A top-shelf blender lasts a lifetime.",
        ingredients: "",
        directions: "",
        imageURL: "/assets/images/blender.jpg"
    },
];

var category = ["American", "Italian"];