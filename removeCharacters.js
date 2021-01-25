function removeCharacters(string, removeThese) {
    let newString = ""
    let ticks = 0

    for (let i = 0; i < string.length; i++) {
        let okLetter = true;
        for (let j = 0; j < removeThese.length; j++) {
            if (string[i] === removeThese[j]) {
                okLetter = false;
                break
            }
        }

        if (okLetter) {
            newString = newString + string[i]
        }
    }
    return {result: newString, ticks: ticks}
}

console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))

/*

The time optimization is O(n^2). I'm sure it could be optimized.

*/