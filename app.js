function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  console.log("got yupp");
  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    //creat new li
    let newLi = document.createElement('li');

    //create a new input for the checkbox
    let checkbox = document.createElement('input');

    //set the input's type to checkbox
    checkbox.type = "checkbox";
    checkbox.setAttribute("id", "checkBox1");
    checkbox.setAttribute("checked", "true");



    //set the title
    newLi.textContent = title;
    newLi.setAttribute("class", "li1");

    // attach it to the ul
    toDoList.appendChild(newLi);

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //empty the input
    newToDoText.value = '';


    checkbox.addEventListener( 'change', function() {
        if(this.checked) {
            this.setAttribute('checked', true);
        } else {
            this.setAttribute('checked', false);
        }
    });

  });



  document.getElementById("deleteTask").onclick = function(event) {
  //addToDoForm.addEventListener('button', (event) => {

    event.preventDefault();
    console.log("got li");
     let holder = document.getElementsByClassName("li1");
    let checkAttribute = holder[0].firstElementChild.getAttribute("checked");
    //console.log(holder[0].firstElementChild.getAttribute("checked"));

    for(let i = 0; i < holder.length; i++){
      if(checkAttribute === "true"){
        holder[i].parentNode.removeChild(holder[i]);
        //console.log("working if case");
      }
      else{console.log("for loop else")};

    }


}

}

window.onload = function() {
  onReady();
};
