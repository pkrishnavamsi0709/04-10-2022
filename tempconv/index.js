let val;
document.getElementById("submit").onclick=function(){
    val=document.getElementById("val").value;
    if(document.getElementById("cel").checked){
        val=(val*(9/5))+32;
        document.getElementById("type").innerHTML="Fahrenheit";
        document.getElementById("after").innerHTML=val;
    }
    else{
        val=(val-32)*5/9;
        document.getElementById("type").innerHTML="celsius";
        document.getElementById("after").innerHTML=val+"°C";
    }
}