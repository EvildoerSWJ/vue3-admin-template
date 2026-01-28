import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import './assets/styles/reset.css'
import pinia from "./store"

// 创建实例
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')