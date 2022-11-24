import {defineStore} from "pinia";

interface rangesSelected {
    minNights: number,
    maxNights: number,
    budget: number,
}

export const useSidebarQuery = defineStore("sidebarQuery", {
    state: () => ({
        countrySelected: [] as Array<string>,
        starSelected: [] as Array<boolean | undefined>,
        rangesSelected: <rangesSelected>{},
        tagsSelected: [] as Array<string>
    }),
    actions: {
        updateRange(key: string, payload: string) {
            const fixedValue = Number(payload).toFixed()
            this.rangesSelected[key as keyof rangesSelected] = Number(fixedValue)
        },
        updateTags(key: string, tag: string) {
            type keyT = Omit<keyof typeof this.$state, "rangesSelected">
            const idxOfTag = this[key as keyT].indexOf(tag)
            console.log(key)
            if (~idxOfTag) {
                this[key].splice(idxOfTag, 1)
            } else {
                this[key].push(tag)
            }
        }
    }
})
