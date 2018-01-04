
var imgConta =  null;   
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
            imgConta =  imageURI;   
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
                type: "GET",
                data: {"id":id}, //dados
                success: function (result){   
                        console.log(result);   
                            if(result ==  "true" ){
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


    document.getElementById("enviar").addEventListener("click" , function(){

            document.getElementById("divGiff").style.display = "block";
            document.getElementById("header").style.display = "none";

            var idCliente = document.getElementById("idCliente").value;
            var nomeImagem = document.getElementById("idCliente").value;
            var parceria =  document.getElementById("parceria").value;
            var valor = document.getElementById("valor").value;
            var titulo = document.getElementById("idCliente").value;
            var image = new Image();
            image.src =  document.getElementById('myImage').src;
            image.onload = function() {

                var canvas = document.createElement('canvas');
                canvas.height = 10000;
                canvas.width = 10000;
                var context = canvas.getContext('2d');
                context.drawImage(image, 0, 0);
                var imageData = canvas.toDataURL('image/jpeg').replace(/^data:image\/(png|jpg|jpeg);base64,/, ""); //remove mimetype


                //alert(imageData);
                    $.ajax({
                        url:"http://betho5.000webhostapp.com/controller/cadastrar.php",
                        type:"POST",
                        //data: {"valor":valor}, //dados
                        data: {"idCliente" : idCliente, "imgConta": imageData, "titulo" : titulo, "parceria": parceria , "valor": valor}, //dados
                        success: function (result){
                                console.log(result);
                                    if(result == true ){

                                        console.log("OK");

                                        function successCad() {
                                            //location.reload();
                                        }

                                        navigator.notification.alert(
                                            'Cadastrado com sucesso',
                                            successCad,
                                            '',
                                            'OK'
                                        );
                                        document.getElementById("divGiff").style.display = "none";
                                        document.getElementById("header").style.display = "block";
                                        document.getElementById("idCliente").value = "";
                                        document.getElementById("myImage").innerHTML = "<i class='large material-icons'>camera_alt</i>"

                                    }else{
                                        console.log(result);

                                        function erroSend() {
                                            //location.reload();
                                        }

                                        navigator.notification.alert(
                                            'ERRO AO ENVIAR',
                                            erroSend,
                                            'Erro',
                                            'OK'
                                        );
                                        navigator.vibrate([300 , 300 , 200 , 100]);

                                        document.getElementById("divGiff").style.display = "none";
                                        document.getElementById("header").style.display = "block";
                                        document.getElementById("idCliente").value = "";
                                        document.getElementById("myImage").innerHTML = "<i class='large material-icons'>camera_alt</i>"

                                    }
                                }
                    });
                    return false;
                };


            });


});



