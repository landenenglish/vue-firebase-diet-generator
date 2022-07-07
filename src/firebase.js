import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { ref, onUnmounted } from 'vue'
import config from '@/apikey'

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const foodsCollection = db.collection('foods')

export const createFood = (food) => {
  return foodsCollection.add(food)
}
export const getFood = async (id) => {
  const food = await foodsCollection.doc(id).get()
  return food.exists ? food.data() : null
}
export const getAllFoods = async () => {
  const foods = await foodsCollection.get()
  return foods.docs.map((doc) => doc.data())
}
export const updateFood = (id, food) => {
  return foodsCollection.doc(id).update(food)
}
export const deleteFood = (id) => {
  return foodsCollection.doc(id).delete()
}
export const loadFoods = () => {
  const foods = ref([])
  const close = foodsCollection.onSnapshot((snapshot) => {
    foods.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return foods
}

// create a users collection in the database for the logged in user to store their diet
const usersCollection = db.collection('userDiets')
export const createUserDiet = (user) => {
  return usersCollection.add(user)
}
export const getUserDiet = async (id) => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}
export const getAllUserDiets = async () => {
  const users = await usersCollection.get()
  return users.docs.map((doc) => doc.data())
}
export const updateUserDiet = (id, user) => {
  return usersCollection.doc(id).update(user)
}
export const deleteUserDiet = (id) => {
  return usersCollection.doc(id).delete()
}
export const loadUserDiets = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}
