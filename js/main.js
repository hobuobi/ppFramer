var imageLoader = document.getElementById('imageLoader');
    imageLoader.addEventListener('change', handleImage, false);
var downloader = document.getElementById('download');
    downloader.addEventListener('click', downloadProfile, false);
var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d');


function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        var frameImg = new Image();
        var padding = 20;
        frameImg.src = 'assets/IL_frameImg.png';

        ctx.drawImage(frameImg, 0, 0);
        img.onload = function(){
            canvas.width = 1000;
            canvas.height = 1000;
            ctx.drawImage(img,0,0,1000,1000);
            ctx.drawImage(frameImg,1000-frameImg.width-padding,1000-frameImg.height-padding);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
}

function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}

function downloadProfile() {
    downloadCanvas(this, 'imageCanvas', 'profileFramed.png');
}