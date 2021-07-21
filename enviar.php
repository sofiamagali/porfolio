<?php

require 'PHPMailer/PHPMailerAutoload.php';

//Create a new PHPMailer instance
$mail = new PHPMailer();
$mail->IsSMTP();
 
//Configuracion servidor mail
$mail->From = "sofia.fuhrmann@gmail.com"; //remitente
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'tls'; //seguridad
$mail->Host = "smtp.gmail.com"; // servidor smtp
$mail->Port = 587; //puerto
$mail->Username ='sofia.fuhrmann@gmail.com'; //nombre usuario
$mail->Password = 'password'; //contraseña


//Agregar destinatario



$mail->$nombre= $_POST['nombre'];
$mail->$email=$_POST['email'];
$mail->$msj= $_POST['msj'];
$mail->$cel= $_POST['celular'];


//Avisar si fue enviado o no y dirigir al index
if ($mail->Send()) {
    echo'<script">
           alert("Enviado Correctamente");
        </script>';
} else {
    echo'<script>
           alert("NO ENVIADO, intentar de nuevo");
        </script>';
}


?>
