// var arr = [10,"faraz",false,undefined,50];

// arr.push('apple');

// arr.pop()

// arr.unshift(true)

// arr.shift()

// var copy  =  arr.slice(2,4)

// arr.splice(-2,0,"string")

// console.log(copy)



// var arr = [];

// arr.push(10)

// arr[1] = "faraz"

// arr[2] = 100000

// arr[3] = true

// arr[5] = "ali"

// console.log(arr[4])

// var arr = ['true',,false,,,,,100,,,,true];

// var arr = ['true',,false,,,,,100,,,,true]

// console.log(arr[13])


// var city = prompt("Enter your city");

// city = city.toLowerCase()

// // city = city.toUpperCase()

// if(city === "karachi"){
//     alert("Welcome..")
// }
// else{
//     alert("you lived in " + city)
// }


// Loop

// Iteration of a process or repeatation of something is called loop.

// 1) for loop

// 2) While loop

// 3) Do-While loop




// console.log('hello World 1')
// console.log('hello World 1')
// console.log('hello World 1')
// console.log('hello World 1')
// console.log('hello World 1')
// console.log('hello World 1')
// console.log('hello World 1')
// console.log('hello World 1')
// console.log('hello World 1')


// for(initialization;condition;increment/decrement){

// }

// for(var i = 4;i<=100;i++){
// console.log('hello World 1')
// }

// for(var i = 10;i >= 1;i--){
//     console.log(i);
// }

// for(var i = 0;i<=5;i++){
//     console.log(i, "hello world")
// }

// var userInput = +prompt("Enter any number");

// for(var i = 1;i<=10;i++){
// document.write(`${userInput}  x ${i} = ${userInput * i} <br>`)
// }

// document.write(`${userInput}  x 1 = ${userInput * 1} <br>
//     ${userInput}  x 2 = ${userInput * 2} <br>
//     ${userInput}  x 3 = ${userInput * 3} <br>

//     `)


// var arr = [10,20,30,40,50,60,70,80,90,100];

// for(var i = 0;i<10;i++){
//     console.log(arr[i])
// }


// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5])
// console.log(arr[6])
// console.log(arr[7])
// console.log(arr[8])
// console.log(arr[9])


var input = prompt("Enter where do you live?");

input = input.toLowerCase()

const  cities = ["karachi","lahore","islamabad","quetta"];

for(var i = 0;i<=3;i++){
    if(input === cities[i]){
        console.log('welcome..')
    }
    else{
        console.log("ok you live in " + input)
    }
}

