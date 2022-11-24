import {defineStore} from "pinia";

export const useNav = defineStore("navStore", {
    state: () => ({
        query: "",
        constants: {
            logoSrc: "/src/images/logo1.png",
            hot: "ГОРЯЧИЕ ПУТЕВКИ",
            main: "ГЛАВНАЯ",
            profile: "ПРОФИЛЬ"
        }
    }),
    actions: {
        setQuery(e: Event) {
            this.query = (e.target as HTMLInputElement).value
            console.log(this.query)
        }
    }
})