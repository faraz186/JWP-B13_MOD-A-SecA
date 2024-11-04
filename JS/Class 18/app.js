// function Book(bookName,bookPrice,bookTitle,bookAuthor){
//     this.book = bookName;
//     this.Bprice = bookPrice,
//     this.BTitle = bookTitle,
//     this.BAuthor = bookAuthor
// }

// Book.prototype.BGetTitle = function(){
//     return this.BTitle
// }

// var book1 = new Book('programming fundamentals',2400,'Into to programming','ABC');

// console.log(book1.BGetTitle());


// var obj = {
//     name:'abc',
//     age:15,
//     email:"abc@gmail.com",
//     status:true
// }

// for(var key in obj){
//     console.log(key,obj[key]);
    
// }


function greet(){
    try{
        console.lg('hello world');
    }
    catch(error){
        console.log(error);
        
    }
    
}

greet()


function submit(){

    var pass = document.getElementById('password');
    
    if(pass.value.length < 8){
        throw "Please enter at least 8 characters.";
    }
    console.log(pass.value); 
    
}



function sum(a,b,c){
    var result = a + b + c;

    console.log(result);
        
    // return result
}

sum(10,20,30)

console.log(sum(10,20,30));

