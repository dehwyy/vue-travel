import { createStore } from "vuex"
import toursX from "./tours"
import navOptions from "./options"
import global from "./globalProps"
export default createStore({

	modules: { toursX, navOptions, global}
})

