function stringRotation(str1, str2) {
    let result = false;
    for (let i = 0; i < str1.length; i++) {
        let firstBit = str1.slice(0, str1.length - i)
        let lastBit = str1.slice(str1.length - i)
        let compareStr = lastBit + firstBit
        if (compareStr === str2) {
            result = true
        }
    }
    return result
}

console.log(stringRotation("amazon", "azonam"))

/*

This function is O(n). The time will increase by 1 for each additional
letter on the string pairs.

*/