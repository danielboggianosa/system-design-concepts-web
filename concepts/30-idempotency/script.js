
let charged = false;
function charge() {
    if(!charged) {
        document.getElementById('charge-count').innerText = "1";
        document.getElementById('balance').innerText = "$10";
        charged = true;
    } else {
        // Do nothing or shake
        const btn = document.querySelector('.giant-btn');
        btn.style.transform = 'translateX(5px)';
        setTimeout(() => btn.style.transform = 'translateX(0)', 100);
    }
}
        