//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...





setInterval (function(){
async function api(){
    const url=("https://aws.random.cat/meow");
    const res = await fetch(url);
    const data = await res.json();
    return data

}

api().then(data=>{
    console.log(data.file);

    
    var img = document.createElement("IMG")
    document.getElementById("displaybox").appendChild(img);
    img.src = data.file;

    img.style.height= "200px"
    img.style.width= "200px"
})
},1000) 

