# Vue-Firebase Diet Generator


## Description
### The main goal of this project is for the user to generate a diet plan using both a food datatbase and a calorie/macro calculator.
### The user enteres the foods they like to eat with nutritional information in the database, then caclulates their calories and macros based on their goal, then a meal plan with correct measurements for each meal is randomly generated with the foods they entered in the database.

## Demo
### https://vue-firebase-diet-generator.netlify.app/

## Technologies
### Vue.js
### Firebase Firestore


## Project setup
Create a firebase firestore database with a "foods" collection and paste the config info in src/firebase.js

https://firebase.google.com/
* Add project, call it "Foods" or similar
Disable google analytics, create project
Click the web (</>) button to add the web app
Name the app, "VueFire Diet Generator" or similar, don't select hosting
Copy the "firebaseConfig" variable and paste it in src/firebase.js right under imports. Rename it to just "config" and delete the "import config from '@/apikey'" line. You may want to use .env or similar to protect your config when pushing to github.
In firebase: Go to build, firestore database, create database, start in test mode, enable
Click "Start collection" and name the collection id "foods", auto ID the Document ID, save.
npm install, then npm run serve. 


```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
