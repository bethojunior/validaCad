<?php

$host    = "acold.mysql.uhserver.com";
$usuario = "acolddb";
$senha   = "Senh@1";
$base    = "acold";
$conexao = mysqli_connect($host , $usuario , $senha , $base );


$idCliente  = $_POST['idCliente'];
$titulo = $_POST['titulo'];
$valor =  $_POST['valor'];
$parceria = $_POST['parceria'];
$imgConta = $_POST['imgConta'];



$img = $_POST["imgConta"];

define ( ' UPLOAD_DIR ' , '../cadastros/' );

$img  =  str_replace( 'data image/png;base64,' , ' ' , $img );
$img  =  str_replace( '' , '+' , $img );
$data  =  base64_decode( $img );
$file  =  '../cadastros/'  .  uniqid () .  '.png' ;
$success  =  file_put_contents ($file , $data );

$imagem = $file;


if($idCliente != ''){
    $sql = "INSERT INTO cadapp (idcliente, img , parceria , valor) VALUES ('$idCliente' , '$imagem', '$parceria' , '$valor')";
    $exc = mysqli_query($conexao , $sql) or die (mysqli_error($sql));
    echo TRUE;
}else {
    echo FALSE;
}







