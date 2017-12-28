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

        function clearCache(){
            navigator.camera.cleanup();
        }
    }
    
};