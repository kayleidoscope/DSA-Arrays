function mergeArrays(array1, array2) {
    //combine the arrays
    const megaArray = array1.concat(array2)

    //sort the new array
    megaArray.sort((a, b) => a - b)
    return megaArray
}

console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]))

/*

The time complexity is O(n) because it will have to iterate through each
number in the .sort() function in order to sort it. I don't believe it can
be optimized.

*/