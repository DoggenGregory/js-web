//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...


//const fetch = require('node-fetch');


// Create a request variable and assign a new XMLHttpRequest object to it.


var request = new XMLHttpRequest()
var data = [] ;
// Open a new connection, using the GET request on the URL endpoint



greg()

console.log(data[4]);


function WHAAA(){    
for (i=0;i < 6 ; i++ ){

    print(i);
}}


function greg(){
    request.open('GET', 'https://api.punkapi.com/v2/beers', true)
    
    request.onload = function () {
        data = JSON.parse(this.response)
        WHAAA();

  }


// Send request
request.send()

}
function print(a){
    console.log(a)
    console.log(data[0])

    var div = document.createElement("div");
    div.id = "div"
    document.getElementById("displaybox").appendChild(div);


    var name = document.createElement("h2");
    name.innerHTML = data[a].name;

    var img = document.createElement("IMG");
    img.tagName = data[a].tagline;
    img.src = data[a].image_url;

    var firstBr = document.createElement("h2");
    firstBr.innerHTML = data[a].first_brewed;
  
    document.getElementById("div").appendChild(name);
    document.getElementById("div").appendChild(img);
    document.getElementById("div").appendChild(firstBr);
    img.style.height= "300px";
    img.style.width= "150px";
    
    
    console.log("howmanny"+[i])


}





/* var div = [];
var i = 0

for (i=0;i < 6 ; i++ ){
    
    div[i] = document.createElement("div");
    div[i].id = "div"+i
    document.getElementById("displaybox").appendChild(div[i]);


    api()
    console.log(div[i].id);

    }
    

     function api(){
        console.log();
        return fetch("https://api.punkapi.com/v2/beers/random")
        .then(data =>  data.json())
        
        
        var name = document.createElement("h2");
        name.innerHTML = data[0].name;

        var img = document.createElement("IMG");
        img.tagName = data[0].tagline;
        img.src = data[0].image_url;

        var firstBr = document.createElement("h2");
        firstBr.innerHTML = data[0].first_brewed;

        console.log("welke shit is deze div"+i)
        
        document.getElementById("div"+i).appendChild(name);
        document.getElementById("div"+i).appendChild(img);
        document.getElementById("div"+i).appendChild(firstBr);


        
        img.style.height= "300px";
        img.style.width= "150px";
        }

 */


/* 
    async function api(){
        console.log();

        const url=("https://api.punkapi.com/v2/beers/random");
        const res = await fetch(url);
        const data = await res.json();
               

        var name = document.createElement("h2");
        name.innerHTML = data[0].name;

        var img = document.createElement("IMG");
        img.tagName = data[0].tagline;
        img.src = data[0].image_url;

        var firstBr = document.createElement("h2");
        firstBr.innerHTML = data[0].first_brewed;

        console.log("welke shit is deze div"+i)
        
        document.getElementById("div"+i).appendChild(name);
        document.getElementById("div"+i).appendChild(img);
        document.getElementById("div"+i).appendChild(firstBr);


        
        img.style.height= "300px";
        img.style.width= "150px";
    }
 */