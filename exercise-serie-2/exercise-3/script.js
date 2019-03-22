//Check to see if script is linked properly.
console.log("This script is linked properly!")

//Write your JS code here...
var cookie = document.getElementById("cookie");
var counter = document.getElementById("counter");
var clicks = 0;
var updateClick = 1;
var clickUpdate = document.getElementById("clickUpdate");   
var clickCost = 50;
var autoClick = document.getElementById("autoClicker")
var autoClickerCost = 100;
var clickPerTime = 0;
//facebooklink//////////////
 
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    console.log(s)
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk')); 

////////////////////////////////////////////////

/////////////////////////////////////////////


/////////////////////////////
counter.innerHTML = clicks;
    


cookie.onclick =function(){
    clicks = clicks + updateClick;
    counter.innerHTML = clicks;
    schrink()
}
setInterval(() => {
    checkForUpdate()
    autoClicker()
    autoClickMath()
}, 100);
///////functions/////////////////////////////////////////


function  checkForUpdate(){
    if (counter.innerHTML > clickCost ){
        clickUpdate.style.visibility ="visible"; 
        clickUpdate.innerHTML = "upgrade Click "+clickCost       
    }else{
        clickUpdate.style.visibility ="hidden";
    }
}

function updateClickOnClick(){
    updateClick = updateClick + 1;
    clicks = clicks - clickCost
    counter.innerHTML = clicks;

    clickCost = parseInt(clickCost *1.5);
}
function autoClicker(){
    if (counter.innerHTML > autoClickerCost ){
        autoClick.style.visibility ="visible";
        autoClick.innerHTML = "Auto Click "+autoClickerCost       
      
    }else{
        autoClick.style.visibility ="hidden";
    }

}
function autoClickOnClick(){
   // 
    clickPerTime = clickPerTime +1;
    clicks = clicks - autoClickerCost;
    counter.innerHTML = clicks;
    autoClickerCost = parseInt(autoClickerCost *1.5);

}
function autoClickMath(){
    clicks = clicks  + clickPerTime;
    counter.innerHTML = clicks;
}







//animation///////////////////////////////////////////
function schrink(){
    cookie.style.height ="380px" 
    cookie.style.width ="380px"
    cookie.style.margin = "10px" 

    setTimeout(function(){ 
        cookie.style.height ="400px" 
        cookie.style.width ="400px"
        cookie.style.margin = "0px" 
         
    }, 100);

}