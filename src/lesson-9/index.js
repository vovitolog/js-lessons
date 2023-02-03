const createCounter = (initialValue) => {
    const counter = {
        increment() {
            initialValue++;
        },
        getCounter() {
            return initialValue
        }
    }
    return counter;
}

const counter1 = createCounter(20);
const counter2 = createCounter(10);

counter2.increment();
console.log(counter2.getCounter());