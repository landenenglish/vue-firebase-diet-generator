<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-4 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Food Database</router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/calculator"
              >Nutrition Calculator</router-link
            >
          </li>
          <li>
            <router-link class="nav-link" to="/yourdiets"
              >Your Diets</router-link
            >
          </li>

          <li>
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/signin">Sign In</router-link>
          </li>

          <li>
            <button
              class="btn btn-danger"
              @click="handleSignOut"
              v-if="isLoggedIn"
            >
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
import Sidebar from '@/components/sidebar/Sidebar.vue'

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

ul a.router-link-exact-active {
  color: #6ba9e7;
}

ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  font-weight: bold;
}

/* #navbarSupportedContent {
  display: flex;
  justify-content: center;
  align-items: center;
} */
</style>
