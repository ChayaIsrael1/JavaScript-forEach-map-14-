// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.
// Example: capitalize('hello world') // output: 'HELLO WORLD'

const str='hello world'

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

const str1 =capitalize(str)
console.log(str1)