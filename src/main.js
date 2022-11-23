import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import { router } from "./router/router.js"
import App from './App.vue'
import store from "./vueX/vueX"
import UIs from "./UI/UIs.ts";


const app = createApp(App)
UIs.forEach((elem) => {
    app.component(elem.title, elem.component)
})
app.use(router)
    .use(store)
    .mount('#app')
