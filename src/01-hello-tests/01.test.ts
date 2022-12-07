import {mult, splitSentence, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {
    const result = sum(a, b);

    expect(result).toBe(3);
})

test('mult should be correct', () => {
    const result = mult(b, c);

    expect(result).toBe(6);
})

test('splitting should be correct', () => {
    const a = "Hello";
    const b = "World";

    const result = splitSentence("Hello World");

    expect(result.length).toBe(2);
    expect(result[0] === "Hello").toBe(true);
    expect(result[1]).toBe("World");
})