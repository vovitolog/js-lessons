/* .. ваш код для inBetween и inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

function inBetween(start, end) {

    return (el) => {
        return el >= start && el <= end
    }
}

function inArray(array) {
    return (el) => array.includes(el);
}

console.log((arr.filter(inArray([1, 2, 10])))); // 1,2