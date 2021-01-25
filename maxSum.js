function sum(acc, val) {return acc + val}

function maxConsecutiveSum(array) {
    let maxSum = 0;
    let ticks = 0

    //iterate through the array to allow us to iterate through just 1 value,
    //then 2 values, then 3 values, and so on until the length of the array
    //is reached
    for (let i = 0; i < array.length; i++) {
        ticks++
        //for each iteration, I will need to iterate through (array.length - i)
        //times to make the appropriate number of mini-arrays
        if (i === 0) {
            if (array[i] > maxSum) {
                maxSum = array[i]
            }
        } else if (i > 0) {
            for (let j = 0; j < (array.length - i); j++) {
                ticks++
                let arrayCopy = array
                let miniArray = arrayCopy.slice(j, j + i + 1)
                let arraySum = miniArray.reduce(sum)
                if (arraySum > maxSum) {
                    maxSum = arraySum
                }
            }
        }
    }
    return ({result: maxSum, ticks: ticks})
}

console.log(maxConsecutiveSum([4, 6, -3, 5, -2, 1]))

/*

Time complexity: O(n^2) because I have two for loops nested in one another.
I'm sure this could be optimized to avoid using two for loops.

*/