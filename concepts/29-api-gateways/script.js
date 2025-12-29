
function route(dest) {
    const s = document.getElementById('s' + dest);
    s.style.background = 'var(--primary)';
    setTimeout(() => s.style.background = '#1e293b', 500);
}
        