let count=0;
document.getElementById("inc").onclick=function(){
    count+=1;
    document.getElementById("score").innerHTML="Counter score: "+count;
}

document.getElementById("dec").onclick=function(){
    count-=1;
    document.getElementById("score").innerHTML="Counter score: "+count;
}
document.getElementById("res").onclick=function(){
    count=0;
    document.getElementById("score").innerHTML="Counter score: "+count;
}