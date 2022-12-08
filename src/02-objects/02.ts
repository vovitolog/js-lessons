export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    adress: AdressType
    technologies: TechnologyType[]
}

type LocalCityType = {
    title: string
    country: string
}

type AdressType = {
    streetTitle: string
    city: LocalCityType
}

type TechnologyType = {
    id: number,
    title: string
}

const student: StudentType = {
    id: 1,
    name: 'Vladimir',
    age: 37,
    isActive: true,
    adress: {
        streetTitle: 'Ivanovskaya',
        city: {
            title: 'Khimki',
            country: 'Russia'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML',
        },
        {
            id: 2,
            title: 'JS',
        },
        {
            id: 3,
            title: 'React',
        },
    ]
}