if (window.File && window.FileReader && window.FileList) {
    console.log('Todas las APIs soportadas');
} else {
    alert('La API de FILE no es soportada en este navegador.');
}

var file = document.getElementById('file');
var video = document.getElementById('video');
var ventana = document.getElementById('multimedia');
var output = document.getElementById('output');

function aplicarVideo() {
    if (file.files[0].type.match('video/*')) {
        let fileUrl = URL.createObjectURL(file.files[0]);
        video.src = fileUrl;  
        //Recurso de http://www.philliphaydon.com/2014/04/29/loading-an-image-or-video-from-a-file-input-control/
        document.getElementById('video').controls = false;
        ventana.style.display = 'block';
        output.innerHTML = "";
        alert("El vídeo puede tardar un poco en cargarse.")
        while (video.loadeddata = false){
            alert("El vídeo está cargando, esto puede demorarse unos minutos.");
            output.innerHTML = "Espera a que el vídeo se cargue.";
        }
    } else {
        ventana.style.display = 'none';
        alert("¡ERROR! El archivo seleccionado no es un vídeo válido.");
        output.innerHTML = "Seleccione un formato de vídeo válido.";
    }  
}

function subirVolumen() {
    if (video.volume < 0.91){video.volume += 0.1};
}

function bajarVolumen() {
    if (video.volume > 0.09){video.volume -= 0.1};
}
