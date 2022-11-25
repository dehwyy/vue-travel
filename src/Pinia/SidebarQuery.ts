import {defineStore} from "pinia";
import {useToursStore} from "./ToursStore";

interface rangesSelected {
    minNights: number,
    maxNights: number,
    budget: number,
}
function checkAllTags(tagsSelected: Array<string>, itemTags: Array<string>) {
    for (let elem of tagsSelected) {
        if (!itemTags.includes(elem)) {
            console.log(elem, "elem")
            return
        }
    }
    return true
}


export const useSidebarQuery = defineStore("sidebarQuery", {
    state: () => ({
        countriesSelected: [] as Array<string>,
        starSelected: [] as Array<boolean | undefined>,
        rangesSelected: <rangesSelected>{},
        tagsSelected: [] as Array<string>,
    }),
    actions: {
        updateRange(key: string, payload: string) {
            const fixedValue = Number(payload).toFixed()
            this.rangesSelected[key as keyof rangesSelected] = Number(fixedValue)
        },
        updateTags(key: string, tag: string) {
            // I don't get why am I getting error here
            type keyT = Omit<keyof typeof this.$state, "rangesSelected" | "starSelected">
            const idxOfTag = (this as typeof this.$state)[key as keyT].indexOf(tag)
            if (~idxOfTag) {
                this[key].splice(idxOfTag, 1)
            } else {
                this[key].push(tag.toLowerCase())
            }
        },
    },
    getters: {
        filteredTours(state) {
            console.log(1)
            const tours = useToursStore()
            return tours.tours.filter(tour => {
                const isInCountries =
                    state.countriesSelected.length > 0 ?
                    state.countriesSelected.includes(tour.countryRoman) : true
                const isInStarsRange = state.starSelected.length ? state.starSelected[tour.stars + 1] : true
                const isNightsRange = (state.rangesSelected.minNights || -Infinity) <= tour.night
                    && tour.night <= (state.rangesSelected.maxNights || Infinity)
                const isInBudgetRange = parseInt(tour.price) < (state.rangesSelected.budget || Infinity)
                const isTagsIncludes = checkAllTags(state.tagsSelected, tour.tags)
                return isInCountries && isInStarsRange && isNightsRange && isInBudgetRange && isTagsIncludes
            })
        },
    }
})
