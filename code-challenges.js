// // ASSESSMENT 3: Coding Practical Questions


// // --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// //research what on earth Fibonacci sequence is

// //draft up mock test w/Jest 
// // describe("fibo", () => {
// //     test("return the first 10 numbers of the Fibonacci sequence in an array", () => {
// //         expect(fibo(n)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
// //     })
// // })

// //declare a function that will take in a number as an argument
// const fibo = (num) => {
//     //initialize array with starter numbers
//     let arr = [1,1]
//     //create for loop to ensure sequences goes up to 10th number
//     for(let i = 2; i < num; i++) {
//         //push new values into previously established array
//         arr.push(arr[i - 2] + arr[i - 1])
//     }
//     // return the new arr
//     return arr
// }
// //console.log for to check for desired result
// // console.log(fibo(10))


// // --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// // Expected output: [-9, 9, 7, 199]
// var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// // Expected output: [-823, 7, 23]

//draft up mock test w/Jest 
// describe("oddsInOrder", () => {
//     test("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
//         expect(oddsInOrder(fullArr1)).toEqual([-9, 7, 9, 199])
//         expect(oddsInOrder(fullArr2)).toEqual([-823, 7, 23])
//     })
// })

// //Create function that takes in array as an argument
// const oddsInOrder = (arr) => {
//     //Filter through array if value equals/truthy to an odd number it is automatically pushed/returned to new array
//     //sort new array in ascending order
//     return arr.filter(value => typeof value === "number" && value % 2 !== 0).sort((a, b) => a -b)
// }
// //console.log to ensure desired results
// console.log(oddsInOrder(fullArr1));
// console.log(oddsInOrder(fullArr2))


// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

// var middleLetters1 = "hello"
// // Expected output: “l”
// var middleLetters2 = "rhinoceros"
// // Expected output: “oc”

//draft up mock test w/Jest 
// describe("middleLetter", () => {
//     test("takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters", () => {
//         expect(middleLetter(middleLetters1)).toEqual("l")
//         expect(oddsInOrder(middleLetters2)).toEqual("oc")
//     })
// })

// declare function that takes in a string
// const middleLetter = (str) => {
//     //return a new/substring of the middle letter. If there are even numbers return two middle letters
//     //Look for higher order functions I could use ".substr"
//     //Remember that odd numbers do not return whol numbers will need to use Math.round() for any potential issues there.
//     //Try and use ternary operations rather than if else statements
//     return str.substr(Math.round(str.length / 2), str.length % 2 === 0 ? 2
//     // str.length % 2 === 0(condition) ?(is it true?) 2(then print a string of 2) :(if false) 1(return a string of 1)
//     : 1)
// }
//  console.log(middleLetter(middleLetters1))
//  console.log(middleLetter(middleLetters2))


// --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

//not really sure how to set up a test for this sort of problem

//initialize the class Sphere
// class Sphere {
//     //
//     //pass radius as an argument in the constructor
//     constructor(radius){
//         //set this.radius property to radius 
//         this.radius = radius
//     }
//     // generate a method that returns the area of sphere using Math.PI for higher accuracy
//     area() {
//         return Math.PI * 4 * (this.radius**2)
//     }
// }
// //establish three spheres with different radii to see if it worked
// var sphere1 = new Sphere(2)
// console.log(sphere1.area());
// var sphere2 = new Sphere(6)
// console.log(sphere2.area());
// var sphere3 = new Sphere(23)
// console.log(sphere3.area());


// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

//draft up mock test w/Jest 
//describe("arrayAccum", () => {
//     test("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
//         expect(arrayAccum(numbersToAdd1)).toEqual([2, 6, 51, 60])
//         expect(arrayAccum(numbersToAdd2)).toEqual([0, 7, -1, 11])
//         expect(arrayAccum(numbersToAdd3)).toEqual([])
//     })
// })


//declare a function that takes takes an array as an argument
const arrayAccum = (arr) => {
    //calculate the accumulation of the array and returns the array with the new values. If array is 0 return the empy array
    return arr.reduce((a, b, i) => [...a, a.length > 0 ? b + a[i-1] : b]
    , [])
}

console.log(arrayAccum(numbersToAdd1))
console.log(arrayAccum(numbersToAdd2))
console.log(arrayAccum(numbersToAdd3))