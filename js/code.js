/*Cambio Dark-Light mode*/
const btnDarkLight = document.querySelector("#Light-dark-mode");
let x = 0;

    btnDarkLight.addEventListener("click", function (){
        document.body.classList.toggle("light");
        
        if(x == 0){
            btnDarkLight.src= "images/icon-moon.svg";
            x = 1;
        }else{
            btnDarkLight.src= "images/icon-sun.svg";
            x = 0;
        }
});

/*Añadir tareas a la lista*/

/*Variables*/
const inputTask = document.querySelector(".input-Task");
const TaskContainer = document.querySelector(".Task-container");
const TaskAdded = document.querySelector(".Task-added");

/*Actualiza el número de tareas restantes*/
const ItemsLeft = document.querySelector(".n-items");
ItemsLeft.textContent = printElements();

const filterTask = document.querySelectorAll(".Filter")[0];
const filterTaskMobile = document.querySelectorAll(".Filter")[1];
const btnClear = document.querySelector(".Clear");

/*Eventos*/

inputTask.addEventListener("keyup", addTask);
TaskContainer.addEventListener("click", interactiveTask);
filterTask.addEventListener("click", filterMyTask);
filterTaskMobile.addEventListener("click", filterMyTaskMobile);
btnClear.addEventListener("click", clearItems);


/*Funciones*/

function addTask (e){

    if(e.keyCode === 13){

        /*Prevención de que se envie el formulario y se refresque la página*/
        e.preventDefault();
        
        if(inputTask.value != ""){
            
            /*Creación del DIV*/
            const TaskAdded = document.createElement("div");
            TaskAdded.classList.add("Task-added", "col-12", "color", "border-botom", "p-3", "d-flex", "align-items-center");
            TaskContainer.appendChild(TaskAdded);

            /*Creacion del Label*/
            const TaskLabel = document.createElement("label");
            TaskLabel.classList.add("col-12", "d-flex", "justify-content-between", "p-0", "m-0");
            TaskAdded.appendChild(TaskLabel);

            /*Creacion del checkbox*/
            const InputCheckbox = document.createElement("input");
            InputCheckbox.type= ("checkbox");
            TaskLabel.appendChild(InputCheckbox);

            /*Creacion del parrafo*/
            const TaskParrafo = document.createElement("h5");
            TaskParrafo.classList.add("col-9", "col-lg-10", "p-0", "my-auto", "mr-4");
            TaskParrafo.textContent = inputTask.value;
            TaskLabel.appendChild(TaskParrafo);
            inputTask.value = "";

            /*Creacion del cross*/
            const boxCross = document.createElement("div");
            boxCross.classList.add("cross");
            TaskLabel.appendChild(boxCross);

            ItemsLeft.textContent = printElements();
        } 
    }
}

function interactiveTask (e){

    /*Elimina el card al dar click a la equis*/
    if(e.target.classList.contains("cross")){

        e.target.parentElement.parentElement.remove();
        ItemsLeft.textContent = printElements();
    }
    
    /*añade clase completado a TaskAdded cuando este chequeada*/
    if(e.target.checked == true){
        e.target.parentElement.parentElement.classList.add("completed");
        ItemsLeft.textContent = printElements();
   
    }else{
        e.target.parentElement.parentElement.classList.remove("completed");
        ItemsLeft.textContent = printElements();
    }
}

function printElements(){

    const tasks = Array.from(TaskContainer.children);

    let ToDoCompleted = tasks.filter(function (taskCard){
        if(!taskCard.classList.contains("completed")){
            return taskCard;
        }        
    });

    return ToDoCompleted.length;

}

function filterMyTask (e){

    const task = Array.from(TaskContainer.children);

    task.forEach(function(taskCard){

        

        if(e.target.id == "all"){
            taskCard.classList.add("d-flex");
            
            console.log("PRESIONASTE # 1");
            
            e.target.classList.add("Blue");
            e.target.nextElementSibling.classList.remove("Blue");
            e.target.nextElementSibling.nextElementSibling.classList.remove("Blue");

        }else if(e.target.id == "active"){

            console.log("PRESIONASTE # 2");

            if(taskCard.classList.contains("completed")){
            taskCard.classList.remove("d-flex");
            taskCard.classList.add("d-none");
            
            }else{
                taskCard.classList.add("d-flex");
                taskCard.classList.remove("d-none");
            }

            e.target.classList.add("Blue");
            e.target.nextElementSibling.classList.remove("Blue");
            e.target.previousElementSibling.classList.remove("Blue");

        }else if(e.target.id == "completed"){

            console.log("PRESIONASTE # 3");

                if(taskCard.classList.contains("completed")){
                    taskCard.classList.add("d-flex");
                    taskCard.classList.remove("d-none");
                
                }else{
                    taskCard.classList.add("d-none");
                    taskCard.classList.remove("d-flex");
                }

            e.target.classList.add("Blue");
            e.target.previousElementSibling.classList.remove("Blue");
            e.target.previousElementSibling.previousElementSibling.classList.remove("Blue");

        }
    })   
}

function filterMyTaskMobile (e){

    const task = Array.from(TaskContainer.children);

    task.forEach(function(taskCard){

        

        if(e.target.id == "all"){
            taskCard.classList.add("d-flex");
            
            console.log("PRESIONASTE # 1");
            
            e.target.classList.add("Blue");
            e.target.nextElementSibling.classList.remove("Blue");
            e.target.nextElementSibling.nextElementSibling.classList.remove("Blue");

        }else if(e.target.id == "active"){

            console.log("PRESIONASTE # 2");

            if(taskCard.classList.contains("completed")){
            taskCard.classList.remove("d-flex");
            taskCard.classList.add("d-none");
            
            }else{
                taskCard.classList.add("d-flex");
                taskCard.classList.remove("d-none");
            }

            e.target.classList.add("Blue");
            e.target.nextElementSibling.classList.remove("Blue");
            e.target.previousElementSibling.classList.remove("Blue");

        }else if(e.target.id == "completed"){

            console.log("PRESIONASTE # 3");

                if(taskCard.classList.contains("completed")){
                    taskCard.classList.add("d-flex");
                    taskCard.classList.remove("d-none");
                
                }else{
                    taskCard.classList.add("d-none");
                    taskCard.classList.remove("d-flex");
                }

            e.target.classList.add("Blue");
            e.target.previousElementSibling.classList.remove("Blue");
            e.target.previousElementSibling.previousElementSibling.classList.remove("Blue");

        }
    })   
}

function clearItems (e){

    const tasks = Array.from(TaskContainer.children);

    let arrayCompleted = tasks.filter(function (taskCard){
        if(taskCard.classList.contains("completed")){
            return taskCard;
        }        
    });

    arrayCompleted.forEach(function(element, i){
        arrayCompleted[i].remove();
    });

}