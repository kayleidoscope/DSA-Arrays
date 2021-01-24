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

/*

Time-complexity: O(n). No, it cannot be optimized because no matter what,
you'll need to look at every value in the array to make sure it's not 5 or less.

*/