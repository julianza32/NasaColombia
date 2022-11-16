var alturaPantalla = screen.height;


var contenedorSlider = document.getElementById("contenedor-padre");
var contenedordescripcionP = document.getElementById("contenedor-descripcionP");
var calculoPantalla = alturaPantalla * 0.20;
if (screen.width > 768) {
    contenedorSlider.style.height = alturaPantalla + "px";


} else {
    contenedorSlider.style.height = "auto";
    contenedorSlider.style.marginTop = "170px";
}
function ayuda(){
    Swal.fire(
        'Ayuda?',
        'Comunicate al numero xxx-xxx-xxx para más información',
        'question'
      )
} 
