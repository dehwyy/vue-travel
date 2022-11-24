import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import { router } from "./router/router.js"
import App from './App.vue'
import UIs from "./UI/UIs.ts";
import {createPinia} from "pinia";


const app = createApp(App)
UIs.forEach((elem) => {
    app.component(elem.title, elem.component)
})
app.use(router)
    .use(createPinia())
    .mount('#app')
