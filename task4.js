// 4. Write a function called vowelCount which accepts a string
// as an argument. The function should return an object
// which has the count of the number of vowels that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}. Should not be
// case-sensitive.
// Example: vowelCount('hello world') // output: {e: 1, o: 2}

const str1 = 'hello world'

function vowelCount(str1) {
    const str = str1.split("")
    const vowels = ["a", "o", "u", "e", "i"]
    const vowelsM = vowels.map((vowel) => {
        let count = 0
        str.forEach(char => {
            if (char == vowel) {
                count++
                console.log(count)

            }
        });
            return count

    })
    const resultObject = {};

    vowels.forEach((vowel, index) => {
        const count = vowelsM[index]; 
        if (count > 0) {
            resultObject[vowel] = count;
        }
    });
    return resultObject

}

const object = vowelCount(str1)
console.log(object)