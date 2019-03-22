//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...

yy = document.getElementById("yy");
mm = document.getElementById("mm");
dd = document.getElementById("dd");


for(year=1900 ; year<2017 ; year++){
var xy = document.createElement("OPTION");
  xy.setAttribute( "year", year);
  var t = document.createTextNode(year);
  xy.appendChild(t);
  yy.appendChild(xy);

  

}
for(month=1 ; month<13 ; month++){
    var xm = document.createElement("OPTION");
      xm.setAttribute( "value", month);
      var t = document.createTextNode(month);
      xm.appendChild(t);
      mm.appendChild(xm);
    
    }

for(day=1 ; day<32 ; day++){
    var xd = document.createElement("OPTION");
        xd.setAttribute( "year", day);
        var t = document.createTextNode(day);
        xd.appendChild(t);
        dd.appendChild(xd);
    
    }
        
 

function change(){

    var xyy = document.getElementById("yy").selectedIndex;
    var yynum = document.getElementById("yy").getElementsByTagName("option")[xyy].value;

    var xmm = document.getElementById("mm").selectedIndex;
    var mmnum = document.getElementById("mm").getElementsByTagName("option")[xmm].value;

    var xdd = document.getElementById("dd").selectedIndex;
    var ddnum = document.getElementById("dd").getElementsByTagName("option")[xdd].value;
    
    if(yynum > 0 && mmnum > 0 && ddnum > 0){
        
        var d = new Date();
        var today = d.getDate()
        var tomonth = d.getMonth()
        var toyear = d.getFullYear()
        
        console.log(today)
        console.log(tomonth)
        console.log(toyear)
        console.log(yynum)
        console.log(mmnum)
        console.log(ddnum)

///////////////////////probledem ik weet niet wat met de dagen doen als ze negatief zijn in verband met 31 dagen en 30 dagen
///////////////////////wel geen tijd meer ver liezen kom er mss nog op terug

        document.getElementById("uitleg").innerHTML = "you are "+(toyear-yynum)+" years "+(tomonth-mmnum)+" months "+(today-ddnum)+" days old"

        
        
    }   

}









