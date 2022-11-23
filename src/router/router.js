// @ts-nocheck
import MainContent from "../components/content/Main.vue"
import Info from "../components/content/Info.vue"
import { createRouter, createWebHashHistory } from "vue-router"
const routes = [
    { path: "/", component: MainContent },
    { path: "/info", component: Info}
]

export const router =  createRouter({
    history: createWebHashHistory(),
    routes
})