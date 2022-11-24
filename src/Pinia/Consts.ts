import {defineStore} from "pinia";
import {tagsList} from "../ts/intefaces";
interface countryList {
    [key]: {
        link: string,
        title: string
    }
}
export const useConsts = defineStore("constsStore", {
    state: () => ({
        tagsList: <tagsList>{
            japan: {link: "/japan", title: "JAPAN"},
            maldives: {link: "/maldives", title: "MALDIVES"},
            verified: {link: "/verified", title: "VERIFIED"},
            premium: {link: "/premium", title: "PREMIUM"},
            wifi: {link: "/wifi", title: "WI-FI"},
            bath: {link: "/bath", title: "ABOBBOBBOA"},
            cityView: {link: "/cityview", title: "CITY VIEW"}
        },
        countryList: <countryList>{
            japan: {link: "/japan", title: "JAPAN"},
            russia: {link: "/russia", title: "RUSSIA"},
            usa: {link: "/usa", title: "USA"},
        },
        hotelInfo: <{inner: string, key: string}[]>[
            {inner: "Страна:", key: "country"},
            {inner: "Дата вылета:", key: "dateOfDeport"},
            {inner: "Дата прилета:", key: "dateOfArrive"},
            {inner: "Кол-во ночей:", key: "night"},
            {inner: "Цена:", key: "price"},

        ],
        rangeData: {
            nights: {
                min: 0, max: 14
            },
            money: {
                min: 414, max: 9871, aText: "$"
            },
            moneyList: [851, 1989, 3950, 5835],
        }
    })
})