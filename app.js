function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
   const newToDoText = document.getElementById('newToDoText');
   const toDoList = document.getElementById('toDoList');



   addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();


      // get the text
      let title = newToDoText.value;

      // create a new li
      let newLi = document.createElement('li');

      // create a new input for the checkbox
      let checkbox = document.createElement('input');

      // set the input's type to checkbox
      checkbox.type = "checkbox";

      let deleteInput = document.createElement('input');
      deleteInput.type = "button";
      deleteInput.value = "Delete To-Do!";
      deleteInput.id = "delete1";


      // set the title
      newLi.textContent = title;

      // attach it to the ul
      toDoList.appendChild(newLi);

      // attach the checkbox to the li
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteInput);

       //empty the input
      newToDoText.value = '';


      deleteInput.addEventListener('click', (event) => {
      event.preventDefault;
      deleteInput.parentElement.parentElement.removeChild(newLi);

    });

  });

}



window.onload = function() {

  onReady();
};
