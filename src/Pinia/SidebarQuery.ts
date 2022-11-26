import {defineStore} from "pinia";
import {useToursStore} from "./ToursStore";
import {useNav} from "./NavStore";

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
        filteredTours: function (state) {
            const contries = state.countriesSelected
            const stars = state.starSelected
            const minNights = state.rangesSelected.minNights || -Infinity
            const maxNights = state.rangesSelected.maxNights || Infinity
            const budget = state.rangesSelected.budget || Infinity
            const tours = useNav().keywordFilter
            return tours.filter(tour => {
                const isInCountries = contries.length > 0 ? contries.includes(tour.countryRoman) : true
                // check if countries isn't empty, check whether selected countries includes tour's country, else true
                const isInStarsRange = stars.includes(true) ? stars[tour.stars - 1] : true
                // check if starsRange has any flag equals true, check whether hotel's stars in selectedStars, else true
                const isNightsRange = minNights <= tour.night && tour.night <= maxNights
                // check if hotel's nights' count is greater than min and less than max
                const isInBudgetRange = parseInt(tour.price) < budget
                // check if hotel's price is less than max-budget selected
                const isTagsIncludes = checkAllTags(state.tagsSelected, tour.tags)
                //check if all selected tags are in hotel's tags
                return isInCountries && isInStarsRange && isNightsRange && isInBudgetRange && isTagsIncludes
            })
        },
    }
})
