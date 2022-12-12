export type UserType = {
    name: string
    hair: number
    adress: { title: string }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {...u, hair: u.hair / power};
    // copy.hair /= power;
    return copy;
}


export function moveUser(user: UserWithLaptopType, newCity: string) {
    const copy = {...user, address: {...user.adress, title: newCity}};
    // copy.address.title = newCity;
    return copy;
}

export function macUser(user: UserWithLaptopType, newNotebook: string) {
    return {...user, laptop: {...user.laptop, title: newNotebook}}
}