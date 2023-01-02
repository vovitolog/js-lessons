// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum1(...nums: Array<number>): any {
    console.log(nums)

    // В return стоит "заглушка", чтоб typescript не ругался
    return nums.reduce((acc, currentValue) => acc + currentValue, 0);
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    if (!((a + b) > c && (a + c) > b && (c + b) > a)) return '00';
    if (a === b && a === c) return '10';
    if ((a === b || a === c) || (a === b || b === c)) return '01';
    else return '11'
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    return number.toString().split('').reduce((acc, curr) => Number(curr) + acc, 0);
}


// 4. Функция isEvenIndexSumGreater принимает параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let odd = 0;
    let even = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) even += arr[i];
        else odd += arr[i];
    }
    // В return стоит "заглушка", чтоб typescript не ругался
    return even > odd;
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, которые являются элементами исходного массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number | undefined> {

    const result = array.filter(el => (el > 0 && Number.isInteger(el))).map(el => el ** 2);
    return result;
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    if (N > 0) return N + sumFirstNumbers(N - 1);
    else return N;
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    let rest = amountOfMoney;
    let result = [];
    for (let i = 0; i < banknotes.length; i++) {
        if (rest < banknotes[i]) continue
        else {
            let count = Math.floor(rest / banknotes[i]);
            console.log(count + ' count')

            for (let j = 0; j < count; j++) {
                result.push(banknotes[i]);
            }
            rest =  rest %banknotes[i] ;
            console.log(rest + ' new REST')
        }
    }
    // В return стоит "заглушка", чтоб typescript не ругался
    console.log(result)
    return result;
}