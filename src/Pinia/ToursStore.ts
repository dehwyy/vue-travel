import {defineStore} from "pinia";
import {Itour} from "../ts/intefaces";


export const useToursStore = defineStore("toursStore", {
    state: () => ({
        tours: <Itour[]>[
            {
                id: 1,
                title: "LOISIR HOTEL SHINAGAWA SEASIDE",
                price: "490$",
                url: 'https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/326305799.jpg?k=557868c6ed6c124e378f2108f8fda19cabca3289b5d9ddda0aee0b608ec86f5c&o=&hp=1',
                link: "/",
                country: "Япония",
                countryRoman: "japan",
                tags: ["japan", "verified", "bath", "wifi", "premium", "city view", "conditioner", "restaurant", "terrace"],
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
                countryRoman: "maldives",
                tags: ["maldives", "verified", "sea view", "wifi", "nature", "restaurant", "conditioner"],
                dateOfDeport: "28.07.2006",
                dateOfArrive: "7.08.2006",
                night: 11,
                stars: 4
            },
            {
                id: 3,
                title: "Russia",
                price: "789$",
                url: 'https://pix10.agoda.net/hotelImages/828/828582/828582_16080314330045173047.jpg?ca=6&ce=1&s=1024x768',
                link: "/",
                country: "Россия",
                countryRoman: "russia",
                tags: ["russia", "verified", "city view", "wifi", "restaurant", "palace"],
                dateOfDeport: "28.07.2006",
                dateOfArrive: "7.08.2006",
                night: 11,
                stars: 5
            },
            {
                id: 4,
                title: "China",
                price: "1789$",
                url: 'https://assets.vogue.com/photos/58a7453aa04dd36ec0479b21/master/w_2560%2Cc_limit/01-holding-the-peninsula-hotel-renovation-beijing-china.jpg',
                link: "/",
                country: "Китай",
                countryRoman: "china",
                tags: ["verified", "city view", "wifi", "restaurant", "conditioner"],
                dateOfDeport: "28.07.2006",
                dateOfArrive: "7.08.2006",
                night: 11,
                stars: 4
            },
            {
                id: 5,
                title: "Norway",
                price: "3789$",
                url: 'https://www.boutique-homes.com/storage/images/vacation-rentals/europe/norway/sea-cabins-manshausen-island-norway/cabins_for_rent_norway_07.jpg?s=f',
                link: "/",
                country: "Норвегия",
                countryRoman: "norway",
                tags: ["russia", "verified", "city view", "wifi", "nature", "lake", "terrace"],
                dateOfDeport: "28.07.2006",
                dateOfArrive: "7.08.2006",
                night: 13,
                stars: 3
            },
            {
                id: 6,
                title: "Canada",
                price: "4945$",
                url: 'https://phgcdn.com/images/uploads/mastheads/Image-of-Exterior-with-Grounds-Fairmont-Le-Chateau-Frontenac-Quebec-City-Canada.jpg',
                link: "/",
                country: "Канада",
                countryRoman: "canada",
                tags: ["russia", "verified", "lake", "wifi", "nature", "palace"],
                dateOfDeport: "28.07.2006",
                dateOfArrive: "7.08.2006",
                night: 11,
                stars: 5
            },

        ],
    }),
    getters: {
        getTours(): Itour[] {
            return this.tours
        }
    }
})