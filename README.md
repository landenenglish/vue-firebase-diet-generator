# Vue-Firebase Diet Generator


## Description
### The main goal of this project is for the user to generate a diet plan using both a food datatbase and a calorie/macro calculator.
### The user enters the foods they like to eat with nutritional information in the database, then caclulates their calories and macros based on their goal, then a meal plan with correct measurements for each meal is randomly generated with the foods they entered in the database.

- - - -
## Demo
### https://vue-firebase-diet-generator.netlify.app/

- - - -
## How to use:
### The default home page is the foods database where you can add/edit/delete foods from the database. Note that the foods database is currently shared across all users (for now), so please do not delete all items or add unrealistic food items within reason.
### Once you are happy with the foods in the database, you can head over to the Nutrition Calculator tab by either clicking the navbar button or the "Calculate Diet With Foods Database" button from the default home page.
### On the nutrition calculator page, fill out the form with your info and goal, then select calculate. You will then be displayed with the results and a table of generated meals. The meals come from the foods database with accurate measurements based on your generated macros. You can regenerate each meal until you are happy with the diet, then press Save Diet, which will save to your account. You can view your saved diet on the "Your Diets" tab. You can save multiple diets. You must be logged in to save your diet of course, but you don't need to log in to add foods to the database or generate a diet.
### You can register an account, sign in, or logout. You can sign in with Google.

- - - -
## Technologies
* Vue.js
* Firebase: Firestore (database with a foods collection and a userDiets collection), authentication, and Google authentication
* Bootstrap

- - - -
## Project setup

* npm install
* https://firebase.google.com/
* Add project, call it "Nutrition" or similar
* Disable google analytics, create project
* Click the web (</>) button to add the web app
* Name the app, "VueFire Diet Generator" or similar, don't select hosting
* Copy the "firebaseConfig" variable and paste it in src/firebase.js right under imports. Rename it to just "config" and delete the "import config from * '@/apikey'" line. You may want to use .env or similar to protect your config when pushing to GitHub.
* In firebase: Go to build, firestore database, create database, start in test mode, enable
* Click "Start collection" and name the collection id "foods", auto ID the Document ID, save.
* Add another collection called "userDiets" with the same step above.
* Enable authentication under the "Build" dropdown. Enable Email/Password authentication and Google authentication.
* npm run serve
* See [Configuration Reference](https://cli.vuejs.org/config/).


- - - -
## Issues
* The app is pretty much fully functional, but some files are a little busy and should be broken down into smaller components/modules. I'm probably not using Vue optimally, but enough to get it working with some Vue basics and JS fundamentals. I will improve it as I continue to learn Vue.

- - - -
## Changelog & Future Features
- [x] Setup Firebase Firestore with full CRUD functionality
- [x] Foods UI: add, view all, edit, delete
- [x] Calculate Calories & Macros UI
- [x] Generate random meals with foods database
- [x] Re-generate specific meal
- [x] Authentication
- [ ] Select foods the user wishes to use from the database to generate meal
- [ ] Save the user's form progress and form to their account so they don't have to fill it out each time
- [ ] Name the diet saved, save more info besides just the meals on the saved diets page.
- [ ] Better foods database rules instead of a global shared one with full CRUD privileges for all users
- [ ] Change home page to instructions for how to use the app.



