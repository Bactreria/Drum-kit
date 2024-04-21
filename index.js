var x = document.querySelectorAll(".drum");
 
var n = document.querySelectorAll(".drum").length;

for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function (event) {
        console.log(event.target.innerHTML) ; 
        
        var x = event.target.innerHTML;
        play(x);
        buttonanimation(x)
    });
}
for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("keydown", function (event) {    
        var x = event.key;
        play(x) ; 
        buttonanimation(x)
         
    });
}
function play(x){
    switch (x) {
        case 'w':
            var a = new Audio("./sounds/crash.mp3");
            a.play();
            break;
        case 'a':
            var a = new Audio("./sounds/kick-bass.mp3");
            a.play();
            break;
        case 's':
            var a = new Audio("./sounds/snare.mp3");
            a.play();
            break;
        case 'd':
            var a = new Audio("./sounds/tom-1.mp3");
            a.play();
            break;
        case 'j':
            var a = new Audio("./sounds/tom-2.mp3");
            a.play();
            break;
        case 'k':
            var a = new Audio("./sounds/tom-3.mp3");
            a.play();
            break;
        case 'l':
            var a = new Audio("./sounds/tom-4.mp3");
            a.play();
            break;
    }
}
function buttonanimation(key){
    var actbtn = document.querySelector("."+key) ; 
    actbtn.classList.add("pressed");
    setTimeout(function(){
        actbtn.classList.remove("pressed") ;
    },100);  
}