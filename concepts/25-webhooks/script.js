
function triggerEvent() {
    const arrow = document.getElementById('hook-arrow');
    const log = document.getElementById('log');
    
    log.innerText = "Event Occurred! Preparing POST request...";
    arrow.style.transform = 'translateX(100px)';
    
    setTimeout(() => {
        document.getElementById('consumer').style.borderColor = 'var(--primary)';
        log.innerText = "POST Received! 200 OK.";
        setTimeout(() => {
            arrow.style.transform = 'translateX(0)';
            document.getElementById('consumer').style.borderColor = 'var(--glass-border)';
        }, 1000);
    }, 600);
}
        