// Array

// array is a method which store multiple values in a single vaiable is 

// called an array.   

var a = 10, b = 20, c = 30,  d = 40, e= 50;

console.log(a,b,c,d,e)   


//index number   0    1     2  3      4       5   6  

var numbers = [10,"faraz",30,true,undefined,100,false];

numbers[7] = "hamza";
   
numbers[10] = 5113131313;


// console.log(numbers[10])

// console.log(numbers.length)



// var biodata = [prompt("Enter your first name"),
//     prompt("Enter your last name"),
//     prompt("Enter your age"),
//     prompt("Enter your city")];


// console.log(`Hello my name is ${biodata[0]} ${biodata[1]}. 

//     I am ${biodata[2]} years old. I lived in ${biodata[3]}`);


// var arr = [];

// arr[0] = 10;
// arr[1] = "string";
// arr[2] = false


var arr = ['apple','banana','orange'];

// push method  (adding element in the end of an array)

arr.push('mango');

// unshift method  (adding element in the start of an array)

arr.unshift('mango',100,true);

// var arr = ['apple','banana','orange',"mango","grapes"];

// pop method  (delete element in the end of an array)

arr.pop();
// arr.pop();

// shift method  (delete element in the start of an array)

// arr.shift()
// arr.shift()


var arr = ['apple',"pine apple",'banana','orange',"mango","grapes"];

// splice method  (kisi bhi position par element ko add or delete).

arr.splice(1,0,"pine apple")

arr.splice(3,2)

arr.splice(0,2,100,true,"Faraz")

var arr = ['apple',"pine apple",'banana','orange',"mango","grapes"];

// slice method  (to copy elements in an array)
var res  =  arr.slice(2,6)

console.log(res)








