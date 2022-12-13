import {
    addBooksToUser,
    macUser,
    makeHairStyle,
    moveUser, removeJsBook, updateCompany, updateCompany2, updateJsToTs,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";
import exp from "constants";
import {usersArray} from "../08-associative_array/08";


test('reference type test', () => {
    let user: UserType = {
        name: 'Vladimir',
        hair: 38,
        adress: {title: 'Khimki'}
    }

    const awesomeUser = makeHairStyle(user, 2);

    expect(awesomeUser.hair).toBe(19);
    expect(user.hair).toBe(38);
    expect(awesomeUser.adress === user.adress).toBe(true);
})

test('change user address', () => {
    let user: UserWithLaptopType = {
        name: 'Vladimir',
        hair: 38,
        adress: {title: 'Khimki'},
        laptop: {title: 'HP'},
    }

    const movedUser = moveUser(user, 'Moscow');

    expect(movedUser).not.toBe(user)
    expect(movedUser.address).not.toBe(user.adress)
    expect(movedUser.address.title).toBe('Moscow')
    expect(user.laptop).toEqual(movedUser.laptop)
})

test('upgrade user laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Vladimir',
        hair: 38,
        adress: {title: 'Khimki'},
        laptop: {title: 'HP'},
    }

    const userWithMac = macUser(user, 'Macbook');

    expect(userWithMac.laptop.title).toBe('Macbook')
    expect(userWithMac.laptop).not.toBe(user.laptop)
    expect(userWithMac.adress).toBe(user.adress)
    expect(user.laptop.title).toBe('HP')
})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Vladimir',
        hair: 38,
        adress: {title: 'Khimki'},
        laptop: {title: 'HP'},
        books: ['css', 'js', 'html']
    }

    const userCopy = addBooksToUser(user, ['ts', 'react']);

    expect(userCopy.books).toEqual(['css', 'js', 'html', 'ts', 'react'])
})

test('update js to ts book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Vladimir',
        hair: 38,
        adress: {title: 'Khimki'},
        laptop: {title: 'HP'},
        books: ['css', 'js', 'html']
    }

    const userCopy = updateJsToTs(user, 'js', 'ts');

    expect(user).not.toBe(userCopy);
    expect(user.adress).toBe(user.adress)
    expect(userCopy.books[1]).toBe('ts');
})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Vladimir',
        hair: 38,
        adress: {title: 'Khimki'},
        laptop: {title: 'HP'},
        books: ['css', 'js', 'html']
    }

    const userCopy = removeJsBook(user, 'js');

    expect(user).not.toBe(userCopy);
    expect(user.adress).toBe(user.adress)
    expect(userCopy.books[1]).toBe('html');
})

test('companies', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Vladimir',
        hair: 38,
        adress: {title: 'Khimki'},
        laptop: {title: 'HP'},
        companies: [{id: 1, title: 'corbina'}, {id: 2, title: 'beeline'}]
    }

    const userCopy = updateCompany(user, 1, 'Corbina');

    expect(user).not.toBe(userCopy);
    expect(user.adress).toBe(user.adress)
    expect(userCopy.companies).not.toBe(user.companies);
    expect(userCopy.companies[0].title).toBe('Corbina')
    expect(user.companies[0].title).toBe('corbina')
})

test('update companies', () => {
    let user: UserWithLaptopType = {
        name: 'Vladimir',
        hair: 38,
        adress: {title: 'Khimki'},
        laptop: {title: 'HP'},
    }

    let companies = {
        'Vladimir': [{id: 1, title: 'corbina'}, {id: 2, title: 'beeline'}],
        'Dimych': [{id: 1, title: 'incubator'}, {id: 2, title: 'epam'}]
    }

    const copy = updateCompany2(companies, 'Vladimir', 1, 'incubator')

    expect(copy['Vladimir']).not.toBe(companies['Vladimir'])
    expect(copy['Dimych']).toBe(companies['Dimych'])
    expect(copy['Vladimir'][0].title).toBe('incubator')
})