
const primary = document.getElementById('primary');
const r1 = document.getElementById('r1');
const r2 = document.getElementById('r2');

function blink(element) {
    element.style.borderColor = 'var(--primary)';
    element.style.boxShadow = '0 0 20px var(--primary)';
    setTimeout(() => {
        element.style.borderColor = 'var(--glass-border)';
        element.style.boxShadow = 'none';
    }, 300);
}

function writeData() {
    blink(primary);
    setTimeout(() => {
        blink(r1);
        blink(r2);
    }, 500);
}
        