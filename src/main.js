import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@lottiefiles/lottie-player'
import '@/assets/css/common.scss'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
