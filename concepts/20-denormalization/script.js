
const status = document.getElementById('q-status');
const norm = document.getElementById('norm');
const denorm = document.getElementById('denorm');

let isDenormalized = false;

function startQuery() {
    isDenormalized = !isDenormalized;
    
    if(isDenormalized) {
        norm.style.opacity = '0.3';
        denorm.style.opacity = '1';
        status.innerText = "Querying Single Table... Done (Fast)!";
    } else {
        norm.style.opacity = '1';
        denorm.style.opacity = '0.3';
        status.innerText = "Joining Tables... Process... Done (Slower)";
    }
}
        