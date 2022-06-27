import './style.scss';


const msecElement = document.getElementById('ms');
const secElement = document.getElementById('sec');
const minElement = document.getElementById('min');
const hrElement = document.getElementById('hr');

const resetBtn = document.getElementById('reset');
const pointBtn = document.getElementById('point');
const stopBtn = document.getElementById('stop');
const startBtn = document.getElementById('start');
const saveBtn = document.getElementById('save');




function startCount() {
    milliseconds++;
    if(milliseconds > 99) {
        milliseconds = 0;
        seconds++;
        secElement.innerText = '0' + seconds;
    }
    if(milliseconds < 9) {
        msecElement.innerText = '0' + milliseconds;
    }
    if(milliseconds > 9) {
        msecElement.innerText = milliseconds;
    }


    if(seconds > 59) {
        seconds = 0;
        minutes++;
        minElement.innerText = '0' + minutes;
    }
    if(seconds < 9) {
        secElement.innerText = '0' + seconds;
    }
    if(seconds > 9) {
        secElement.innerText = seconds;
    }

    if(minutes > 59) {
        minutes = 0;
        hours++;
        hrElement.innerText = '0' + hours;
    }
    if(minutes < 9) {
       minElement.innerText = '0' + minutes;
    }
    if(minutes > 9) {
       minElement.innerText = minutes;
    }
}
function newPoint() {
    document.body.appendChild(list);
    let li = document.createElement('li');
    li.className = "point-list__point"
    // li.innerText = hours + " : " + minutes + " : " + seconds + " : " + milliseconds;
    
    if(hours > 59) {
        li.innerText += hours + " : ";
    }
    if(hours <= 9) {
        li.innerText += '0' + hours + " : ";
    }
    if(hours > 9) {
        li.innerText += hours + " : ";
    }

    if(seconds > 59) {
        li.innerText += seconds + " : ";
    }
    if(seconds <= 9) {
        li.innerText += '0' + seconds + " : ";
    }
    if(seconds > 9) {
        li.innerText += seconds + " : ";
    }

    if(milliseconds > 99) {
        li.innerText += '00';
    }
    if(milliseconds <= 9) {
        li.innerText += '0' + milliseconds;
    }
    if(milliseconds > 9) {
        li.innerText += milliseconds;
    }

    list.prepend(li);
}
function resetCount() {
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    // localStorage.clear();
    localStorage.setItem('ms', '00');    
    localStorage.setItem('s', '00'); 
    localStorage.setItem('m', '00'); 
    localStorage.setItem('h', '00'); 
    // while (list.firstChild) {
    //     list.removeChild(list.firstChild);
    // }

    msecElement.innerText = '00';
    secElement.innerText = '00';
    minElement.innerText = '00';
    hrElement.innerText = '00';
}
function saveTime() {
    localStorage.setItem('ms', milliseconds);
    localStorage.setItem('s', seconds);
    localStorage.setItem('m', minutes);
    localStorage.setItem('h', hours);
}






if(localStorage.getItem('ms') < 9) {
    msecElement.innerText = '0' + parseInt((localStorage.getItem('ms')), 10);
}
if(milliseconds > 9) {
    msecElement.innerText =  parseInt(localStorage.getItem('ms'));
}

if(localStorage.getItem('s') < 9) {
    secElement.innerText = '0' + parseInt((localStorage.getItem('s')), 10);
}
if(seconds > 9) {
    secElement.innerText =  parseInt(localStorage.getItem('s'));
}

if(localStorage.getItem('m') < 9) {
    minElement.innerText = '0' + parseInt(localStorage.getItem('m'));
}
if(minutes > 9) {
    minElement.innerText =  parseInt(localStorage.getItem('m'));
}

if(localStorage.getItem('h') < 9) {
    hrElement.innerText = '0' + parseInt(localStorage.getItem('h'));
}
 if(hours > 9) {
    hrElement.innerText =  parseInt(localStorage.getItem('h'));
}


var milliseconds = parseInt(localStorage.getItem('ms'),),
    seconds = parseInt(localStorage.getItem('s')),
    minutes = parseInt(localStorage.getItem('m')),
    hours = parseInt(localStorage.getItem('h')),
    interval;

var list = document.createElement('ol');
    list.className = "point-list";




startBtn.addEventListener('click',() => {
    clearInterval(interval);
    interval = setInterval(startCount, 10);
    document.getElementById('reset').style= "cursor: not-allowed; background-color: rgba(30, 30, 61, 0); box-shadow: 1px 1px 1px 0px  rgba(30, 30, 61, 0); color: #D4EDFF";
    resetBtn.disabled = true;
});
stopBtn.addEventListener('click',() => {
    clearInterval(interval)
    document.getElementById('reset').style= "cursor: pointer";
    resetBtn.disabled = false;
});
resetBtn.addEventListener('click', () => resetCount())
pointBtn.addEventListener('click', () => newPoint());
saveBtn.addEventListener('click', () => saveTime());
