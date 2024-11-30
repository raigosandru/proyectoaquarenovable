 // Seleccionar elementos y asociarles un evento
 //const boton-enviar = document.querySelector ('boton-enviar');
 //boton-enviar-addEventListener ('click, function(evento){
        //console.log(evento);
        //evento.preventDefault();
// });
 


// Eventos de los Inputs y Textarea

const datos = {
    nombre:'',
    email:'',
    telefono:'',
    mensaje:'',
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const telefono = document.querySelector('#telefono');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');
// Evento de Submit
 
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    //Validar el Formulario //destructuring tecnica  que permite extraer valores de un objeto o un arreglo y asignarlos a variables de forma clara y concisa.

    const { nombre, email, telefono, mensaje  } = datos;

    if (nombre==='' || email ==='' || telefono ===''|| mensaje==='') {
       mostrarAlerta ('¡¡Todos los campos son obligatorios!!', true);
        //mostrarError('¡¡Todos los campos son obligatorios!!');

        return; // Corta la ejecucion del codigo
    }

    // Crear alerta de enviado correctamente
    mostrarAlerta('Mensaje enviado correcta')
    //mostrarMensaje('Mensaje enviado correctamente')
        


});

nombre.addEventListener('input', leerTexto)
email.addEventListener('input', leerTexto)
telefono.addEventListener('input', leerTexto)
mensaje.addEventListener('input', leerTexto);

function leerTexto (e) {
    //console.log(e.target.value)

    datos[e.target.id] = e.target.value

    //console.log(datos);

}

function mostrarAlerta (mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    //Desaparezca en 4 segundos
      setTimeout(() => {
        alerta.remove();
    }, 4000);
}
//Muestra una Alerta de que se envio correctamente 
// Codigo Inicial 
//function mostrarMensaje (mensaje) {
    /*const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');

    formulario.appendChild(alerta);

  
}*/

/*Muestra un error en pantalla
function mostrarError (mensaje) {
    const error = document.createElement ('P');
    error.textContent = mensaje;
    error.classList.add('error')

    formulario.appendChild(error);
    
    //Desaparezca despues de 4 segundos
    setTimeout(() => {
        error.remove()
    }, 4000);

}*/

 



