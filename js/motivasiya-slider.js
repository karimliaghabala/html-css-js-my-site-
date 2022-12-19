// const slider = document.querySelector(".motivasiya")

var i = 0; // start point
var images = [];
var time = 2000;

//image list
images[0] = './image/gin/image1.jpg';
images[1] = './image/gin/image2.jpg';
images[2] = './image/gin/image3.jpg';
images[3] = './image/gin/image4.jpg';
images[4] = './image/gin/image5.jpg';
images[5] = './image/gin/image6.jpg';

//change image
function changeImg(){
    document.slide.src = images[i];

    if(i<images.length - 1){
        i++;
    }else{
        i=0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg;