type UsersType = {
    [key: string]: { id: number, name: string }
}
let users: UsersType;

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Vasya'},
        '102': {id: 102, name: 'Petya'},
        '103': {id: 103, name: 'Tolya'},
        '104': {id: 104, name: 'Vova'},
    }
})

test ('should update corresponding user', ()=> {
    users['101'].name = 'Alisa';
    expect(users['101'].name).toBe('Alisa');
})

test ('should delete corresponding user', ()=> {
    delete users['101'];
    expect(users['101']).toBeUndefined()
})