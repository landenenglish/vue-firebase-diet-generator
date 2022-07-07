<template>
  <nav>
    <router-link to="/">Food Database</router-link> |
    <router-link to="/calculator">Nutrition Calculator</router-link> |
    <router-link to="/signin">Sign In</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/yourdiets">Your Diets</router-link> |
    <button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
  </nav>
  <router-view />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoggedIn = ref(false)

let auth
onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
  })
})

const handleSignOut = () => {
  signOut(auth).then(() => {
    console.log('Signed out')
    router.push('/')
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.2em;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #33b3fd;
}
</style>
