import {Module} from "vuex";
import {Iglobal} from "../ts/intefaces";

export default <Module<Iglobal, any>>{
    namespaced: true,
    state: {
        isFocusedTags: false
    },
    mutations: {
        setIsFocusedTags(state, payload) {
            state.isFocusedTags = payload
        }
    },
    actions: {
        setFocus({commit}, payload) {
            commit("setIsFocusedTags", payload)
        }
    },
}