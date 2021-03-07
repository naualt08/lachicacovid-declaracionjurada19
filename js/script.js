$(document).ready(function(){

    $('#btnSend').click(function(){

        var errores = '';

        // Validado Nombre ==============================
        if( $('#names').val() == '' ){
            errores += '<p>Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        } else{
            $('#names').css("border-bottom-color", "#d1d1d1")
        }


        // Validado tphoneelefono ==============================
        if( $('#phone').val() == '' ){
            errores += '<p>Inigrese un telefono</p>';
            $('#phone').css("border-bottom-color", "#F14B4B")
        } else{
            $('#phone').css("border-bottom-color", "#d1d1d1")
        }

        // Validado respuesta ==============================
        if( $('#respuesta').val() == '' ){
            errores += '<p>Inigrese SI o NO </p>';
            $('#respuesta').css("border-bottom-color", "#F14B4B")
        } else{
            $('#respuesta').css("border-bottom-color", "#d1d1d1")
        }
        // Validado respuesta2 ==============================
        if( $('#respuesta2').val() == '' ){
            errores += '<p>Inigrese SI o NO </p>';
            $('#respuesta2').css("border-bottom-color", "#F14B4B")
        } else{
            $('#respuesta2').css("border-bottom-color", "#d1d1d1")
        }
        // Validado respuesta3 ==============================
        if( $('#respuesta3').val() == '' ){
            errores += '<p>Inigrese SI o NO </p>';
            $('#respuesta3').css("border-bottom-color", "#F14B4B")
        } else{
            $('#respuesta3').css("border-bottom-color", "#d1d1d1")
        }
        // Validado respuesta4 ==============================
        if( $('#respuesta4').val() == '' ){
            errores += '<p>Inigrese SI o NO </p>';
            $('#respuesta4').css("border-bottom-color", "#F14B4B")
        } else{
            $('#respuesta4').css("border-bottom-color", "#d1d1d1")
        }
        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });

});
