const print = (name) => {
    console.log(`Hello ${name}`)
}

const createPrint = (name) => {
    return () => print(name);
}

setTimeout(createPrint('Vlad'), 1000)
setTimeout(createPrint('Vad'), 1000)