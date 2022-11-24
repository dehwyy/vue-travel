import {defineStore} from "pinia";

export const useInputFocus = defineStore("inputFocus", {
    state: () => ({
        focuses: {
            tagsFocus: false,
            countryFocus: false,
        }
    }),
    actions: {
        clearFocuses() {
            Object.keys(this.focuses).forEach(focus => {
                this.focuses[focus as keyof typeof this.focuses] = false
            })
        },
        setFocus(tag: keyof typeof this.focuses) {
            const stateBefore = this.focuses[tag]
            this.clearFocuses()
            this.focuses[tag] = !stateBefore
            console.log(this.focuses)
        }
    }
})