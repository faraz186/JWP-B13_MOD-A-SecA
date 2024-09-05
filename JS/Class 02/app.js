var num = "2";

var num2 = 10;

var res = num / num2

console.log( res)


var firstName = "Muhammad",lastName = "faraz",city="karachi";


console.log("My name is " + firstName + " "+ lastName + ". I lived in " + city);


var text = "Learning JS";

document.write("<p>" + text + "</p>")

var opt1 = "A",opt2 = "B",opt3 = "C";

document.write("<select>" + "<option>" + opt1 +"</option>"+ "<option>" + opt2 +"</option>" + "<option>" + opt3 +"</option>" +"</select>")


var sum = 10 * (10 + 2);

// BODMAS ==> BRACKET,ORDER,DIVISION,MULT,ADD,SUB

console.log(sum)



// Icrement, decrement


var num = 1;

console.log(num)

var res = ++num; 

console.log(res)



// pre increment  ++num  ==> add value varaible store hoga


// post increment  num++ ==> variable ma store hoga aur add baad ma hoga



var sum = 10;

console.log("before value ==>",sum);

var update = --sum;

console.log("after value ==>",update);



var a = 5 , b = 3;

var exp = a + --b + a++ - b++ - a - b-- + a++ - --b;

console.log(exp)


var a = "100";

var b = "50";

console.log(a - b)