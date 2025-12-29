
function upload() {
    const file = document.getElementById('file');
    file.style.transform = 'translate(150px, 0)';
    file.style.opacity = '0';
    setTimeout(() => {
        file.style.transition = 'none';
        file.style.transform = 'translate(0, 0)';
        file.style.opacity = '1';
        setTimeout(() => file.style.transition = 'all 1s', 50);
        
        // Add to bucket
        const b = document.getElementById('bucket');
        b.innerHTML += '.';
    }, 1000);
}
        