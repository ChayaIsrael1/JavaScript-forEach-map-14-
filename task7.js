// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)
function capitalize(str){
const array = str.split("")
const arrayC=array.map((char) => {
    if (char.toUpperCase() != char)
    { return char.toUpperCase()}
    else
    {return char}
});
const str1 = arrayC.join("") 
return str1
}
// Example: swapCase('hello world title test') // output: 'HELLO world TITLE test'

str='hello world title test'

function swapCase(str){
const array = str.split(" ")
const arrayC=array.map((char, i) => {
    console.log(char, i)
    if (i%2 == 0)
    { return capitalize(char)}
    else
    {return char}
});
return arrayC
}

str1=swapCase(str)
console.log(str1)
