let x;
let y;
let z;
document.getElementById("roll").onclick=function(){
    x=Math.floor(Math.random()*10)+1;
    y=Math.floor(Math.random()*10)+1;
    z=Math.floor(Math.random()*10)+1;
    document.getElementById("xlable").innerHTML="x value is "+x;
    document.getElementById("ylable").innerHTML="y value is "+y;
    document.getElementById("zlable").innerHTML="z value is "+z;
}