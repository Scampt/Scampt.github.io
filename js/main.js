// ANIMACIÓN TYPE WRITE
let escribir = new Typed(".auto-texto", {
    strings: ["I'm Luis K. Quiroz Pacheco", "I'm a Web Developer", "I'm a UI Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

// COMPROBAR FORMULARIO

let formulario = document.getElementById("formulario"),
nombre = formulario.nombre,
correo = formulario.correo,
error = document.getElementById("error");
exito = document.getElementById("exito");


function validarFormulario(e)
{
    e.preventDefault();

    if (nombre.value !== "" && correo.value !=="") 
    {
        exito.style.display = "block"
        setTimeout(() => {
            window.location.href = "index.html" + "?nombre=" + nombre.value + "&correo=" + correo.value;
        }, 1000);
    }
    else 
    {
    if (correo.value == "") 
    {
        error.style.display = "block"
        const li = document.createElement("li");
        li.textContent = "Completa el correo";
        li.id = "errorCorreo";

        const getError = document.getElementById("errorCorreo");
        if (getError !== null) 
        {
            getError.remove();
        }
        
        error.appendChild(li);
    }

    if (nombre.value == "") 
    {
        error.style.display = "block"
        const li = document.createElement("li");
        li.textContent = "Completa el nombre";
        li.id = "errorNombre";

        const getError = document.getElementById("errorNombre");
        if (getError !== null) 
        {
            getError.remove();
        }
        
        error.appendChild(li);
    }
    }
}


formulario.addEventListener("submit", validarFormulario);