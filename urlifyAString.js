function urlify(string) {
    let newString = ""
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            newString = newString + "%20"
        } else {
            newString = newString + string[i]
        }
    }
    return newString
}

console.log(urlify("tauhida parveen"))
console.log(urlify("www.thinkful.com /tauh ida parv een"))

/*

Time-complexity: O(n). It could be optimized to O(1) with the .replaceAll()
method and a global parameter, but that didn't seem like the point of this
exercise.

*/