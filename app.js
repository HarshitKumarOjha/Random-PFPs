var pics = [
    "imgs/pippo.jpg",
    "imgs/808 mafia.png",
    "imgs/boi.png",
    "imgs/Deno.png",
    "imgs/dreamy.jpg",
    "imgs/metro boomin.jpg",
    "imgs/PROfile.jpg",
    "imgs/xxxtentacion 2.jpg"
                                //9
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1

btn.addEventListener("click", function(){
    if(counter === 8){
        counter = 0;
    }
    img.src = pics[counter]
    counter = counter + 1;
});
