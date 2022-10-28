

window.addEventListener("load", ()=>{
    
    const formulario = document.querySelector("#nueva-tarea-formulario");
    const input = document.querySelector("#nueva-tarea-formulario-ingreso");
    const lista__elementos = document.querySelector("#tareas");

    formulario.addEventListener("submit", (e) =>{
        
        e.preventDefault();
        console.log("Tarea subida");
        const task = input.value;

        if(!task){
            alert("Ingresa un elemento a la lista, por favor");
            return;
        }else{
            console.log("Tarea subida con éxito");
        }

        const task__el = document.createElement("div");
        task__el.classList.add("tarea");


        const task__content__el = document.createElement("div");
        task__content__el.classList.add("contenido");
        //task__content__el.innerText = task;

        task__el.appendChild(task__content__el);

        const task__input__el = document.createElement("input");
        task__input__el.classList.add("texto");
        task__input__el.type = "textarea";
        task__input__el.value = task;
        task__input__el.setAttribute("readonly", "readonly");

        task__content__el.appendChild(task__input__el);

        const task__actions__el = document.createElement("div");
        task__actions__el.classList.add("accion");

        const task__edit__el = document.createElement("button");
        task__edit__el.classList.add("editar");
        task__edit__el.innerHTML = "Editar";

        const task__delete__el = document.createElement("button");
        task__delete__el.classList.add("eliminar");
        task__delete__el.innerHTML = "Eliminar";

        task__actions__el.appendChild(task__edit__el);
        task__actions__el.appendChild(task__delete__el);

        task__el.appendChild(task__actions__el);

        lista__elementos.appendChild(task__el); 

        input.value = "";

        task__edit__el.addEventListener("click", ()=>{
            if (task__edit__el.innerHTML == "Editar") {
            task__input__el.removeAttribute("readonly");
            task__input__el.focus();
            task__edit__el.innerText="Guardar";
            } else{
                task__input__el.setAttribute("readonly", "readonly");
                task__edit__el.innerText="Editar";
            }
        })

        task__delete__el.addEventListener("click", () =>{
            console.log("Tarea eliminada");
            lista__elementos.removeChild(task__el);
        })
    })
})


