export type UserType = {
    name: string
    age: number
    address: {
        title: string
    }
}

function increaseAge(user: UserType) {
    user.age++;
}