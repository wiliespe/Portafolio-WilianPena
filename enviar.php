<?php 
$destino= "wiliespe90@gmail.com";
$nombre= $_POST["nombre"];
$correo= $_POST["correo"];
$mensaje= $_POST["mensaje"];

$contenido= "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nMensaje: " . $mensaje;

mail($destino, "Contacto", $contenido);

echo '<script type="text/javascript">alert("!Enhorabuena! tu mensaje se ha enviado exitosamente")
  window.location.href="index.html";
 </script>';
?>


