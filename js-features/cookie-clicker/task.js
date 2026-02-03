
const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let speed = document.getElementById('clicker__speed');
if (!speed) { 
    const speedContainer = document.createElement('div');
    speedContainer.textContent = 'Скорость клика: ';
    speed = document.createElement('span');
    speed.id = 'clicker__speed';
    speed.textContent = '0';
    speedContainer.appendChild(speed);
    cookie.parentNode.appendChild(speedContainer);
}

let lastClickTime = null;   
let isBig = true;        
let clickCount = 0;      
 
cookie.onclick = () => {
  clickCount += 1;
  counter.textContent = clickCount;
  const now = new Date();
  
  if (lastClickTime) {
    const deltaSeconds = (now - lastClickTime) / 1000;  
    const clickSpeed = 1 / deltaSeconds;  
    speed.textContent = clickSpeed.toFixed(2);
  }
  lastClickTime = now;

  if (isBig) {
    cookie.width = 180;
  } else {
    cookie.width = 200;
  }
  isBig = !isBig;
};