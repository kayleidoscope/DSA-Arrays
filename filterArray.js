function noLessThanFive(array) {
    const newArray = []

    for(let i = 0; i < array.length; i++) {
        if (array[i] > 5) {
            newArray.push(array[i])
        }
    }

    return newArray
}

console.log(noLessThanFive([1, 4, 16, 2, 12, 22]))
console.log(noLessThanFive([1, 2, 3, 4, 5, 6]))
console.log(noLessThanFive([6, 7, 8, 9, 10]))