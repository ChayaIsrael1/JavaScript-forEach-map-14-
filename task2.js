// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values
// in the array passed to the function.
// Example: onlyEvenValues([1, 2, 3, 4, 5, 6]) // output: [2, 4, 6]

array=[1, 2, 3, 4, 5, 6]

function onlyEvenValues(array){
    const arrayE = array.filter((num)=>{
        if (num%2==0)
        {return num}
    })
    return arrayE
}

const arrayE =onlyEvenValues(array)
console.log(arrayE)