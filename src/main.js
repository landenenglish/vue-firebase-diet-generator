// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// createApp(App).use(router).mount('#app')
import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import config from '@/apikey'

import { initializeApp } from 'firebase/app'
import '@fortawesome/fontawesome-free/js/all'

initializeApp(config)

createApp(App).use(router).mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
