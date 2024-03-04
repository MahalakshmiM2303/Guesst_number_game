var myguess=document.getElementById("inp")
var res=document.getElementById("msg")
var ran=Math.floor(Math.random()*10+1)
function fun()
{
    var my=myguess.value
    if(my==ran){

        res.textContent="Correct"
        //alert("YOU WON")
    }
    else{
        res.textContent="Wrong"
    }
}