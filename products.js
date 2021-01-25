function products(array) {
    const newArray = []

    
    for (let i = 0; i < array.length; i++) {
        let product = 1;
        for (let j = 0; j < array.length; j++) {
            if (j !== i) {
                product = product * array[j]
            }
        }
        newArray.push(product)
    }
    return newArray
}

console.log(products([1, 3, 9, 4]))

/*

O(n^2). Could maybe go down to one for loop.

*/