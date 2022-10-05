let ran;
let gval;
gval=Number(gval);
ran=Math.floor(Math.random()*10)+1;
document.getElementById("res").onclick=function(){
    ran=Math.floor(Math.random()*10)+1;
}
document.getElementById("but").onclick=function(){
    gval=document.getElementById("inputno").value;
    if(gval==ran){
        document.getElementById("clue").innerHTML="Hurray! You have won the game";
    }
    else if(gval>ran){
        document.getElementById("clue").innerHTML="clue: guess the bigger number";
    }
    else{
        document.getElementById("clue").innerHTML="clue: guess the lesser number";
    }
    
}