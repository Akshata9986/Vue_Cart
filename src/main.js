import { createApp } from 'vue'
import App from './App.vue'
import router from './Router/router'
import store from './Store/store'
let app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
