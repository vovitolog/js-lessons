import {macUser, makeHairStyle, moveUser, UserType, UserWithLaptopType} from "./10_01";
import exp from "constants";


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