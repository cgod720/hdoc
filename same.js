// const same = (arr1, arr2) => {
//     if(arr1.length !== arr2.length) return false

//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if(correctIndex === -1) return false
//         arr2.splice(correctIndex, 1)
//     }
//     return true
// }


const same = (arr1, arr2) => {
    const obj1 = {}
    const obj2 = {}
    for (let i = 0; i < arr1.length; i++) {
        if(obj1[arr1[i]]) obj1[arr1[i]]++
        else obj1[arr1[i]] = 1
    }
    for (let i = 0; i < arr2.length; i++) {
        if(obj2[arr2[i]]) obj2[arr2[i]]++
        else obj2[arr2[i]] = 1
    }

    for (const key in obj1) {
        console.log(obj1[key])
        console.log(obj2[key ** 2])
        if(obj1[key] != obj2[key ** 2]) return false
    }

    return true
}


// console.log(same([1,2,3,1], [1,4,9]))


const anagram = (str1, str2) => {
    const obj1 = {}
    const obj2 = {}
    let strArr1 = str1.split('')
    let strArr2 = str2.split('')
    for (const letter of str1) {
        obj1[letter] ? obj1[letter]++ : obj1[letter] = 1
    }
    for (const letter of str2) {
        obj2[letter] ? obj2[letter]++ : obj2[letter] = 1
    }
    for (const key in obj1) {
        if(obj1[key] !== obj2[key]) return false
    }
    return true
}

// console.log(anagram('oxz', 'zox'))


const sumZero = (arr) => {
    let pointerOne = 0
    let pointerTwo = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        let both = arr[pointerOne] + arr[pointerTwo]
        if(pointerOne === pointerTwo){
            return false
        } else if(both === 0){
            return [arr[pointerOne], arr[pointerTwo]]
        } else if(both > 0){
            pointerTwo--
        } else{
            pointerOne++
        }
    }
    return false
}

// console.log(sumZero([-4, -3, 0, 1, 2, 5]))


const countUniqueValues = (arr) => {
    let uniques = 0
    let start = 0
    let counter = 1
    for (let i = 0; i < arr.length; i++) {
        if(i === 0){
            uniques++
        }
        if(arr[start] !== arr[counter] && arr[counter] != undefined){
            uniques++
            start = counter
            counter++
        } else {
            counter++
        }
    }
    return uniques
}

// console.log(countUniqueValues([-4,-3,-2,-1,1,1,1,1,2,3,4,5,76,8,]))


const countUniquesWObj = (arr) => {
    let obj = {}
    let uniques = 0
    arr.forEach(num => {
        if(!obj[num]){
            obj[num] = true
        }
    });
    for (const key in obj) {
        uniques++
    }
    return uniques
}


// console.log(countUniquesWObj([-4,-3,-2,-1,1,1,1,1,2,3,4,5,76,8,]))


const returnSet = (arr) => {
    return new Set(arr).size
}

// console.log(returnSet([-4,-3,-2,-1,1,1,1,1,2,3,4,5,76,8,]))



// Sliding window
const returnMax = (arr, digits) => {
    let temp
    let max = 0
    // let slider = max

    for (let i = 0; i < digits; i++) {
        max += arr[i];
        
    }

    temp = max
    

    for (let i = 1; i < arr.length - digits + 1; i++) {
        
        temp = temp - arr[i - 1] + arr[i + digits - 1]

        if (temp > max){
            max = temp
        }
    }

    return max
}

// console.log(returnMax([2,6,9,2,1,8,5,6,3], 5))


const doors = () => {
    const gobs = []
    for (let i = 0; i < 100; i++) {
        gobs[i] = false
    }

    for (let i = 0; i <= gobs.length; i++) {
        for (let j = 1; j <= 100; j++) {
            if (j % i === 0) {
                gobs[j] = !gobs[j]
            }
            
        }
        
    }
    console.log(gobs)
    const squares = []
    for (let i = 0; i <= gobs.length; i++) {
        if(gobs[i] === true) squares.push(i) 
        
    }
    return squares
}

// console.log(doors())


// const isAVowel = (letter) => {
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     if(vowels.includes(letter.toLowerCase())){
//         return true
//     }
//     return false

// }

// console.log(isAVowel('j'))


function highestRank(arr){
    const obj = {}
    arr.forEach((num) => {
      if(obj[num]) obj[num]++
      else obj[num] = 1
    })
    
    let max = 0
    for(key in obj){
      
      if(obj[key] > max) max = obj[key]
    }
    const maxOccurences = []


    for (const key in obj) {
        
        if(obj[key] === max) maxOccurences.push(key)
    }

    if (maxOccurences.length > 1) {
        for (let i = 0; i < maxOccurences.length - 1; i++) {
            max = Math.max(maxOccurences[i], maxOccurences[i + 1] ? maxOccurences[i + 1] : 0)
            
        }
    } else {
        max = maxOccurences[0]
    }
    console.log(maxOccurences)
    return max
    
  }

//   console.log(highestRank([12,1,4,12,74,74,12,3,2,12, 74, 74, 12, 12, 4, 3, 3, 3, 3, 3]))



const convert = (s, numRows) => {
    const rows = []
    let forward = true
    for (let i = 0; i < numRows; i++) {
        rows[i] = []
    }
    

    let index = 0
    for (let i = 0, j = 0; i < s.length; i++) {
        if (forward && index < numRows) {
            if(j !== 0){
                index++
                rows[index].push(s[i])

                if (index === rows.length - 1) {
                    index++
                }
            } else {
                rows[index].push(s[i])
                index++
            }
        } else if (forward && index == numRows){
            forward = false
                index -= 2
                rows[index].push(s[i])
        } else if(!forward && index > 0){
            index--
            rows[index].push(s[i])
        } else if(index == 0){
            index++
            rows[index].push(s[i])
            forward = true
            j++
        }

        
    }
    let str = ''
    rows.flat().forEach(letter => str += letter)
    console.log(rows)
    return str
}

console.log(convert("PAYPALISHIRING", 4))