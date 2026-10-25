// Answer the questions below and use the map or the
// forEach method:
// 1. Write a function called doubleValues which accepts an
// array of integers and returns a new array with all the
// values in the array passed to the function doubled.
// Example: doubleValues([1, 2, 3]) // output: [2, 4, 6]
array = [1, 2, 3]
function doubleValues(array){
    let arrayd = array.map((num)=>{
        return num*2
    })
    return arrayd
}

const arrayd = doubleValues(array)
console.log(arrayd)