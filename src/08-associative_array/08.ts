//export const usersArray = ['Vasya', 'Petya', 'Tolya', 'Vova'];

export const usersObj = {
    '0': 'Vasya',
    '1': 'Petya',
    '2': 'Tolya',
    '3': 'Vova'
}

type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    '101': {id: 101, name: 'Vasya'},
    '102': {id: 102, name: 'Petya'},
    '103': {id: 103, name: 'Tolya'},
    '104': {id: 104, name: 'Vova'},
}

const user = {id: 100500, name: 'Igor'};
users[user.id] = user;



export const usersArray = [
    {id: 101, name: 'Vasya'},
    {id: 102, name: 'Petya'},
    {id: 103, name: 'Tolya'},
    {id: 104, name: 'Vova'},
]