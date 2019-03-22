//Check to see if script is linked properly.
console.log("This script is linked properly!")



//Write your JS code here...


var num1 = 0;
var num2 = 0;

var x = document.getElementById("uitkomst");

function plus(){
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    var tot = num1 + num2;
    x.innerHTML = tot ;
}
function minus(){
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    var tot = num1 - num2;
    x.innerHTML = tot ;
}
function times(){
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    var tot = num1 * num2;
    x.innerHTML = tot ;
}
function devide(){
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    var tot = num1 / num2;
    x.innerHTML = tot ;
}





