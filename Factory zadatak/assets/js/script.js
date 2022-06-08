var first = document.getElementById("1");
var second = document.getElementById("2");
var third = document.getElementById("3");
var fourth = document.getElementById("4");
var fifth = document.getElementById("5");
var six = document.getElementById("6");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var nine = document.getElementById("9");

var counter = 0;

var array = [first, second, third, fourth, fifth, six, seven, eight, nine];


function goingRight() {
   
    
    
    if (counter == array.length) {
        counter = 1;
    }
    
    for (var i = 0; i < array.length; i++) {
        array[i].src = "./assets/media/slider-image-" + ((counter + i) % array.length) + ".jpg";
        console.log(array[i]);
    }
    counter++;

    
}


function goingLeft() {
    

    if (counter == 0) {
        counter = 8;
    }
    
    for (var i = 0; i < array.length; i++) {
        array[i].src = "./assets/media/slider-image-" + ((counter + i) % array.length) + ".jpg";
        console.log(array[i]);
    }
    counter--;
}


function changeColorRight(){
    document.getElementById("right").src = "./assets/media/arrow-blue-right.png";
}

function changeColorRightBack(){
    document.getElementById("right").src = "./assets/media/arrow-gray-right.png";
}


function changeColorLeft(){
    document.getElementById("left").src = "./assets/media/arrow-blue-left.png";
}

function changeColorLeftBack(){
    document.getElementById("left").src = "./assets/media/arrow-gray-left.png";
}




