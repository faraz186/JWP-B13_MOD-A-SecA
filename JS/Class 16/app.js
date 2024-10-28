// console.log(document);

// var div = document.getElementById('main');

// console.log(div.previousSibling.nodeName);

// var divElement = document.getElementById('container');

// divElement.className = "box"

// divElement.setAttribute('class','box1')

// console.log(divElement);

var btn = document.getElementById('btn');

btn.setAttribute('class','btn');

btn.setAttribute('onclick','greet()');


console.log(btn.hasAttribute('onmouseover'));

var getAttr = btn.getAttribute('onclick');

var attr = btn.attributes;

console.log(attr[2].nodeValue);


// function greet(){
//     alert('submit it...')
// }


var div = 

document.getElementById('main');

// create h1 element with DOM

var h1Element = 

document.createElement('h1');

var h1Text = 

document.createTextNode('Hello WOrld');

h1Element.appendChild(h1Text)

console.log(h1Element);

// create P element with DOM


var pElement = document.createElement('p');

var pText = document.createTextNode('Lorem ipsum dolor..')

pElement.appendChild(pText)

console.log(pElement);

div.appendChild(h1Element)

div.appendChild(pElement)


// CRUD Operation

// C = CREATE
// R = READ
// U = UPDATE
// D = DELETE



