function curry(fn){
    const arity = fn.length
    return function f1(...args){
        if(arity === args.length){
            return fn(...args)
        } else {
            return function f2(...moreArgs){
                const newArgs = [...args, ...moreArgs]
                return f1(...newArgs)
            }
        }
    }
}


const curriedFunction = curry((a, b, c) => a + b + c)

// curriedFunction(1)
// console.log(curriedFunction(3, 10, 10))


function counter(){
    let count = 0


    function increment(){
        count += 1
        return count
    }

    function getValue(){
        return count
    }

    return {
        increment, getValue
    }
}


const newCounter = counter()
// console.log(newCounter.getValue())

// console.log(newCounter.increment())
// console.log(newCounter.increment())
// console.log(newCounter.increment())
// console.log(newCounter.getValue())


// Write a function which helps to achieve multiply(a)(b) and returns product of a and b

const multiplicationCurry = (a) => {
    return (b) => {
        return a * b
    }
}

console.log(multiplicationCurry(7)(7))

const myVar = multiplicationCurry(7)
console.log(myVar(9))
