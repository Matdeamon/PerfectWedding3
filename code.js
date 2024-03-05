// Obtener el formulario por su id
var formulario = document.getElementById("formulario");

// Agregar un evento de submit al formulario
formulario.addEventListener("submit", function(event) {
  // Prevenir el comportamiento por defecto del formulario
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  var nombre = formulario.nombre.value;
  var email = formulario.email.value;
  var asistencia = formulario.asistencia.value;

  // Crear un objeto con los datos del formulario
  var datos = {
    data: [
      {
        nombre: nombre,
        email: email,
        asistencia: asistencia
      }
    ]
  };

  // Enviar los datos a la hoja de googlesheets usando la URL de la API de SheetDB
  // Reemplaza la URL con la tuya
  fetch("https://sheetdb.io/api/v1/xxxxxxxxxxxx", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(datos)
  })
    .then(function(response) {
      // Mostrar un mensaje de éxito o error según el resultado
      if (response.ok) {
        alert("Gracias por confirmar tu asistencia");
      } else {
        alert("Ocurrió un error al enviar el formulario");
      }
    })
    .catch(function(error) {
      // Mostrar un mensaje de error si hay algún problema de conexión
      alert("Ocurrió un error de conexión");
    });
});
