function onReady() {
  var toDos = [];
  var addToDoForm = document.getElementById('addToDoForm');


  function createNewToDo(){
    var newToDoText = document.getElementById('newToDoText');

    toDos.push({
      title: newToDoText.value,
      complete: false
    });

    newToDoText.value = '';

    renderTheUI(toDos);
  }

    function deleteToDo(deleteTitle){
      toDos.forEach(function(toDo) {
        if(toDo.title === deleteTitle){
          toDos.splice(toDos.indexOf(toDo), 1);
        }

      });

      renderTheUI(toDos);
    }


  function renderTheUI(toDos){

    var todoList = document.getElementById('toDoList');

    toDoList.innerHTML = '';

    toDos.forEach(function(toDo) {
      var newLi = document.createElement('li');


      var checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      var deleteButton = document.createElement('input');
      deleteButton.type = "button";
      deleteButton.value = "Delete To-Do!";
      deleteButton.setAttribute("id", toDo.title);

      newLi.innerHTML = toDo.title;

      todoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);





      //create the Delete button even listener
      deleteButton.onclick = (function(event) {
        let deleteTitle = this.getAttribute("id");
        deleteToDo(deleteTitle);
      });

    });
  }


  addToDoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    createNewToDo();

  });


  renderTheUI(toDos);

}




window.onload = function() {
  onReady();
};
