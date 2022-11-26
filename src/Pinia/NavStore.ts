import {defineStore} from "pinia";
import {useSidebarQuery} from "./SidebarQuery";
import {useToursStore} from "./ToursStore";

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
        }
    },
    getters: {
        keywordFilter: (state) => {
            const tours = useToursStore().tours
            if (state.query) {
                return tours.filter(tour => {
                    const find = Object.values(tour).find(elem => {
                        return String(elem).toLowerCase().includes(state.query)
                    })
                    const arrFind = Object.values(tour.tags).find(elem => (elem as string).includes(state.query))
                    return find || arrFind
                })
            } else {
                return tours
            }
        }
    }
})