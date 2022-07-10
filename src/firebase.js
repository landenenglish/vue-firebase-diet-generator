import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { ref, onUnmounted } from 'vue'
import config from '@/apikey'

// Initialize Firebase
const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.firestore()

// Foods collection
const foodsCollection = db.collection('foods')
// Create a new food
export const createFood = (food) => {
  return foodsCollection.add(food)
}
// Get a food
export const getFood = async (id) => {
  const food = await foodsCollection.doc(id).get()
  return food.exists ? food.data() : null
}
// Get all foods
export const getAllFoods = async () => {
  const foods = await foodsCollection.get()
  return foods.docs.map((doc) => doc.data())
}
// Update a food
export const updateFood = (id, food) => {
  return foodsCollection.doc(id).update(food)
}
// Delete a food
export const deleteFood = (id) => {
  return foodsCollection.doc(id).delete()
}
// Load foods
export const loadFoods = () => {
  const foods = ref([])
  const close = foodsCollection.onSnapshot((snapshot) => {
    foods.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return foods
}

// --------------------------------------------------
// Users collection
const usersCollection = db.collection('userDiets')

// Create a new user diet
export const createUserDiet = (user) => {
  return usersCollection.add(user)
}
// Get a user diet
export const getUserDiet = async (id) => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}
// Get all user diets
export const getAllUserDiets = async () => {
  const users = await usersCollection.get()
  return users.docs.map((doc) => doc.data())
}
// Update a user diet
export const updateUserDiet = (id, user) => {
  return usersCollection.doc(id).update(user)
}
// Delete a user diet
export const deleteUserDiet = (id) => {
  return usersCollection.doc(id).delete()
}
// Load user diets
export const loadUserDiets = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}
