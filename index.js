text = document.getElementById("textbox");
imagesource = document.getElementById("photo");
let sources = ["url(House.jpg)","url(Ella.jpg)","url(Jerry.jpg)","url(Sandy.jpg)","url(Joe.jpg)","url(Jake.jpg)"]
let allibies = ["A rich family lives in a round house, when the parents came back form their dinner date their baby was dead.","The daughter Ella said she was playing with her dolls.","The son Jerry said he was playing outside in the garden."," The maid Sandy said she was dusting corners.", "The butler Joe said he was watching the son.", "The chief Jake said he was baking pies."]
i = 1

function Next(){
    if (i == 6){
        i = 0;
    }
    text.innerHTML = allibies[i];
    imagesource.style.backgroundImage = sources[i]
    i += 1;
}

function a(){
    document.getElementById("a").style.backgroundColor = "red";
    document.getElementById("b").style.backgroundColor = "white";
    document.getElementById("c").style.backgroundColor = "white";
    document.getElementById("d").style.backgroundColor = "white";
    document.getElementById("e").style.backgroundColor = "white";

}
function b(){
    document.getElementById("a").style.backgroundColor = "white";
    document.getElementById("b").style.backgroundColor = "red";
    document.getElementById("c").style.backgroundColor = "white";
    document.getElementById("d").style.backgroundColor = "white";
    document.getElementById("e").style.backgroundColor = "white";

}
function c(){
    document.getElementById("a").style.backgroundColor = "white";
    document.getElementById("b").style.backgroundColor = "white";

    document.getElementById("c").style.backgroundColor = "green";
    document.getElementById("d").style.backgroundColor = "white";

    document.getElementById("e").style.backgroundColor = "white";

}
function d(){
    document.getElementById("a").style.backgroundColor = "white";
    document.getElementById("b").style.backgroundColor = "white";
    document.getElementById("c").style.backgroundColor = "white";


    document.getElementById("d").style.backgroundColor = "red";
    document.getElementById("e").style.backgroundColor = "white";

}
function e(){
    document.getElementById("a").style.backgroundColor = "white";
    document.getElementById("b").style.backgroundColor = "white";
    document.getElementById("c").style.backgroundColor = "white";
    document.getElementById("d").style.backgroundColor = "white";



    document.getElementById("e").style.backgroundColor = "red";
}