import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from './router'
//createApp(App).mount('#app')
createApp(App).use(router).mount('#app')
// createApp(App).mount('#app')
