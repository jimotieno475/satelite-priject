
let satellites=""
function sateliteData() {
    fetch('http://localhost:3000/satellites')
  .then((response) => response.json())
  .then((data) => functionData(data))
  
}
sateliteData()
// function functionData(satellites) {

//     let satelliteID = document.getElementById("ID");
//     let satelliteCountry = document.getElementById("country");
//     let satelliteLaunchDate = document.getElementById("launch-date");
//     let satelliteMass = document.getElementById("mass");
//     let satelliteLauncher = document.getElementById("launcher");
//     let sateliteImage=document.getElementById("satelite-image")
//     let searchBtn=document.getElementById("btn")
//     satellites.forEach((satellite) => {
//         sateliteImage.src=satellite.image;
//         satelliteID.innerText = `ID:${satellite.id}`;
//         satelliteCountry.innerText = `Coutry:${satellite.country}`;
//         satelliteLaunchDate.innerText = `Launch Date:${satellite.launch_date}`;
//         satelliteMass.innerText = `Mass:${satellite.mass}`;
//         satelliteLauncher.innerHTML = `Launcher:${satellite.launcher}`;
//     });

// }
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
    <button class="like">like</button> 
    <span class="spans">0</span>
 </div>
 <div>
 <input type="text" placeholder="comments"/> 
 <button class="ok">Ok</button>
</div> 
</div>
<div>
<button class="back">Previous</button>
<button class="front">Next</button>
</div>
</div>`}
dilEl.innerHTML=satellites;
let likee=0;

let myLikes=document.getElementById("likes") 

let likeees=document.getElementsByClassName("like")
console.log(likeees)
for (let i = 0; i < likeees.length; i++) {
  let likeee = likeees[i];
  console.log(likeee);
  likeee.addEventListener("click",likesIcrea)
 function likesIcrea() {
    console.log("Like")
    likee=likee+1;
    alert `due to technicall issue all satelites will be liked when you like one of them the issue will be fixed soon`
increamanto()
  }
 } 


 function increamanto(){
 let spans=document.getElementsByClassName("spans");
    console.log(spans) 
  for (let i = 0; i < spans.length; i++) {
    const span = spans[i];
    console.log(span)
   span.innerText=likee ;
 }
}
      
document.getElementById("movements")
let backs=document.getElementsByClassName("back")
console.log (backs)
for (let i = 0; i < backs.length; i++) {
  const back = backs[i];
  console.log(back)
  back.addEventListener("click",backbut)
  function backbut() {
  console.log("previous")
    alert (`Only one satellite of type found`)
}

}
let fronts=document.getElementsByClassName("front")
console.log (fronts)
for (let i = 0; i < fronts.length; i++) {
  const front = fronts[i];
  console.log(front)
  front.addEventListener("click",frontbut)
function frontbut() {
  console.log("Next")
    alert (`The next satellite of this type will be launced soon`)
}

}
let inputdat=document.getElementsByTagName("input").innerText=""
let oks=document.getElementsByClassName("ok")
console.log(oks)
for (let i = 0; i < oks.length; i++) {
  const ok = oks[i];
    console.log(ok)
  ok.addEventListener("click",okdisplay)
  function okdisplay() {
  console.log(inputdat)
  alert (`thanks for your comment it has been received`)
}
}



}



sateliteData()

        
    
  array.forEach(element => {
    
  });


