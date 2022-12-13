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

export type UserWithBooksType = UserWithLaptopType & {
    books: Array<string>
}

export type CompanyType = {
    id: number, title: string
}

export type WithCompaniesType = {
    companies: Array<CompanyType>
}

export function addBooksToUser(u: UserWithBooksType, books: Array<string>) {
    const copy = {...u, books: [...u.books, ...books]};
    return copy
}

export function updateJsToTs(u: UserWithBooksType, oldBook: string, NewBook: string) {
    const copyUser = {...u, books: [...u.books]};
    copyUser.books[copyUser.books.indexOf(oldBook)] = NewBook;
    return copyUser
}

export const removeJsBook = (u: UserWithBooksType, bookToDelete: string) => (
    {...u, books: u.books.filter(b => b !== bookToDelete)}
)

export const updateCompany = (u: UserWithLaptopType & WithCompaniesType, idCompany: number, newTitle: string) => {
    const copy = {
        ...u, companies:
            u.companies.map(c => c.id === idCompany ? {...c, title: newTitle} : c)
    }
    return copy;
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

export const updateCompany2 = (companies: { [key: string]: Array<CompanyType> },
                               userName: string,
                               companyId: number,
                               newTitle: string,
) => {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)

    return companyCopy;
}
