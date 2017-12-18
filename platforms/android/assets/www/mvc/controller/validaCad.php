<?php

/**
 * Created by PhpStorm.
 * User: heghberthogcosta
 * Date: 29/10/17
 * Time: 03:40
 * Funcionability: Verifica o Id da empresa Enel, retorna booleano ou em texto
 * verificaId( "$num->número do id", "$dig->digito, no caso de usar $tipo 2","$tipo->1  para digito separado e 2 para quanto o numero ja vem com dígito","$retorno->t para texto ou b para booleano"
 * exemplo : verigicaId("12345","0","t");
 * 
 */

function completaZero($num, $qtdTamanho){
    
    //    if(strlen($num) < 11){
            $tamanho = strlen($num);
            $tamanho = $qtdTamanho - $tamanho;
            for ($i = 0 ; $i < $tamanho ; $i ++){
                $num = "0" . $num;
            }
            return $num ;
    //    }
    
}
    
$id = $_POST['id'];
$dig = '0';
$tipo = '1';
$retorno = 'b';
if(verificaId($id , $dig , $tipo , $retorno)){
    echo true;
}else{
    echo false;
}

function verificaId($num, $dig, $tipo, $retorno ){
    
    if ($tipo == "2"){
    $num = completaZero($num, 11);
    $dig = substr( $num, 10,1 ) ;
    $num = substr( $num, 0,10 ) ;
    } else {
    $num = completaZero($num, 10);
    }

    $p9 = substr( $num, 2,1 ) * 9 ;
    $p8 = substr( $num, 3,1 ) * 8 ;
    $p7 = substr( $num, 4,1 ) * 7 ;
    $p6 = substr( $num, 5,1 ) * 6 ;
    $p5 = substr( $num, 6,1 ) * 5 ;
    $p4 = substr( $num, 7,1 ) * 4 ;
    $p3 = substr( $num, 8,1 ) * 3 ;
    $p2 = substr( $num, 9,1 ) * 2 ;

    $soma1 = $p2 + $p3 + $p4 + $p5 + $p6 + $p7 + $p8 + $p9;

    $resto1 = $soma1 % 11;

    $subt1 = 11 - $resto1 ;

    if ($subt1 == 10 || $subt1 == 11){
        $subt1 = 0;
    }



    if ( $retorno == "b"){
        if ($subt1 == $dig){
            return true;
        } else {
            return false;
        }
    }else {
            if ($subt1 == $dig){
            echo "ok";
                //echo "Digito correto". "\n";
        } else {
            echo "erro";
            //echo "Erro de digito ($subt1)" . "\n";
        }
    }


}