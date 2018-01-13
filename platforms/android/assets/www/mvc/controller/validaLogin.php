<?php 

    $host    = "acold.mysql.uhserver.com";
    $usuario = "acolddb";
    $senha   = "Senh@1";
    $base    = "acold";
    $conexao = mysqli_connect($host , $usuario , $senha , $base );


    $login = $_POST['login'];
    $senha = $_POST['pass'];

    $sql = mysqli_query ($conexao  , "SELECT * FROM  users WHERE login = '$login' and senha = '$senha'") or die (mysqli_error($conexao));
    $row = mysqli_num_rows($sql);

    if($row > 0 ){
        session_start();
        $_SESSION ['login'] = $_POST ['login'];
        $_SESSION ['senha'] = $_POST ['senha'];


        // echo "true";
        echo $_SESSION['login'];
    } else {
        session_abort();
        echo "false";
    }
