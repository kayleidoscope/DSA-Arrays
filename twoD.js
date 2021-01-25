function findOhs(array) {
    const arrayOfOhs = []
    for (let i = 0; i < array.length; i++) {
        for (let l = 0; l < array[i].length; l++) {
            if (array[i][l] === 0) {
                arrayOfOhs.push([i, l])
            }
        }
    }
    return arrayOfOhs
}

function changeOhs(arrayOfOhs, array) {
    for (let i = 0; i < arrayOfOhs.length; i++) {
        let x = arrayOfOhs[i][0]
        let y = arrayOfOhs[i][1]

        //changing the rows
        for (let j = 0; j < array[y].length; j++) {
            array[x][j] = 0
        }
        
        //changing the columns
        for (let k = 0; k < array.length; k ++) {
            array[k][y] = 0;
        }
    }
    return array
}

console.log(
    changeOhs(
        findOhs([
            [1,0,1,1,0],
            [0,1,1,1,0],
            [1,1,1,1,1],
            [1,0,1,1,1],
            [1,1,1,1,1]
        ]),
        [
            [1,0,1,1,0],
            [0,1,1,1,0],
            [1,1,1,1,1],
            [1,0,1,1,1],
            [1,1,1,1,1]
        ]
    )
)

/*

This solution is O(n^5). There has got to be a better optimization because that
seems unsustainable.

*/