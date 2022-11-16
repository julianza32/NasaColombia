/*Cracion de los campos que se usaran dependiendo la forma*/
var labelLargo = document.createElement("label");
labelLargo.setAttribute("class", "labelLargo");
labelLargo.setAttribute("id", "labelLargo");



var labelAncho = document.createElement("label");
labelAncho.setAttribute("class", "labelAncho");
labelAncho.setAttribute("id", "labelAncho");

var labelAncho2 = document.createElement("label");
labelAncho2.setAttribute("class", "labelAncho2");
labelAncho2.setAttribute("id", "labelAncho2");

var labelProfundo = document.createElement("label");
labelProfundo.setAttribute("class", "labelProfundo");
labelProfundo.setAttribute("id", "labelProfundo");

var txtLargo = document.createElement("input");
txtLargo.setAttribute("id", "txtLargo");
txtLargo.setAttribute("class", "form-control ");
txtLargo.setAttribute("type", "number");
txtLargo.setAttribute("placeholder","Medidas en mts");
txtLargo.setAttribute("step","any");
txtLargo.setAttribute("required","required");

var txtAncho = document.createElement("input");
txtAncho.setAttribute("id", "txtAncho");
txtAncho.setAttribute("class", "form-control");
txtAncho.setAttribute("type", "number");
txtAncho.setAttribute("placeholder","Medidas en mts");
txtLargo.setAttribute("step","any");
txtAncho.setAttribute("required","required");
var txtAncho2 = document.createElement("input");
txtAncho2.setAttribute("id", "txtAncho2");
txtAncho2.setAttribute("class", "form-control");
txtAncho2.setAttribute("type", "number");
txtAncho2.setAttribute("step","any");
txtAncho2.setAttribute("placeholder","Medidas en mts");
txtAncho2.setAttribute("required","required");
var txtProfundo = document.createElement("input");
txtProfundo.setAttribute("id", "txtProfundo");
txtProfundo.setAttribute("class", "form-control");
txtProfundo.setAttribute("type", "number");
txtProfundo.setAttribute("placeholder","Medidas en mts");
txtProfundo.setAttribute("step","any");
txtProfundo.setAttribute("required","required");
var imagen = document.createElement("img");
imagen.setAttribute("class", "imagenMedidas");


var contenedorImg = document.getElementById("contenedorImagenMedidas");
var contenedorEntra = document.getElementById("entradasMedidas");

var contenedorLargo = document.createElement("div");
contenedorLargo.classList.add("form-group");
contenedorLargo.style.margin = "10px 0";
contenedorLargo.classList.add("contenedorMedidas");
// contenedorLargo.style.flexWrap = "wrap";
// contenedorLargo.style.flexDirection = "row";

var contenedorAncho = document.createElement("div");
contenedorAncho.classList.add("form-group");
contenedorAncho.style.margin = "10px 0";
contenedorAncho.classList.add("contenedorMedidas");
// contenedorAncho.style.flexWrap = "wrap";
// contenedorAncho.style.flexDirection = "row";

var contenedorAncho2 = document.createElement("div");
contenedorAncho2.classList.add("form-group");
contenedorAncho2.style.margin = "10px 0";
contenedorAncho2.classList.add("contenedorMedidas");
// contenedorAncho2.style.flexWrap = "wrap";
// contenedorAncho2.style.flexDirection = "row";

var contenedorProfundo = document.createElement("div");
contenedorProfundo.classList.add("form-group");
contenedorProfundo.style.margin = "10px 0";
contenedorProfundo.classList.add("contenedorMedidas");
// contenedorProfundo.style.flexWrap = "wrap";
// contenedorProfundo.style.flexDirection = "row";



// document.getElementById("forma-rectangular").addEventListener("click", rectangular);
// document.getElementById("forma-circular").addEventListener("click", circular);



function rectangular() {
    // i.target.removeEventListener(i.type, rectangular);

    if (document.querySelector('#contenedorImagenMedidas').childElementCount < 1) {

        imagen.setAttribute("src", "Images/RectangularMedidas.jpg");
        imagen.setAttribute("width", "300px");
        imagen.style.margin = "20px 0";
        contenedorImg.appendChild(imagen);



        labelLargo.innerHTML = "Largo en mts";
        // labelLargo.classList.add("input-group-text");
        // labelLargo.style.width = "auto";
        contenedorLargo.appendChild(labelLargo);

        txtLargo.classList.add("txtLargo");
        contenedorLargo.appendChild(txtLargo);
        contenedorEntra.appendChild(contenedorLargo);


        labelAncho.innerHTML = "Ancho en mts"
        // labelAncho.classList.add("input-group-text");
        // labelAncho.style.width = "auto";
        contenedorAncho.appendChild(labelAncho);
        
        txtAncho.classList.add("txtAncho");
    
        contenedorAncho.appendChild(txtAncho);
        contenedorEntra.appendChild(contenedorAncho);


        labelProfundo.innerHTML = "Profundidad en mts"
        // labelProfundo.classList.add("input-group-text");
        contenedorProfundo.appendChild(labelProfundo);
        txtProfundo.classList.add("txtProfundo");
        contenedorProfundo.appendChild(txtProfundo);
        contenedorEntra.appendChild(contenedorProfundo);
        contenedorEntra.style.paddingBottom="15px";
    } else {

        imagen.setAttribute("src", "Images/RectangularMedidas.jpg");
        imagen.setAttribute("width", "300px");
        imagen.style.margin = "20px 0";
        contenedorImg.appendChild(imagen);


        labelLargo.innerHTML = "Largo en mts";
        // labelLargo.classList.add("input-group-text");
        contenedorLargo.appendChild(labelLargo);

        contenedorLargo.appendChild(txtLargo);
        contenedorEntra.appendChild(contenedorLargo);

        labelAncho.innerHTML = "Ancho en mts"
        // labelAncho.classList.add("input-group-text");
        contenedorAncho.appendChild(labelAncho);

        contenedorAncho.appendChild(txtAncho);
        contenedorEntra.appendChild(contenedorAncho);

        labelProfundo.innerHTML = "Profundidad en mts"
        // labelProfundo.classList.add("input-group-text");
        contenedorProfundo.appendChild(labelProfundo);

        contenedorProfundo.appendChild(txtProfundo);
        contenedorEntra.appendChild(contenedorProfundo);
        contenedorEntra.removeChild(contenedorAncho2);
        contenedorEntra.style.paddingBottom="15px";
    }
}

function circular() {
    // i.target.removeEventListener(i.type, circular);

    if (document.querySelector('#contenedorImagenMedidas').childElementCount < 1) {

        imagen.setAttribute("src", "Images/circularMedidas.jpg");
        imagen.setAttribute("width", "300px");
        imagen.style.margin = "20px 0";
        contenedorImg.appendChild(imagen);


        labelLargo.innerHTML = "Largo en mts";
        // labelLargo.classList.add("input-group-text");
        contenedorLargo.appendChild(labelLargo);

        contenedorLargo.appendChild(txtLargo);
        contenedorEntra.appendChild(contenedorLargo);

        labelProfundo.innerHTML = "Profundidad en mts"
        // labelProfundo.classList.add("input-group-text");
        contenedorProfundo.appendChild(labelProfundo);

        contenedorProfundo.appendChild(txtProfundo);
        contenedorEntra.appendChild(contenedorProfundo);

        contenedorEntra.style.paddingBottom="15px";
    } else {
        imagen.setAttribute("src", "Images/circularMedidas.jpg");
        imagen.setAttribute("width", "300px");
        imagen.style.margin = "20px 0";
        contenedorImg.appendChild(imagen);

        labelLargo.innerHTML = "Largo en mts";
        // labelLargo.classList.add("input-group-text");
        contenedorLargo.appendChild(labelLargo);

        contenedorLargo.appendChild(txtLargo);
        contenedorEntra.appendChild(contenedorLargo);

        labelProfundo.innerHTML = "Profundidad en mts"
        // labelProfundo.classList.add("input-group-text");
        contenedorProfundo.appendChild(labelProfundo);

        contenedorProfundo.appendChild(txtProfundo);
        contenedorEntra.appendChild(contenedorProfundo);

        contenedorEntra.removeChild(contenedorAncho);
        contenedorEntra.removeChild(contenedorAncho2);


        contenedorEntra.style.paddingBottom="15px";

    }
}

function rinon() {
    // i.target.removeEventListener(i.type, circular);

    if (document.querySelector('#contenedorImagenMedidas').childElementCount < 1) {

        imagen.setAttribute("src", "Images/rinoMedidas.jpg");
        imagen.setAttribute("width", "300px");
        imagen.style.margin = "20px 0";
        contenedorImg.appendChild(imagen);


        labelLargo.innerHTML = "Largo en mts";
        // labelLargo.classList.add("input-group-text");
        contenedorLargo.appendChild(labelLargo);

        contenedorLargo.appendChild(txtLargo);
        contenedorEntra.appendChild(contenedorLargo);

        labelAncho.innerHTML = "Ancho 1 en mts";
        // labelAncho.classList.add("input-group-text");
        contenedorAncho.appendChild(labelAncho);

        contenedorAncho.appendChild(txtAncho);
        contenedorEntra.appendChild(contenedorAncho)

        labelAncho2.innerHTML = "Ancho 2 en mts";
        // labelAncho2.classList.add("input-group-text");
        contenedorAncho2.appendChild(labelAncho2);

        contenedorAncho2.appendChild(txtAncho2);
        contenedorEntra.appendChild(contenedorAncho2);

        labelProfundo.innerHTML = "Profundidad en mts"
        // labelProfundo.classList.add("input-group-text");
        contenedorProfundo.appendChild(labelProfundo);

        contenedorProfundo.appendChild(txtProfundo);
        contenedorEntra.appendChild(contenedorProfundo);

        contenedorEntra.style.paddingBottom="15px";
    } else {
        imagen.setAttribute("src", "Images/rinoMedidas.jpg");
        imagen.setAttribute("width", "300px");
        imagen.style.margin = "20px 0";
        contenedorImg.appendChild(imagen);


        labelLargo.innerHTML = "Largo en mts";
        // labelLargo.classList.add("input-group-text");
        contenedorLargo.appendChild(labelLargo);

        contenedorLargo.appendChild(txtLargo);
        contenedorEntra.appendChild(contenedorLargo);

        labelAncho.innerHTML = "Ancho 1 en mts";
        // labelAncho.classList.add("input-group-text");
        contenedorAncho.appendChild(labelAncho);

        contenedorAncho.appendChild(txtAncho);
        contenedorEntra.appendChild(contenedorAncho)

        labelAncho2.innerHTML = "Ancho 2 en mts";
        // labelAncho2.classList.add("input-group-text");
        contenedorAncho2.appendChild(labelAncho2);

        contenedorAncho2.appendChild(txtAncho2);
        contenedorEntra.appendChild(contenedorAncho2);

        labelProfundo.innerHTML = "Profundidad en mts"
        contenedorProfundo.appendChild(labelProfundo);

        contenedorProfundo.appendChild(txtProfundo);
        contenedorEntra.appendChild(contenedorProfundo);

        contenedorEntra.style.paddingBottom="15px";
    }
}

function cuadrada() {

    if (document.querySelector('#contenedorImagenMedidas').childElementCount < 1) {

        imagen.setAttribute("src", "Images/cuadradoMedidas.jpg");
        imagen.setAttribute("width", "300px");
        imagen.style.margin = "20px 0";
        contenedorImg.appendChild(imagen);



        labelLargo.innerHTML = "Largo en mts";
        // labelLargo.classList.add("input-group-text");
        labelLargo.style.width = "auto";
        contenedorLargo.appendChild(labelLargo);

        txtLargo.classList.add("txtLargo");
        
        contenedorLargo.appendChild(txtLargo);
        contenedorEntra.appendChild(contenedorLargo);


        labelAncho.innerHTML = "Ancho en mts"
        // labelAncho.classList.add("input-group-text");
        
        contenedorAncho.appendChild(labelAncho);
        txtAncho.classList.add("txtAncho");
        
        contenedorAncho.appendChild(txtAncho);
        contenedorEntra.appendChild(contenedorAncho);


        labelProfundo.innerHTML = "Profundidad en mts"
        // labelProfundo.classList.add("input-group-text");
        contenedorProfundo.appendChild(labelProfundo);
        txtProfundo.classList.add("txtProfundo");
        contenedorProfundo.appendChild(txtProfundo);
        contenedorEntra.appendChild(contenedorProfundo);
        contenedorEntra.style.paddingBottom="15px";
    } else {

        imagen.setAttribute("src", "Images/cuadradoMedidas.jpg");
        imagen.setAttribute("width", "300px");
        imagen.style.margin = "20px 0";
        contenedorImg.appendChild(imagen);


        labelLargo.innerHTML = "Largo en mts";
        // labelLargo.classList.add("input-group-text");
        contenedorLargo.appendChild(labelLargo);

        contenedorLargo.appendChild(txtLargo);
        contenedorEntra.appendChild(contenedorLargo);

        labelAncho.innerHTML = "Ancho en mts"
        // labelAncho.classList.add("input-group-text");
        contenedorAncho.appendChild(labelAncho);

        contenedorAncho.appendChild(txtAncho);
        contenedorEntra.appendChild(contenedorAncho);

        labelProfundo.innerHTML = "Profundidad en mts"
        // labelProfundo.classList.add("input-group-text");
        contenedorProfundo.appendChild(labelProfundo);

        contenedorProfundo.appendChild(txtProfundo);
        contenedorEntra.appendChild(contenedorProfundo);
        contenedorEntra.removeChild(contenedorAncho2);
        contenedorEntra.style.paddingBottom="15px";
    }
}