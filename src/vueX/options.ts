import {createStore} from "vuex";
import {Inavbar} from "../ts/intefaces";

export default createStore({
    state: {
        navLeft: <Inavbar[]>[
            {link: '/', myClass: "item", inner: "ГОРЯЧИЕ ПУТЕВКИ"},
            {link: "/", myClass: "item main", inner: "MAIN"}
         ],
        navRight: <Inavbar[]>[
            {link: "/", myClass: "item profile"}
        ]
    }
})