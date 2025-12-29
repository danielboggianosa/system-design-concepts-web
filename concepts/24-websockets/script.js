
function send(from) {
    const el = from === 'client' ? document.getElementById('msg-left') : document.getElementById('msg-right');
    el.innerText = '✉️';
    el.style.opacity = '1';
    
    // Animate
    const target = from === 'client' ? '180px' : '-180px';
    el.style.transform = `translateX(${target})`;
    
    setTimeout(() => {
        el.style.opacity = '0.7'; // fade
        setTimeout(() => {
            el.style.transform = 'translateX(0)';
            el.style.opacity = '0';
        }, 500);
    }, 1000);
}
        