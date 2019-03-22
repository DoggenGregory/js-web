//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...

var reset = document.getElementById("reset") ;
var display = document.getElementById("display");

reset.onclick = function() {funcreset()};
display.onclick = function() {funcdisplay()};

function funcreset(){
    console.log("reset")
    document.getElementById("name").value = "";
    document.getElementById("power").value = "";
    document.getElementById("motivation").value = "";


}

function funcdisplay(){
    var name = document.getElementById("name");
    var power = document.getElementById("power");
    var motivation = document.getElementById("motivation");
    var pName = document.getElementById("pName");
    var pPower = document.getElementById("pPower");
    var pMotivation = document.getElementById("pMotivation");
    var reset = document.getElementById("reset");
    var display = document.getElementById("display");
    var title = document.getElementById("title");
    
    
    var innername = name.value;
    var innerpower = power.value;
    var innermotivation = motivation.value;


    title.innerHTML = ("the vilain "+innername+" has a new superpower "+innerpower+" and wants to distroy the word becaus of "+innermotivation)
    
    
    name.parentNode.removeChild(name);
    power.parentNode.removeChild(power);
    motivation.parentNode.removeChild(motivation);
    pName.parentNode.removeChild(pName);
    pPower.parentNode.removeChild(pPower);
    pMotivation.parentNode.removeChild(pMotivation);
    reset.parentNode.removeChild(reset);
    display.parentNode.removeChild(display);

     
    

 

}