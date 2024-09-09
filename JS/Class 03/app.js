var radius = 18;

var circumCircle = 2 * 3.142 * radius;

var areaCircle = 3.142 * radius * radius;


console.log("Circumference of a circle = ", circumCircle)

console.log("area of a circle = ", areaCircle)



var a  =  2;

var b  =  5;

var exp = a-- + --b + b + ++a;
     
console.log(exp)


var firstName = prompt("Enter your first name");

var lastName = prompt("Enter your last name");

console.log("ohk! your name is " + firstName + " " + lastName)



prompt("Enter your first name..","faraz")




var num1 = parseInt(prompt( "Enter first value")); 

var num2 = parseInt(prompt("Enter second value"));

console.log(num1 + num2)



// datatypes

// String
// number
// undefined
// boolean    true or false


if(true){
    
    console.log("console call");
}


var city = prompt("Enter where do you live?");

if(city == "karachi"){
    console.log("welcome..")
}

else{
   console.log("you lived in " + city) 
}

// -------------------------------------------------------------------------



var age = prompt("Enter your age"); 

if(age >= 18){
    console.log("you are eligible for CNIC");
}

else{
    console.log("you are not eligible for CNIC");
}



var userInput  = prompt("Enter any number");

document.write("<h1>Multiplication Table</h1>");


document.write(userInput + " x 1 = " + userInput*1 + "<br>" + 
    userInput + " x 2 = " + userInput*2+ "<br>" +
    userInput + " x 3 = " + userInput*3+ "<br>" +
    userInput + " x 4 = " + userInput*4+ "<br>" +
    userInput + " x 5 = " + userInput*5+ "<br>" +
    userInput + " x 6 = " + userInput*6+ "<br>" +
    userInput + " x 7 = " + userInput*7+ "<br>" +
    userInput + " x 8 = " + userInput*8+ "<br>" +
    userInput + " x 9 = " + userInput*9+ "<br>" +
    userInput + " x 10 = " + userInput*10
)


