var studentArr = ['faraz',23,"male",1575,"faraz@gmail.com",'karachi'];  
  
console.log(studentArr);

  
var studentObj = {
    stdName:'faraz',
    stdAge:23,
    courses:'ReactJS',
    stdGender:"male",
    stdRollNo:1575, 
    stdEmail:"faraz@gmail.com",  
    stdCity:'karachi'
}

studentObj.courses = ['html','css','js']  
  
studentObj.courses.push('React JS','PHP')

studentObj.courses.unshift('PYTHON')

console.log(studentObj.courses);  

console.log(studentObj['stdName']);




var studentObj = {
    stdAddress:{  
        country:'Pakistan',
        city:'Karachi',
        longitude:415.5151,
        latitude:15.45,  
        zipCode: 12345
    },
    stdName:'faraz',
    stdAge:23,
    stdRollNo:1575,
    stdEmail:"faraz@gmail.com",
}

delete studentObj.stdAddress;

delete studentObj.stdEmail

var response = 'stdAge' in studentObj


console.log(response);





var studentObj = {
    stdName:'faraz',
    stdAge:23,
    stdRollNo:1575,
    stdEmail:"faraz@gmail.com",
    stdGetName:function(){
        console.log(this.stdName);
    }
}

studentObj.stdGetName()

console.log()

document.write()

document.getElementById()

document.getElementsByClassName()





console.log(
    studentObj.stdGetName());



function sum(a,b){
    return a + b;
    
}

var res = sum(10,20)

console.log(res);




// there are 3 types of function in JS

// 1) function Declaration

function abc(){
    console.log("function Declaration call..");
    
}

abc()



// 2) Anonymous function / Regular function

var xyz = function(){
    console.log("Anonymous function call..");

}

xyz()




// 3) Arrow function / Fat arrow function


function greet(){

}


function Student(name,age,email,city){
    this.stdName =name ,
    this.stdAge = age,
    this.stdEmail = email,
    this.stdCity= city,
    this.stdGetEmail = function(){
       return this.stdEmail;
        
    }
}

var student1 = new Student('faraz',23,'faraz@gmail.com','karachi');

var student2 = new Student('hamza',26,'hamza@gmail.com','lahore');


console.log(student1.stdGetEmail());

console.log(student2.stdGetEmail());


// new Date()


var studentObj = {
    stdAddress:{
                country:'Pakistan',
                city:'Karachi',
                longitude:415.5151,
                latitude:15.45,
                zipCode: 12345
            },
    stdName:'faraz',
    stdAge:23,
    stdRollNo:1575,
    stdEmail:"faraz@gmail.com",
    stdGetName:function(){
        console.log(this.stdName);
    }
}

console.log(studentObj['stdEmail']);



// for in loop

for(var key in studentObj){
    console.log(studentObj[key]);
}
