// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements
// that are strings.
// Example: showFirstAndLast(['hello', 1, 2, 'world']) // output: ['hello', 'world']

const array = ['hello', 1, 2, 'world']
function showFirstAndLast(array){
    const arrayS = array.filter((num)=>{
        if(typeof(num =='string') && (array[0]===num || array[array.length-1]===num))
        {return num}
    })
    return arrayS
}

const arrayFL =showFirstAndLast(array)
console.log(arrayFL)