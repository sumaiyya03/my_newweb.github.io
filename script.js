const container = document.getElementById("pinContainer");

let data = [
  {src:"https://source.unsplash.com/random/300x400?calm", mood:"calm"},
  {src:"https://source.unsplash.com/random/300x400?work", mood:"hustle"},
  {src:"https://source.unsplash.com/random/300x400?aesthetic", mood:"aesthetic"}
];

function displayPins(list){
  container.innerHTML="";
  list.forEach(item=>{
    let img=document.createElement("img");
    img.src=item.src;
    container.appendChild(img);
  });
}

displayPins(data);

function filterMood(mood){
  if(mood==="all") return displayPins(data);
  displayPins(data.filter(d=>d.mood===mood));
}

function toggleDarkMode(){
  document.body.classList.toggle("dark");
}
