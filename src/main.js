import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"

import 'aos/dist/aos.css'
import AOS from 'aos'

const app = createApp(App)

app.mount('#app')

AOS.init()
