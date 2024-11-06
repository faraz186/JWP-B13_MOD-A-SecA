// local storage

// data save on Local Storage

var obj = {
    stdName:'abc',
    email:"abc@gmail.com",
    city:'karachi'
}


localStorage.setItem('biodata',JSON.stringify(obj))

localStorage.setItem('name','faraz')

localStorage.setItem('email',"faraz@gmail.com");

localStorage.setItem('age',24);


// Get data from Local storage

var getData = localStorage.getItem('biodata');

var getName = localStorage.getItem('name');

console.log(JSON.parse(getData));

console.log(getName);


// delete single key from local storage

localStorage.removeItem('email')

localStorage.removeItem('age')


// delete All Data from local storage

localStorage.clear()
