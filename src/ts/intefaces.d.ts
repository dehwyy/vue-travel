export interface Iquery {
    stars?: number,
    country?: string | null,
    price?: number,
}

export interface Itour {
    id: number
    price: string
    title: string
    country: string
    url: string
    link: string
    dateOfDeport: string
    dateOfArrive: string
    night: number
    stars: number
    tags: Array[string]

}

export interface Inavbar {
    link: string
    myClass?: string
    inner?: string
}

export interface tagsList {
    [key]: {
        link: string
        title: string
    }
}

export interface  Iglobal {
    isFocusedTags: boolean
}