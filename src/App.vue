<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <div>
        <img src="./assets/vue.png" class="navbar-brand" alt="" />
        <img
          id="fire"
          src="./assets/firebase.png"
          class="navbar-brand"
          alt=""
        />
      </div>

      <span class="navbar-brand"> Menu</span>
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
            <router-link class="nav-link text-light" to="/"
              >Food Database</router-link
            >
          </li>
          <li>
            <router-link class="nav-link text-light" to="/calculator"
              >Nutrition Calculator</router-link
            >
          </li>
          <li>
            <router-link class="nav-link text-light" to="/yourdiets"
              >Your Diets</router-link
            >
          </li>

          <li>
            <router-link class="nav-link text-light" to="/register"
              >Register</router-link
            >
          </li>
          <li>
            <router-link class="nav-link text-light" to="/signin"
              >Sign In</router-link
            >
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
  <hr id="navHR" />

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
  background-color: #202529;
}

/* make image fit parent element */
nav img {
  width: 1.75em;
  height: auto;
}
#fire {
  width: 1.5em;
  height: auto;
}

#navHR {
  height: 2px;
  background-color: #fff;
  border: none;
}

ul a.router-link-exact-active {
  /* add a border to bottom */
  border-bottom: 2px solid #ffa000;
}

ul {
  margin-top: 0.5em;
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
