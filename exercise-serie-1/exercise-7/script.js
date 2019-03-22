//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
greg = document.getElementById("clickHere")

function move(){
    mh = Math.floor(Math.random()*400)
    mw = Math.floor(Math.random()*1000)

    greg.style.margin = mh+"px"+" "+mw+"px"
    console.log(mh,mw)
}

document.getElementById("canvas").addEventListener("click", Anyclick);

function Anyclick(){
    alert("you have to get faster BOYYY!!")

}