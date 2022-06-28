import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: 'AIzaSyA_suCUCMOrIS0fDUOnxemxXZl-xG-Glso',
  authDomain: 'vue-firebase-crud-f61f8.firebaseapp.com',
  projectId: 'vue-firebase-crud-f61f8',
  storageBucket: 'vue-firebase-crud-f61f8.appspot.com',
  messagingSenderId: '776039788891',
  appId: '1:776039788891:web:0c5a52716e615fde56aa7e',
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const foodsCollection = db.collection('foods')

export const createFood = (food: firebase.firestore.DocumentData) => {
  return foodsCollection.add(food)
}

export const getFood = async (id: string | undefined) => {
  const food = await foodsCollection.doc(id).get()
  return food.exists ? food.data() : null
}

export const getAllFoods = async () => {
  const foods = await foodsCollection.get()
  return foods.docs.map((doc) => doc.data())
}

export const updateFood = (
  id: string | undefined,
  food: firebase.firestore.UpdateData
) => {
  return foodsCollection.doc(id).update(food)
}

export const deleteFood = (id: string | undefined) => {
  return foodsCollection.doc(id).delete()
}

export const loadFoods = () => {
  const foods: any = ref([])
  const close = foodsCollection.onSnapshot((snapshot) => {
    foods.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return foods
}
