var list = document.getElementById('list')

function addTodo(){
    var input = document.getElementById('todoInput');
 
    var liElement = document.createElement('li');

    var liText = document.createTextNode(input.value)

    liElement.appendChild(liText)

    list.appendChild(liElement)

    // DELETE BUTTON


    var delBtnElement = document.createElement('button');

    var delBtnText = document.createTextNode('Delete');

    delBtnElement.setAttribute('onclick','deleteSingleTodo(this)')

    delBtnElement.appendChild(delBtnText);

    liElement.appendChild(delBtnElement);


    // EDIT BUTTON

    var editBtnELEMENT = document.createElement('button');

    var editBtnText = document.createTextNode('Edit');

    editBtnELEMENT.setAttribute('onclick','editTodo(this)')

    editBtnELEMENT.appendChild(editBtnText);

    liElement.appendChild(editBtnELEMENT)


    // console.log(liElement); 
    
    input.value = ""
    
}

function deleteAllTodos(){
    list.innerHTML = ""
}

function deleteSingleTodo(e){
    e.parentNode.remove()
    
}

function editTodo(e){
    var updateVal = prompt("Enter updated value");

   e.parentNode.firstChild.nodeValue = updateVal
    
}