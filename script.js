let autoHackStarted = false;

const terminal =
document.getElementById("terminal-body");

const commandInput =
document.getElementById("command");

const hackBtn =
document.getElementById("hackBtn");

const fullBtn =
document.getElementById("fullBtn");

const canvas =
document.getElementById("matrix");

const ctx =
canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*";

const array = letters.split("");

const fontSize = 16;

const columns = canvas.width / fontSize;

const drops = Array.from({length:columns}, ()=>1);

/* MATRIX */
function drawMatrix(){
ctx.fillStyle="rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#00ff66";
ctx.font="16px monospace";

for(let i=0;i<drops.length;i++){
const text=array[Math.floor(Math.random()*array.length)];
ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height && Math.random()>0.975){
drops[i]=0;
}
drops[i]++;
}
}
setInterval(drawMatrix,35);

/* AUTO HACK */
const lines = [
"Initializing hacking tools...",
"Loading exploit modules...",
"Scanning network ports...",
"Detecting firewall strength...",
"Bypassing security layer 1...",
"Bypassing security layer 2...",
"Injecting payload...",
"Accessing hidden server...",
"Decrypting credentials...",
"Stealing admin data...",
"Uploading virus...",
"Covering tracks...",
"Deleting logs...",
"Disabling antivirus...",
"Establishing root access...",
"Downloading confidential files...",
"Extracting database...",
"Finalizing breach...",
"System control acquired...",
"ACCESS GRANTED ✔",
"SYSTEM HACKED SUCCESSFULLY 🔥"
];

function startAutoHack(){
if(autoHackStarted) return;
autoHackStarted=true;

let i=0;

const interval=setInterval(()=>{
if(i<lines.length){
const p=document.createElement("p");
p.className="line";
p.textContent="> "+lines[i];
terminal.appendChild(p);
i++;
}else clearInterval(interval);

terminal.scrollTop=terminal.scrollHeight;
},1100);
}

/* IP TRACKER */
function fakeIPTracker(){

  const ipBox = document.getElementById("ipBox");

  if(!ipBox) return;

  let steps = [
    "Tracing IP...",
    "Connecting server...",
    "Bypassing ISP...",
    "Tracing IP address...",
    "Locating ISP gateway...",
    "Bypassing ISP firewall...",
    "Tracking GPS coordinates...",
    "Region detected: Khulna, Bangladesh",
    "Network provider identified...",
    "Device fingerprinting...",
    "Final triangulation in progress...",
    "IP LOCATION FOUND ✔",
    "STATUS: TRACKED ✔"
  ];

  let i = 0;

  const interval = setInterval(() => {

    if(i < steps.length){
      ipBox.textContent = "> " + steps[i];
      terminal.scrollTop = terminal.scrollHeight;
      i++;
    } else {
      clearInterval(interval);
    }

  }, 1600);
}

/* COMMANDS */
commandInput.addEventListener("keydown",(e)=>{
if(e.key==="Enter"){
const cmd=commandInput.value.toLowerCase();

const p=document.createElement("p");
p.className="line";
p.textContent="> "+cmd;
terminal.appendChild(p);

let res=document.createElement("p");
res.className="line";

if(cmd==="help"){
res.textContent="help, hack, start, clear";
}
else if(cmd==="hack"){
res.textContent="Hacking...";
}
else if(cmd==="start"){
res.textContent="Starting...";
startAutoHack();
fakeIPTracker();
startProgress();
fakeMapTrack();
fakeMapTrack();
startMapDotMovement();
startRadar();
}
else if(cmd==="clear"){
  terminal.innerHTML = "";
return;
}
else{
res.textContent="Unknown command";
}

terminal.appendChild(res);
commandInput.value="";
terminal.scrollTop=terminal.scrollHeight;
}
});

/* HACK BUTTON */
hackBtn.addEventListener("click", () => {

  // শুধু old text clear করবো, structure না ভাঙি
  terminal.querySelectorAll(".line").forEach(el => el.remove());

  startAutoHack();
  fakeIPTracker();
  startProgress();
  fakeMapTrack();
  setInterval(redAlert, 3000);
  fakeMapTrack();
  startMapDotMovement();
  startRadar();

});

/* FULLSCREEN */
fullBtn.addEventListener("click",()=>{
if(!document.fullscreenElement){
document.documentElement.requestFullscreen();
}else{
document.exitFullscreen();
}
});

function startProgress(){

  const text = document.getElementById("progressText");
  const fill = document.getElementById("progressFill");

  let progress = 0;

  const interval = setInterval(() => {

    if(progress <= 100){

      text.textContent = "Hacking Progress: " + progress + "%";
      fill.style.width = progress + "%";

      progress += 5;

    } else {
      clearInterval(interval);
    }

  }, 1000);
}

function fakeMapTrack(){

  const mapText = document.getElementById("mapText");

  const steps = [
    "Scanning global servers...",
    "USA nodes connected...",
    "Europe firewall bypassed...",
    "Asia network detected...",
    "Bangladesh node found...",
    "Khulna region locked...",
    "TARGET LOCATED ON MAP ✔"
  ];

  let i = 0;

  const interval = setInterval(() => {

    if(i < steps.length){

      mapText.textContent = "> " + steps[i];

      i++;

    } else {
      clearInterval(interval);
    }

  }, 2600);
}

function redAlert(){

  const flash = document.getElementById("alertFlash");

  flash.style.opacity = "0.4";

  setTimeout(() => {
    flash.style.opacity = "0";
  }, 200);
}

function startEffects(){
  setInterval(shakeScreen, 4000);

  setTimeout(() => {
    redAlert();
    shakeScreen();
  }, 5000);
}

startEffects();

function fakeMapTrack(){

  const mapText = document.getElementById("mapText");

  let steps = [
    "Scanning global network nodes...",
    "Connecting USA servers...",
    "Europe firewall bypassed...",
    "Asia data stream detected...",
    "India node scanned...",
    "Myanmar node scanned...",
    "Bangladesh signal strong...",
    "Locating Khulna region...",
    "TARGET LOCATION LOCKED ✔"
  ];
  
  function startRadar(){

  const radar = document.getElementById("radar");

  radar.style.display = "block";

}

  let i = 0;

  const interval = setInterval(() => {

    if(i < steps.length){

      mapText.textContent = "> " + steps[i];

      i++;

    } else {
      clearInterval(interval);
    }

  }, 2200);
}

function startMapDotMovement(){

  const dot = document.getElementById("dot");
  const text = document.getElementById("mapText");

  let positions = [
    {left:"10%", msg:"Scanning USA servers..."},
    {left:"25%", msg:"Europe network detected..."},
    {left:"45%", msg:"Asia nodes active..."},
    {left:"65%", msg:"India region scanning..."},
    {left:"80%", msg:"Bangladesh signal strong..."},
    {left:"90%", msg:"TARGET LOCKED ✔"}
  ];

  let i = 0;

  const interval = setInterval(() => {

    if(i < positions.length){

      dot.style.left = positions[i].left;
      text.textContent = "> " + positions[i].msg;

      i++;

    } else {
      clearInterval(interval);
    }

  }, 1200);
}