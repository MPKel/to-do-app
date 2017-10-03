function onReady() {
  var toDos = [];
  var addToDoForm = document.getElementById('addToDoForm');
  var deleteButton = document.getElementById('deleteBtn');

  function createNewToDo(){
    var newToDoText = document.getElementById('newToDoText');
    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = '';

    renderTheUI(toDos);
  }

  function deleteToDo(toDos){
    var removeList = document.getElementsByClassName('li1');
    console.log(removeList[0] + " within the deleteToDo function");
    console.log(removeList[0].firstElementChild.getAttribute("type") + " within the deleteToDo function");
    // removeList.forEach(function(remove){
    //   console.log(removeList + " within the deleteToDo function")
    //   //console.log(toDo.firstElementChild.getAttribute("checked") + " within the deleteToDo function");
    //   // if(toDos[toDo].firstChild.checked === true){
    //   //   toDos[toDo] = '';
    //   // }
    // });

  }

  function renderTheUI(toDos){
    console.log('hello from renderTheUI: ' + toDos);
    var todoList = document.getElementById('toDoList');

    toDoList.innerHTML = '';

    toDos.forEach(function(toDo) {
      var newLi = document.createElement('li');
      newLi.setAttribute("class", "li1")
      var checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.innerHTML = toDo.title;

      todoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }


  addToDoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    createNewToDo();
  });

  //create the Delete button even listener
  deleteButton.onclick = (function(event) {
    event.preventDefault();
    console.log('hello from Delete listener' + toDos);
    deleteToDo(toDos);
    //renderTheUI(toDos);
    //createNewToDo();
  });

  renderTheUI(toDos);

}




window.onload = function() {
  onReady();
};
