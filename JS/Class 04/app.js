var name = prompt("Enter your name");
var city = prompt("Enter your city");
var age = prompt("Enter your age");


console.log("My name is " + name + ". I am " + age + " years old. I lived in " + city);


console.log(`My name is ${name}. I am ${age} years old. I lived in ${city}`)


// Template Literals  // ES6


var name = "faraz";

console.log("My name is " + name)

console.log(`My name is ${name}`)

// comparsion operator

// == , ===, >, <, >=, <=, !==


var age = +prompt("Enter your age");

if(age == "18"){
    console.log("allow")
}
else{
    console.log("not allow")
}

var gender = prompt("Enter your gender");
var message = "";

if(gender === "male"){
    message = "welcome boys";
}

else if(gender === "female"){
    message = "welcome sister";
}

else{
   message = "incorrect value.."
}

alert(message)


var percentage = +prompt("Enter your percetnage");

if(percentage <=50){
    alert("your grade is D");
}

else if(percentage <=60){
    alert("your grade is C");

}

else if(percentage <=70){
    alert("your grade is B");

}

else if(percentage <=79){
    alert("your grade is A");

}

else if(percentage <=100){
    alert("your grade is A+");

}

else{
    alert("incorrect input!!");

}


// q: create a multiplication table with take 
// user input if user enter value then print that
// value table otherwise my default paste table of 5.


var table = +prompt("Enter any number");

if(table == ""){
    document.write("<h1>Multiplication table</h1>");

document.write(`5 x 1 = ${5*1} <br>
    5 x 2 = ${5*2} <br>
    5 x 3 = ${5*3} <br>
    5 x 4 = ${5*4} <br>
    5 x 5 = ${5*5} <br>
    5 x 6 = ${5*6} <br>
    5 x 7 = ${5*7} <br>
    5 x 8 = ${5*8} <br>
    5 x 9 = ${5*9} <br>
    5 x 10 = ${5*10} <br>
    
    `)
}
else{

    document.write("<h1>Multiplication table</h1>");
    
    document.write(`${table} x 1 = ${table*1} <br>
        ${table} x 2 = ${table*2} <br>
        ${table} x 3 = ${table*3} <br>
        ${table} x 4 = ${table*4} <br>
        ${table} x 5 = ${table*5} <br>
        ${table} x 6 = ${table*6} <br>
        ${table} x 7 = ${table*7} <br>
        ${table} x 8 = ${table*8} <br>
        ${table} x 9 = ${table*9} <br>
        ${table} x 10 = ${table*10} <br>
        
        `)
        }

var rollno  = +prompt("Enter your rollno");

if(rollno !== 500){
        console.log("you are allow to sit in exam.")
    }
    else{
            console.log("you are not allow to sit in exam.")

}


// false
//  0
// ""
// undefined
// null


var a = null;

if(a){
    console.log("if statement call..")
}
else{
    console.log("else statement call..")

}


// // && AND Operator    true-condition  && true-condition

// //  || OR Opearator    false-condition  || true-condition



var userWeight = +prompt("Enter your weight");

var time = +prompt("Enter time");

var gender = prompt("Enter your gender");


if(userWeight <= 200 || time < 6){
    alert("come and tryout")
}

if(gender && (userWeight <= 200 && time < 6) ){
    alert("come and tryout")
}
else{
    alert("better luck next time..")

}

var age = +prompt("Enter your age");

var res = prompt("Enter your resident")

if(age > 65 || age < 21 && res === "US"){
    console.log("allow")
}


else{
    console.log("not allow")
}


// && , ||    logical operatos


var ProgLang = prompt("Enter your programming langauge");

if(ProgLang  === "js"){
    
var city = prompt("Enter your city");

    if(city === "karachi"){
        var experience = prompt("Enter your experience");
        if(experience === "2"){
            console.log("come and join us!!")
        }
        else{
    console.log("experience lao!");

        }
    }
    else{
    console.log("karachi ajao!");

    }
}
else{
    console.log("js seekho!");
}
