
let satellites=""
function sateliteData() {
    fetch('http://localhost:3000/satellites')
  .then((response) => response.json())
  .then((data) => functionData(data))
  
}
sateliteData()
function functionData(satellites) {

    let satelliteID = document.getElementById("ID");
    let satelliteCountry = document.getElementById("country");
    let satelliteLaunchDate = document.getElementById("launch-date");
    let satelliteMass = document.getElementById("mass");
    let satelliteLauncher = document.getElementById("launcher");
    let sateliteImage=document.getElementById("satelite-image")
    let searchBtn=document.getElementById("btn")
    satellites.forEach((satellite) => {
        sateliteImage.src=satellite.image;
        satelliteID.innerText = `ID:${satellite.id}`;
        satelliteCountry.innerText = `Coutry:${satellite.country}`;
        satelliteLaunchDate.innerText = `Launch Date:${satellite.launch_date}`;
        satelliteMass.innerText = `Mass:${satellite.mass}`;
        satelliteLauncher.innerHTML = `Launcher:${satellite.launcher}`;
    });

}
function functionData(data) {
    let dilEl=document.getElementById("satellite-list");
    let satellites=""
    for (let  i= 0;  i< data.length; i++) {
        let satellite = data[i];
    satellites=satellites+
    `<div id="satellite-list">
    <img id="satelite-image" src="${satellite.image}" alt="image of satelite">
    
    <div id="ID">
    ID:${satellite.id}
    </div>
    <div id="country"> 
    Coutry:${satellite.country}
    </div> 
    <div id="launch-date">
    Launch Date:${satellite.launch_date}
    </div>
    <div id="mass"> 
    Mass:${satellite.mass}
    </div>
    <div id="launcher"> 
    Launcher:${satellite.launcher}
    </div>
    <div id="likes">
    <button id="like">like</button> 
    <span>0</span>
 </div>
 <div id="commentsd">
 <input type="text" placeholder="comments"/> 
 <button id="ok">Ok</button>
</div> 
</div>
<div>
<button id="back">Previous</button>
<button id="front">Next</button>
</div>
</div>`}
dilEl.innerHTML=satellites;
let likee=0;

let myLikes=document.getElementById("likes") 

let y=document.getElementById("like")
y.addEventListener("click",likesIcrea)
 function likesIcrea() {
    console.log("Like")
    likee=likee+1;
    
    incrimanto() 
 }       
    
  function incrimanto() {
    span=myLikes.getElementsByTagName("span")[0];
    span.innerText=likee ;
  } 
//  s=document.getElementById("subscribe")
//   s.addEventListener("click",myfunc())
//     function myfunc() {
// alert `Thanks for subscribing`
//     }
let p =document.getElementById("movements")
document.getElementById("back").addEventListener("click",backbut)
document.getElementById("front").addEventListener("click",frontbut)

function backbut() {
  console.log("previous")
    alert (`Only one satelite of type found`)
}
function frontbut() {
  console.log("Next")
    alert (`The next satelite of this type will be launced soon`)
}
document.getElementById("commentsd")
let inputdat=document.getElementsByTagName("input")
document.getElementById("ok").addEventListener("click",okdisplay)

function okdisplay() {
  console.log(inputdat)
}

}
sateliteData()

        
    
  


