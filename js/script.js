// Creacion de variables para guardar la informacion del select del html de bilbioteca

const generoSelect = document.getElementById("genero");
const fechaSelect = document.getElementById("fecha");
const emisionSelect = document.getElementById("emision");
const imagenes = document.querySelectorAll(".imagen");

// ejecuta la funcion de filtrado cuando hay un cambio en el select de bilioteca
generoSelect.addEventListener("change", filtrarImagenes);
fechaSelect.addEventListener("change", filtrarImagenes);
emisionSelect.addEventListener("change", filtrarImagenes);

//Desde la linea  se utiliza para mandar a llamar un variable
var x = window.location.search;
//-----------------------------------------------------------------

// funcion para hacer funcionar el menu de hamburguesa
function Accion() {
  if (x != null) {
    var urlparaments = new URLSearchParams(x);
    const genero = urlparaments.get("categoria");

    for (let index = 0; index < generoSelect.options.length; index++) {
      var cate = generoSelect.options[index];

      if (genero.toLowerCase() === cate.value.toLowerCase()) {
        generoSelect.options.selectedIndex = index;
        filtrarImagenes();
      }
    }
  }
}
Accion();

// funcion para hacer funcionar el Filtro de Anime por medio del Select
function filtrarImagenes() {
  const genero = generoSelect.value;
  const fecha = fechaSelect.value;
  const emision = emisionSelect.value;

  for (let i = 0; i < imagenes.length; i++) {
    const imagen = imagenes[i];
    const imagenGenero =
      imagen.classList.contains(genero) || genero === "todos";
    const imagenFecha =
      imagen.getAttribute("data-fecha") === fecha || fecha === "todos";
    const imagenemision =
      imagen.getAttribute("data-emision") === emision || emision === "todos";

    if (imagenGenero && imagenFecha && imagenemision) {
      imagen.removeAttribute("hidden");
    } else {
      imagen.setAttribute("hidden", true);
    }
  }
}
