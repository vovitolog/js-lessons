import {ManType} from "./Destructuring";

let props: ManType;
beforeEach(() => {
        props = {
            name: "Vladimir",
            age: 37,
            lessons: [
                {title: '1'},
                {title: '2'}
            ],
            adress: {
                street: {
                    title: "Ivanovskaya"
                }
            }
        }
    }
)

test('objects', () => {

    const {age} = props;
    const {title} = props.adress.street
    expect(age).toBe(37);
    expect(title).toBe("Ivanovskaya")
})

test('arrays', () => {

const [lesson1, lesson2] = props.lessons;

expect(lesson1).toEqual({title: '1'})
})