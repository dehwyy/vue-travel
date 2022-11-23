import { createStore } from "vuex"
import {Itour, Iquery, tagsList} from "../ts/intefaces";
export default createStore({
	state: {
		tours: <Itour[]>[
			{
				id: 1,
				title: "LOISIR HOTEL SHINAGAWA SEASIDE",
				price: "490$",
				url: 'https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/326305799.jpg?k=557868c6ed6c124e378f2108f8fda19cabca3289b5d9ddda0aee0b608ec86f5c&o=&hp=1',
				link: "/",
				country: "Япония",
				tags: ["japan", "verified", "bath", "wifi"],
				dateOfDeport: "09.06.2007",
				dateOfArrive: "18.06.2007",
				night: 9,
				stars: 3
			},
			{
				id: 2,
				title: "Maldives",
				price: "789$",
				url: 'http://cdn.cnn.com/cnnnext/dam/assets/220707113925-17-maldives-best-overwater-villas-velaa.jpg',
				link: "/",
				country: "Мальдивы",
				tags: ["maldives", "verified", "cityView", "wifi"],
				dateOfDeport: "28.07.2006",
				dateOfArrive: "7.08.2006",
				night: 11,
				stars: 4
			}
		],
		queryParams: <Iquery>{
			stars: 1, country: null, price: 1
		},
		tags: ["japan", "verified", "bath", "wifi", "maldives", "cityView"],
		tagsList: <tagsList>{
				japan: {link: "/japan", title: "JAPAN"},
				maldives: {link: "/maldives", title: "MALDIVES"},
				verified: {link: "/verified", title: "VERIFIED"},
				premium: {link: "/premium", title: "PREMIUM"},
				wifi: {link: "/wifi", title: "WI-FI"},
				bath: {link: "/bath", title: "ABOBBOBBOA"},
				cityView: {link: "/cityview", title: "CITY VIEW"}
		}
	},
	mutations: {
		addToQuery(state, param) {
			const key = param.name
			const value = param.value
			if (key in state.queryParams) {
				state.queryParams[key as keyof Iquery] = value
			}
		}
	},

})