
let count = 0;
const limit = 5;
const counter = document.getElementById('counter');
const reqs = document.getElementById('reqs');

function sendReq() {
    count++;
    const r = document.createElement('div');
    r.className = 'req';
    
    if(count > limit) {
        r.style.background = 'red';
        r.innerText = 'Blocked';
        counter.innerText = `${count} (Blocked)`;
    } else {
        r.style.background = 'green';
        counter.innerText = `${count} / ${limit}`;
    }
    
    reqs.appendChild(r);
    
    // Decay
    setTimeout(() => {
        if(count > 0) count--;
        if(r.parentNode) r.parentNode.removeChild(r);
        if(count <= limit) counter.innerText = `${count} / ${limit}`;
    }, 2000);
}
        