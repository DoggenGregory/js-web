//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
var picarr = ["cat1.jpeg","cat2.jpeg","cat3.jpeg","cat4.jpg","cat5.jpeg","cat6.jpeg","cat7.jpg","cat8.jpg","cat9.jpg","cat10.jpg","cat11.jpg","cat12.jpeg",]

/////////////////////////////////////////////

function randomArr(myArr) {      
    var l = myArr.length, temp, index;  
    while (l > 0) {  
       index = Math.floor(Math.random() * l);  
       l--;  
       temp = myArr[l];          
       myArr[l] = myArr[index];          
       myArr[index] = temp;      
    }    
    return myArr;    
 }        

////////////////////////////////////////////////

randomArr(picarr);


for (i=0 ; i < picarr.length ; i++){

    
    
    var img = document.createElement("IMG")
    document.getElementById("displaybox").appendChild(img);
    img.src = "img/"+picarr[i];

    img.style.height= "100px"
    img.style.width= "100px"




}
       
