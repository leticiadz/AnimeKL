//Desde la linea 2 a la 6  se utiliza para mandar a llamar un variable
var url_actual = window.location.href;

var url_parametros= new URLSearchParams(window.location.search);
var id=url_parametros.get("id");

//Creacion de Variables para Guardar la Info
var Titulo =document.getElementById("titulo");
var descripcion =document.getElementById("descripcion");
var tipo=document.getElementById("tipo");
var genero=document.getElementById("genero");
var studio=document.getElementById("estudio");
var demografia=document.getElementById("demografia");
var idiomas=document.getElementById("idioma");
var episodios=document.getElementById("episodios");
var duracion=document.getElementById("duracion");
var emitido=document.getElementById("emitido");
var estado=document.getElementById("estado");

//If para saber que tipo de anime vas a ver 
if(id=="datealive"){
    Titulo.innerHTML="Date a Live";
    descripcion.innerHTML="Hace algunos años, un extraño fenómeno denominado sismo espacial comenzó a azotar parte de Eurasia, causando la muerte de millones de personas. Estos sismos comenzaron a hacerse más frecuentes, y un día, Shido Itsuka, un estudiante aparentemente normal, se encuentra con una particular chica.";
    tipo.innerHTML="Serie";
    genero.innerHTML="Accion y YA";
    studio.innerHTML="Tu Madre";
    demografia.innerHTML="tambien Tu madre";
    idiomas.innerHTML="Japones y Español";
    episodios.innerHTML="270 Capitulos";
    duracion.innerHTML="Desconocido";
    emitido.innerHTML="2019";
    estado.innerHTML="Finalizado";

    
}
else if (id="another") {
    Titulo.innerHTML="Another";
    descripcion.innerHTML="un chico de 15 años llamado Koichi Sakakibara es trasladado a esa misma clase, ahí conoce a Mei Misaki, una chica bastante rara a la que tanto sus profesores como compañeros de clase ignoran. Inesperadamente una serie de asesinatos causa la desesperación entre los alumnos de la clase 3-3.";
    tipo.innerHTML="Serie";
    genero.innerHTML="Sobrenatural"
    studio.innerHTML="Tu Madre";
    demografia.innerHTML="tambien Tu madre";
    idiomas.innerHTML="Japones y Español E Ingles";
    episodios.innerHTML="260 Capitulos";
    duracion.innerHTML="Desconocido";
    emitido.innerHTML="2020";
    estado.innerHTML="Emision";
} else {
    
}


   

















