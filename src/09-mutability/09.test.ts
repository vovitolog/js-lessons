import {UserType} from "./09_01";

function increaseAge(user: UserType) {
    user.age++;
}

test('reference type  test', () => {

    let user = {
        name: 'Vladimir',
        age: 37,
        address: {
            title: "Khmki"
        }
    }

    increaseAge(user);

    expect(user.age).toBe(38);

    const superMan = user;
    superMan.age = 1000;
    expect(user.age).toBe(1000)
})

test('value type test', () => {
    let usersCout = 100;
    let adminsCount = usersCout;
})

test('reference type test', () => {

    let user = {
        name: 'Vladimir',
        age: 37,
        address: {
            title: "Khmki"
        }
    }

    let addr = user.address;
    let user2: UserType = {
        name: 'Sasha',
        age: 37,
        address: user.address,
    }

    user2.address.title = 'Moscow';

    expect(user.address.title).toBe('Moscow');
})

test('reference type array test', () => {

    const address = {
        title: 'Minsk'
    }


    let user = {
        name: 'Vladimir',
        age: 37,
        address: address
    }

    let user2: UserType = {
        name: 'Sasha',
        age: 37,
        address: address,
    }

    const users = [user, user2, {name: 'Katya', age: 20, address: address}];
    const admins = [user, user2];
    admins[0].name = 'Valdemar';

    expect(user.name).toBe('Valdemar');

})