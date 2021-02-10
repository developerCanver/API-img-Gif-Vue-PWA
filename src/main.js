import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

// inportar los vue-axios 
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(router).use(VueAxios, axios).mount('#app')
