//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...



var picarr = ["cat1.jpeg","cat2.jpeg","cat3.jpeg","cat4.jpg","cat5.jpeg","cat6.jpeg","cat7.jpg","cat8.jpg","cat9.jpg","cat10.jpg","cat11.jpg","cat12.jpeg",]

var img = document.getElementById("picCat")



setInterval( function(){
        
        var r = Math.round(Math.random()*11);
        
        img.src = "img/"+picarr[r]
        img.style.height = "500px"
        img.style.width = "500px"
        img.style.margin="0px 300px"


        //image.src = "img/"+picarr[r];
        //ctx.drawImage(image, 0 ,0, 500,500,0,0,500,500);
        console.log(picarr[r]);
        
       
},1000)