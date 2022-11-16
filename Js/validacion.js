function crearlabel() {
    var cbxCiudad = document.getElementById('ciudad');
    var otraCiudad = document.getElementById('otraCiudad');

    if (cbxCiudad.value == "Otro") {
        otraCiudad.style.display = "block";
    }
    if (cbxCiudad.value != "Otro") {
        otraCiudad.style.display = "none"
    }

}
function calculoMtsC() {

    var cbxCubierta = document.getElementById('cubierta').checked;
    var cbxDescubierta = document.getElementById('descubierta').checked;
    var cbxFormPisRectan = document.getElementById('forma-rectangular').checked;
    var cbxFormPisCir = document.getElementById('forma-circular').checked;
    var cbxFormPisRinon = document.getElementById('forma-rinon').checked;
    var cbxFormPisCuadra = document.getElementById('forma-cuadrada').checked;
    var txtNombre = document.getElementById('Nombres').value;
    var txtCelular = document.getElementById('Celular').value;
    var cbxCiudad = document.getElementById('ciudad').value;

    if (cbxCiudad == "Otro") {
        var cbxCiudad = document.getElementById('otraCiudad').value;
    }

    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
      })    

    if (cbxCubierta == true) {
        valorMts2 = 480000;
        if (cbxFormPisRectan == true) {
            var txtLargoV = Number(document.getElementById('txtLargo').value);
            var txtAnchoV = Number(document.getElementById('txtAncho').value);
            var txtProfundoV = Number(document.getElementById('txtProfundo').value);
            if (txtLargoV == 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!!',
                    text: 'ingrese un valor diferente de 0 en el campo Largo',
                  })
                return false;
            } else {
                if (txtAnchoV == 0) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!!',
                        text: 'ingrese un valor diferente de 0 en el campo Ancho',
                      })
                    return false;
                } else {
                    if (txtProfundoV == 0) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error!!',
                            text: 'ingrese un valor diferente de 0 en el campo Profundo',
                          })
                        return false;
                    }
                    mts2 = txtLargoV * txtAnchoV;
                    mts3 = txtLargoV * txtAnchoV * txtProfundoV;
                    mts2 = mts2.toFixed(2);
                    mts3 = mts3.toFixed(2);
                    valorDePiscina = mts2 * valorMts2;
                    mensaje = "Muchas gracias Estimado(a) " + txtNombre + " por visitar NASA de Colombia, el precio de la climatización de su piscina cubierta rectangular en la ciudad de: " + cbxCiudad + " es: " + formatterPeso.format(valorDePiscina) + " con medidas de Largo: " + txtLargoV + " metros, ancho: " + txtAnchoV + " metros y profundidad: " + txtProfundoV + " metros. El area de su pisicina es: " + mts2 + " Mts2 y el volumen es: " + mts3 + " Mts3, en el transcurso del día lo estará comunicando un de nustros asesores para mas información a su número: " + txtCelular;
                    Swal.fire({
                        title: "Muchas gracias!!",
                        text: "El valor aproximado de la climatización de tu pisicina es: " +  formatterPeso.format(valorDePiscina),
                        imageUrl: 'Images/volante.png',
                        imageWidth: 400,
                        imageHeight: 500,
                        imageAlt: 'Volante Promocional'
                    });
                    enviarEmail(mensaje);
                    return false;
                }
            }
        }
        if (cbxFormPisCir == true) {
            var txtLargoV = Number(document.getElementById('txtLargo').value);
            var txtProfundoV = Number(document.getElementById('txtProfundo').value);
            if (txtLargoV == 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!!',
                    text: 'ingrese un valor diferente de 0 en el campo Largo',
                  })
                return false;
            } else {
                if (txtProfundoV == 0) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!!',
                        text: 'ingrese un valor diferente de 0 en el campo Profundo',
                      })
                    return false;
                }
                pi = Math.PI;
                mts2 = txtLargoV / 2 * txtLargoV / 2 * pi;
                mts3 = mts2 * txtProfundoV;
                mts2 = mts2.toFixed(2);
                mts3 = mts3.toFixed(2);
                valorDePiscina = mts2 * valorMts2;
                valorDePiscina = valorDePiscina.toFixed(0);
                mensaje = "Muchas gracias Estimado(a) " + txtNombre + " por visitar NASA de Colombia, el precio de la climatización de su piscina cubierta circular en la ciudad de: " + cbxCiudad + " es: " + formatterPeso.format(valorDePiscina) + " con medidas de Largo: " + txtLargoV + " metros y profundidad: " + txtProfundoV + " metros. El area de su pisicina es: " + mts2 + " Mts2 y el volumen es: " + mts3 + " Mts3, en el transcurso del día lo estará comunicando un de nustros asesores para mas información a su número: " + txtCelular;
                Swal.fire({
                    title: "Muchas gracias!!",
                    text: "El valor aproximado de la climatización de tu pisicina es: " +  formatterPeso.format(valorDePiscina),
                    imageUrl: 'Images/volante.png',
                    imageWidth: 400,
                    imageHeight: 500,
                    imageAlt: 'Volante Promocional'
                });
                enviarEmail(mensaje);
                return false;

            }
        }
        if (cbxFormPisRinon == true) {
            var txtLargoV = Number(document.getElementById('txtLargo').value);
            var txtProfundoV = Number(document.getElementById('txtProfundo').value);
            var txtAncho2V = Number(document.getElementById("txtAncho2").value);
            var txtAnchoV = Number(document.getElementById("txtAncho").value);

            if (txtLargoV == 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!!',
                    text: 'ingrese un valor diferente de 0 en el campo Largo',
                  })
                return false;
            } else {
                if (txtAnchoV == 0) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!!',
                        text: 'ingrese un valor diferente de 0 en el campo Ancho 1',
                      })
                    return false;
                } else {
                    if (txtAncho2V == 0) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error!!',
                            text: 'ingrese un valor diferente de 0 en el campo Ancho 2',
                          })
                        return false;
                    }
                    else {
                        if (txtProfundoV == 0) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Error!!',
                                text: 'ingrese un valor diferente de 0 en el campo Profundo',
                              })
                            return false;
                        }
                        mts2 = (txtAnchoV + txtAncho2V) * (txtLargoV * 0.45);
                        mts3 = mts2 * txtProfundoV;
                        mts2 = mts2.toFixed(2);
                        mts3 = mts3.toFixed(2);
                        valorDePiscina = mts2 * valorMts2;
                        valorDePiscina = valorDePiscina.toFixed(0);
                        
                        mensaje = "Muchas gracias Estimado(a) " + txtNombre + " por visitar NASA de Colombia, el precio de la climatización de su piscina cubierta riñon en la ciudad de: " + cbxCiudad + " es: " +  formatterPeso.format(valorDePiscina)  + " con medidas de Largo: " + txtLargoV + " metros, ancho 1: " + txtAnchoV + " metros, ancho 2: "+ txtAncho2V +" metros y profundidad: " + txtProfundoV + " metros. El area de su pisicina es: " + mts2 + " Mts2 y el volumen es: " + mts3 + " Mts3, en el transcurso del día lo estará comunicando un de nustros asesores para mas información a su número: " + txtCelular;
                        Swal.fire({
                            title: "Muchas gracias!!",
                            text: "El valor aproximado de la climatización de tu pisicina es: " +  formatterPeso.format(valorDePiscina),
                            imageUrl: 'Images/volante.png',
                            imageWidth: 400,
                            imageHeight: 500,
                            imageAlt: 'Volante Promocional'
                        });
                        enviarEmail(mensaje);
                        return false;
                    }
                }
            }

        }
        if (cbxFormPisCuadra == true) {

            var txtLargoV = Number(document.getElementById('txtLargo').value);
            var txtAnchoV = Number(document.getElementById('txtAncho').value);
            var txtProfundoV = Number(document.getElementById('txtProfundo').value);
            if (txtLargoV == 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!!',
                    text: 'ingrese un valor diferente de 0 en el campo Largo',
                  })
                return false;
            } else {
                if (txtAnchoV == 0) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!!',
                        text: 'ingrese un valor diferente de 0 en el campo Ancho',
                      })
                    return false;
                } else {
                    if (txtProfundoV == 0) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error!!',
                            text: 'ingrese un valor diferente de 0 en el campo Profundo',
                          })
                        return false;
                    }
                    mts2 = txtLargoV * txtAnchoV;
                    mts3 = txtLargoV * txtAnchoV * txtProfundoV;
                    valorDePiscina = mts2 * valorMts2;
                    valorDePiscina = valorDePiscina.toFixed(0);
                    mts2 = mts2.toFixed(2);
                    mts3 = mts3.toFixed(2);
                    mensaje = "Muchas gracias Estimado(a) " + txtNombre + " por visitar NASA de Colombia, el precio de la climatización de su piscina cubierta cuadrada en la ciudad de: " + cbxCiudad + " es: " +  formatterPeso.format(valorDePiscina)  + " con medidas de Largo: " + txtLargoV + " metros, ancho: " + txtAnchoV + " metros y profundidad: " + txtProfundoV + " metros. El area de su pisicina es: " + mts2 + " Mts2 y el volumen es: " + mts3 + " Mts3, en el transcurso del día lo estará comunicando un de nustros asesores para mas información a su número: " + txtCelular;
                    Swal.fire({
                        title: "Muchas gracias!!",
                        text: "El valor aproximado de la climatización de tu pisicina es: " +  formatterPeso.format(valorDePiscina),
                        imageUrl: 'Images/volante.png',
                        imageWidth: 400,
                        imageHeight: 500,
                        imageAlt: 'Volante Promocional'
                    });
                    enviarEmail(mensaje);
                    return false;
                }
            }
        }
    }
    if (cbxDescubierta==true)  {
        valorMts2 = 450000;
        if (cbxFormPisRectan == true) {
            var txtLargoV = Number(document.getElementById('txtLargo').value);
            var txtAnchoV = Number(document.getElementById('txtAncho').value);
            var txtProfundoV = Number(document.getElementById('txtProfundo').value);
            if (txtLargoV == 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!!',
                    text: 'ingrese un valor diferente de 0 en el campo Largo',
                  })
                return false;
            } else {
                if (txtAnchoV == 0) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!!',
                        text: 'ingrese un valor diferente de 0 en el campo Ancho',
                      })
                    return false;
                } else {
                    if (txtProfundoV == 0) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error!!',
                            text: 'ingrese un valor diferente de 0 en el campo Profundo',
                          })
                        return false;
                    }
                    mts2 = txtLargoV * txtAnchoV;
                    mts3 = txtLargoV * txtAnchoV * txtProfundoV;
                    mts2 = mts2.toFixed(2);
                    mts3 = mts3.toFixed(2);
                    valorDePiscina = mts2 * valorMts2;
                    mensaje = "Muchas gracias Estimado(a) " + txtNombre + " por visitar NASA de Colombia, el precio de la climatización de su piscina descubierta rectangular en la ciudad de: " + cbxCiudad + " es: " +  formatterPeso.format(valorDePiscina)  + " con medidas de Largo: " + txtLargoV + " metros, ancho: " + txtAnchoV + " metros y profundidad: " + txtProfundoV + " metros. El area de su pisicina es: " + mts2 + " Mts2 y el volumen es: " + mts3 + " Mts3, en el transcurso del día lo estará comunicando un de nustros asesores para mas información a su número: " + txtCelular;
                    Swal.fire({
                        title: "Muchas gracias!!",
                        text: "El valor aproximado de la climatización de tu pisicina es: " +  formatterPeso.format(valorDePiscina),
                        imageUrl: 'Images/volante.png',
                        imageWidth: 400,
                        imageHeight: 500,
                        imageAlt: 'Volante Promocional'
                    });
                    enviarEmail(mensaje);
                    return false;
                }
            }
        }
        if (cbxFormPisCir == true) {
            var txtLargoV = Number(document.getElementById('txtLargo').value);
            var txtProfundoV = Number(document.getElementById('txtProfundo').value);
            if (txtLargoV == 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!!',
                    text: 'ingrese un valor diferente de 0 en el campo Largo',
                  })
                return false;
            } else {
                if (txtProfundoV == 0) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!!',
                        text: 'ingrese un valor diferente de 0 en el campo Profundo',
                      })
                    return false;
                }
                pi = Math.PI;
                mts2 = txtLargoV / 2 * txtLargoV / 2 * pi;
                mts3 = mts2 * txtProfundoV;
                mts2 = mts2.toFixed(2);
                mts3 = mts3.toFixed(2);
                valorDePiscina = mts2 * valorMts2;
                valorDePiscina = valorDePiscina.toFixed(0);
                mensaje = "Muchas gracias Estimado(a) " + txtNombre + " por visitar NASA de Colombia, el precio de la climatización de su piscina descubierta circular en la ciudad de: " + cbxCiudad + " es: " + formatterPeso.format(valorDePiscina)  + " con medidas de Largo: " + txtLargoV + " metros y profundidad: " + txtProfundoV + " metros. El area de su pisicina es: " + mts2 + " Mts2 y el volumen es: " + mts3 + " Mts3, en el transcurso del día lo estará comunicando un de nustros asesores para mas información a su número: " + txtCelular;
                Swal.fire({
                    title: "Muchas gracias!!",
                    text: "El valor aproximado de la climatización de tu pisicina es: " +  formatterPeso.format(valorDePiscina),
                    imageUrl: 'Images/volante.png',
                    imageWidth: 400,
                    imageHeight: 500,
                    imageAlt: 'Volante Promocional'
                });
                enviarEmail(mensaje);
                return false;

            }
        }
        if (cbxFormPisRinon == true) {
            var txtLargoV = Number(document.getElementById('txtLargo').value);
            var txtProfundoV = Number(document.getElementById('txtProfundo').value);
            var txtAncho2V = Number(document.getElementById("txtAncho2").value);
            var txtAnchoV = Number(document.getElementById("txtAncho").value);

            if (txtLargoV == 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!!',
                    text: 'ingrese un valor diferente de 0 en el campo Largo',
                  })
                return false;
            } else {
                if (txtAnchoV == 0) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!!',
                        text: 'ingrese un valor diferente de 0 en el campo Ancho 1',
                      })
                    return false;
                } else {
                    if (txtAncho2V == 0) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error!!',
                            text: 'ingrese un valor diferente de 0 en el campo Ancho 2',
                          })
                        return false;
                    }
                    else {
                        if (txtProfundoV == 0) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Error!!',
                                text: 'ingrese un valor diferente de 0 en el campo Profundo',
                              })
                            return false;
                        }
                        mts2 = (txtAnchoV + txtAncho2V) * (txtLargoV * 0.45);
                        mts3 = mts2 * txtProfundoV;
                        valorDePiscina = mts2 * valorMts2;
                        valorDePiscina = valorDePiscina.toFixed(0);
                        mts2 = mts2.toFixed(2);
                        mts3 = mts3.toFixed(2);
                        mensaje = "Muchas gracias Estimado(a) " + txtNombre + " por visitar NASA de Colombia, el precio de la climatización de su piscina descubierta riñon en la ciudad de: " + cbxCiudad + " es: " +  formatterPeso.format(valorDePiscina) + " con medidas de Largo: " + txtLargoV + " metros, ancho 1: " + txtAnchoV + " metros, ancho 2: "+txtAncho2V+" metros y profundidad: " + txtProfundoV + " metros. El area de su pisicina es: " + mts2 + " Mts2 y el volumen es: " + mts3 + " Mts3, en el transcurso del día lo estará comunicando un de nustros asesores para mas información a su número: " + txtCelular;
                        Swal.fire({
                            title: "Muchas gracias!!",
                            text: "El valor aproximado de la climatización de tu pisicina es: " +  formatterPeso.format(valorDePiscina),
                            imageUrl: 'Images/volante.png',
                            imageWidth: 400,
                            imageHeight: 500,
                            imageAlt: 'Volante Promocional'
                        });
                        enviarEmail(mensaje);
                        return false;
                    }
                }
            }

        }
        if (cbxFormPisCuadra == true) {

            var txtLargoV = Number(document.getElementById('txtLargo').value);
            var txtAnchoV = Number(document.getElementById('txtAncho').value);
            var txtProfundoV = Number(document.getElementById('txtProfundo').value);
            if (txtLargoV == 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!!',
                    text: 'ingrese un valor diferente de 0 en el campo Largo',
                  })
                return false;
            } else {
                if (txtAnchoV == 0) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!!',
                        text: 'ingrese un valor diferente de 0 en el campo Ancho',
                      })
                    return false;
                } else {
                    if (txtProfundoV == 0) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error!!',
                            text: 'ingrese un valor diferente de 0 en el campo Profundo',
                          })
                        return false;
                    }
                    mts2 = txtLargoV * txtAnchoV;
                    mts3 = txtLargoV * txtAnchoV * txtProfundoV;
                    valorDePiscina = mts2 * valorMts2;
                    valorDePiscina = valorDePiscina.toFixed(0);
                    mts2 = mts2.toFixed(2);
                    mts3 = mts3.toFixed(2);
                    mensaje = "Muchas gracias Estimado(a) " + txtNombre + " por visitar NASA de Colombia, el precio de la climatización de su piscina descubierta cuadrada en la ciudad de: " + cbxCiudad + " es: " +  formatterPeso.format(valorDePiscina) + " con medidas de Largo: " + txtLargoV + " metros, ancho: " + txtAnchoV + " metros y profundidad: " + txtProfundoV + " metros. El area de su pisicina es: " + mts2 + " Mts2 y el volumen es: " + mts3 + " Mts3, en el transcurso del día lo estará comunicando un de nustros asesores para mas información a su número: " + txtCelular;
                    Swal.fire({
                        title: "Muchas gracias!!",
                        text: "El valor aproximado de la climatización de tu pisicina es: " +  formatterPeso.format(valorDePiscina),
                        imageUrl: 'Images/volante.png',
                        imageWidth: 400,
                        imageHeight: 500,
                        imageAlt: 'Volante Promocional'
                    });
                    enviarEmail(mensaje);
                    return false;
                }
            }
        }
    }
    
}

function validacion() {
    var cbxTipoPiscina = document.querySelector('input[name="tipo"]:checked');
    var cbxFormaPiscina = document.querySelector('input[name="forma"]:checked');
    var txtNombres = document.getElementById('Nombres').value;
    var txtCelular = document.getElementById('Celular').value;
    var txtEmail = document.getElementById('Email').value;
    var cbxCiudad = document.getElementById('ciudad');
    var txtOtraCiudad = document.getElementById('otraCiudad').value;

    if (cbxTipoPiscina == null) {
        Swal.fire({
            icon: 'error',
            title: 'Error!!',
            text: 'Escoja tipo de piscina',
          })
        return false;
    } else {
        if (cbxFormaPiscina == null) {
            Swal.fire({
                icon: 'error',
                title: 'Error!!',
                text: 'Escoja la forma de la piscina',
              })
            
            return false;
        }
        else {
            if (txtNombres == null || txtNombres.length == 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!!',
                    text: 'Ingrese el campo de nombre',
                  })
                return false;
            } else {
                if (/^([0-9])*$/.test(txtNombres)) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!!',
                        text: 'El nombre no debe de tener numeros',
                      })
                    return false;
                }
                else {
                    if (txtCelular == null || txtCelular.length == 0) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error!!',
                            text: 'ingrese el campo celular',
                          })
                          return false;
                    } else if (txtCelular == isNaN) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error!!',
                            text: 'ingrese un numero sin caracteres especiales',
                          })
                        return false;
                    } else {
                        if (txtEmail == null || txtEmail.length == 0) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Error!!',
                                text: 'Ingrese el campo correo',
                              })
                            return false
                        }
                        else {
                            if (!(/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(txtEmail))) {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Error!!',
                                    text: 'El correo debe de ser valido',
                                  })
                                return false;
                            }
                            else {
                                if (cbxCiudad.value == 0 || cbxCiudad == null) {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Error!!',
                                        text: 'Por favor seleccione una ciudad',
                                      })
                                    return false;
                                }
                                else if (cbxCiudad.value == "Otro") {
                                    if (txtOtraCiudad == null || txtOtraCiudad.length == 0) {
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Error!!',
                                            text: 'Ingrese el campo Ciudad',
                                          })
                                        return false;
                                    }

                                }
                            }
                        }
                    }
                }
            }
        }
    }
    calculoMtsC()
    return false

}
function enviarEmail(mensaje) {

    var myform = $("form#app");
    // myform.submit(function(event){
    //     event.preventDefault();
    var destinatario = document.getElementById('Email').value;
    var template_params = {
        "to_email": destinatario,
        "subject": "pruebas quemadas",
        "from_name": "Colombia NASA",
        "from_email": "julianza32@gmail.com",
        "message": mensaje
    }
    // Change to your service ID, or keep using the default service
    var service_id = "default_service";

    var template_id = "prueba";
    myform.find("button").text("Sending...");
    emailjs.send(service_id, template_id, template_params)
        .then(function () {
            //alert("Sent!");
            myform.find("button").text("Send");
        }, function (err) {
            alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
            myform.find("button").text("Send");
        });

    return false;
};


