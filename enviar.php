<?php

// Llamando a los campos
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$respuesta1 = $_POST['respuesta1'];
$respuesta2 = $_POST['respuesta2'];
$respuesta3 = $_POST['respuesta3'];
$respuesta1 = $_POST['respuesta4'];

// Datos para el correo
$destinatario = "yamilaltamirano@gmail.com";
$asunto = "Declaracion Jurada web";

$carta = "De: $nombre \n";
$carta .= "telefono $telefono \n";
$carta .= "rta 1: $respuesta1 \n";
$carta .= "rta 2: $respuesta2 \n";
$carta .= "rta 3: $respuesta3 \n";
$carta .= "rta 4: $respuesta4 \n";
// Enviando Mensaje
mail($destinatario, $asunto, $carta);
header('Location:mensaje-de-envio.html');

?>
