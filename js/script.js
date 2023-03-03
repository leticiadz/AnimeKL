const generoSelect = document.getElementById("genero");
const fechaSelect = document.getElementById("fecha");
const emisionSelect = document.getElementById("emision");
const imagenes = document.querySelectorAll(".imagen");

generoSelect.addEventListener("change", filtrarImagenes);
fechaSelect.addEventListener("change", filtrarImagenes);
emisionSelect.addEventListener("change",filtrarImagenes);
var x= window.location.search;

function Accion(){
  if(x != null){
    var urlparaments = new URLSearchParams(x)
    const genero  =urlparaments.get("categoria");
    
    for (let index = 0; index < generoSelect.options.length; index++) {
      var cate = generoSelect.options[index]
      console.log(cate.value.toLowerCase() )
      console.log(genero.toLowerCase())
      console.log(index)
      
      console.log(genero.toLowerCase() === cate.value.toLowerCase())
      if(genero.toLowerCase() === cate.value.toLowerCase()) {
        generoSelect.options.selectedIndex=index
        filtrarImagenes()
      }
    }
    
    }
}
Accion()

function emision(){
  if(x != null){
    var urlparaments = new URLSearchParams(x)
    const emision  =urlparaments.get("categoria1");
    
    for (let index = 0; index < emisionSelect.options.length; index++) {
      var cate = emisionSelect.options[index]
      console.log(cate.value.toLowerCase() )
      console.log(genero.toLowerCase())
      console.log(index)
      
      console.log(genero.toLowerCase() === cate.value.toLowerCase())
      if(emision.toLowerCase() === cate.value.toLowerCase()) {
        emisionSelect.options.selectedIndex=index
        filtrarImagenes()
      }
    }
    
    }
}

function filtrarImagenes(){
    const genero = generoSelect.value;
    const fecha = fechaSelect.value;
    const emision = emisionSelect.value;

    for (let i = 0; i < imagenes.length; i++) {
        const imagen = imagenes[i];
        const imagenGenero = imagen.classList.contains(genero) || genero === "todos";
        const imagenFecha = imagen.getAttribute("data-fecha") === fecha || fecha === "todos";
        const imagenemision= imagen.getAttribute("data-emision")=== emision || emision === "todos";
        
        if (imagenGenero && imagenFecha && imagenemision) {
          imagen.removeAttribute("hidden");
        } else {
          imagen.setAttribute("hidden", true);
        }
      }
}