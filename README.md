# Vue-Firebase Diet Generator


## Description
### The main goal of this project is for the user to generate a diet plan using both a food datatbase and a calorie/macro calculator.
### The user enters the foods they like to eat with nutritional information in the database, then caclulates their calories and macros based on their goal, then a meal plan with correct measurements for each meal is randomly generated with the foods they entered in the database.

- - - -
## Demo
### https://vue-firebase-diet-generator.netlify.app/

- - - -
## Technologies
* Vue.js
* Firebase Firestore

- - - -
## Project setup
Create a firebase firestore database with a "foods" collection and paste the config info in src/firebase.js:

* npm install
* https://firebase.google.com/
* Add project, call it "Foods" or similar
* Disable google analytics, create project
* Click the web (</>) button to add the web app
* Name the app, "VueFire Diet Generator" or similar, don't select hosting
* Copy the "firebaseConfig" variable and paste it in src/firebase.js right under imports. Rename it to just "config" and delete the "import config from * '@/apikey'" line. You may want to use .env or similar to protect your config when pushing to GitHub.
* In firebase: Go to build, firestore database, create database, start in test mode, enable
* Click "Start collection" and name the collection id "foods", auto ID the Document ID, save.
* npm run serve
* Add foods to the database (the more variety the better for generating meals)
* See [Configuration Reference](https://cli.vuejs.org/config/).


- - - -
## Issues
* The code in general is currently messy and lacking comments, I plan to refactor before moving forward

- - - -
## Changelog & Future Features
- [x] Setup Firebase Firestore with full CRUD functionality
- [x] Foods UI: add, view all, edit, delete
- [x] Calculate Calories & Macros UI
- [x] Generate random meals with foods database
- [ ] Re-generate specific meal
- [ ] Select foods the user wishes to use from the database to generate meal
- [ ] Consider authentication (stretch goal)
- [ ] Improve UI/Design in general once fully functional, custom CSS
