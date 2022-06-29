import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_APIKEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_FIREBASE_APPID,
}

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
