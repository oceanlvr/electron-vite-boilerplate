import { createApp } from 'vue'
import App from './App.vue'

void createApp(App)
  .mount('#app')
  .$nextTick(window.removeLoading)
