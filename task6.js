// 6. Write a function called shiftLetters that takes a string as an
// argument and returns an encoded string with each letter
// shifted down the alphabet by one.
// Example: shiftLetters('abc') // output: 'bcd'

const str = 'abc'
function shiftLetters(str) {
    strarr = str.split("")
    const arr = strarr.map(char => {
        const currentCode = char.charCodeAt(0)
        const nextCode = currentCode + 1
        const nextChar = String.fromCharCode(nextCode)
        return nextChar
    });
    const str1 = arr.join("")
    return str1
}

const str1 = shiftLetters(str)
console.log(str1)