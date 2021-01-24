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