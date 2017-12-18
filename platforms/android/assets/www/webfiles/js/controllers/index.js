

///// INICIA A CAMERA
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    capturePhoto : function(){
        
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
            destinationType: Camera.DestinationType.FILE_URI });
        
        function onSuccess(imageURI) {
            document.getElementById("getOut").style.display = "none";
            var image = document.getElementById('myImage');
            image.src = imageURI;
            document.getElementById("imagemCad").value = imageURI;
        }
        
        function onFail(message) {
            alert('Failed because: ' + "Error");
        }
    }
    
};


document.addEventListener("DOMContentLoaded" , function(){
    ///VALIDAÇÃO ID
    document.getElementById("idCliente").addEventListener("change" , function(){

        var id = document.getElementById("idCliente").value;
            $.ajax({     
                url:"http://betho5.000webhostapp.com/controller/validaCad.php",        
                type:"POST",              
                data: {"id":id}, //dados
                success: function (result){   
                        console.log(result);   
                            if(result == true ){  
                                console.log("OK");
                            }else{    
                                console.log("error");
                                console.log(result);

                                function erroId() {
                                    location.reload();
                                }
                                
                                navigator.notification.alert(
                                    'ID incorreto', 
                                    erroId,        
                                    'Erro',            
                                    'OK'                 
                                );
                                navigator.vibrate([300 , 300 , 200 , 100]);
                            }
                        }
            })
            return false;
    });

    // document.getElementById("valor").addEventListener("keydown" , function(){
        
    //         var valor = document.getElementById("valor").value;

    //         var metade = Math.floor(document.getElementById("valor").value / 2);
    
    //         var resultado = valor.substring( 1 , metade) + "." + valor.substring(metade);
    
    //         document.getElementById('valor').innerHTML = resultado;


    //     // var valor = document.getElementById("valor").value;

    //     // if(valor === 3 ){

    //     //     var metade = Math.floor(document.getElementById("valor").value.length / 2);
    
    //     //     var resultado = valor.substring( 1 , metade) + "," + valor.substring(metade);
    
    //     //     document.getElementById('valor').innerHTML = resultado;

    //     // } else if (valor === 4){

    //     //     var metade = Math.floor(document.getElementById("valor").value.length / 2);
    
    //     //     var resultado =  valor.substring( 0 ,metade)+ "," +valor.substring(metade);
    
    //     //     document.getElementById('valor').value = resultado;
    //     // }

    // });

    document.getElementById("enviar").addEventListener("click" , function(){
        
            var imgConta =  document.getElementById("imagemCad").file;   
            var idCliente = document.getElementById("idCliente").value;
            var parceria =  document.getElementById("parceria").value;
            var valor = document.getElementById("valor").value;
            
                
                    // $.ajax({     
                    //     url:"http://betho5.000webhostapp.com/controller/validaCad.php",        
                    //     type:"POST",              
                    //     data: {"id":id}, //dados
                    //     success: function (result){   
                    //             console.log(result);   
                    //                 if(result == true ){  
                    //                     console.log("OK");
                    //                 }else{    
                    //                     console.log("error");
                    //                     console.log(result);
        
                    //                     function erroId() {
                    //                         location.reload();
                    //                     }
                                        
                    //                     navigator.notification.alert(
                    //                         'ID incorreto', 
                    //                         erroId,        
                    //                         'Erro',            
                    //                         'OK'                 
                    //                     );
                    //                     navigator.vibrate([300 , 300 , 200 , 100]);
                    //                 }
                    //             }
                    // })
                    // return false;
            });



});



