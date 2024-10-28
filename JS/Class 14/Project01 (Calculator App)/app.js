var input = document.getElementById('inputField');

function getValue(e){
    input.value += e
}

function clrAll(){
    input.value = ""
}

function deleteChar(){
    input.value = input.value.slice(0,-2)
}

function square(){
    input.value = input.value  * input.value
}
function equal(){
    input.value = eval(input.value)
}