
const writeBtn = document.getElementById('write-btn');
const readBtn = document.getElementById('read-btn');
const particle = document.getElementById('db-particle');
const layers = document.querySelectorAll('.layer');

function animateDB(type) {
    // Disable buttons
    writeBtn.disabled = true;
    readBtn.disabled = true;

    // Reset
    particle.style.animation = 'none';
    particle.style.opacity = '1';

    // Trigger Reflow
    void particle.offsetWidth;

    if (type === 'write') {
        particle.style.backgroundColor = 'var(--primary)';
        particle.style.boxShadow = '0 0 10px var(--primary)';
        particle.style.animation = 'writeDown 1s ease-in forwards';

        setTimeout(() => {
            // DB Impact effect
            layers.forEach(l => l.style.animation = 'swell 0.3s');
            setTimeout(() => layers.forEach(l => l.style.animation = 'none'), 300);

            enableButtons();
        }, 1000);

    } else {
        // Read
        particle.style.backgroundColor = 'var(--secondary)';
        particle.style.boxShadow = '0 0 10px var(--secondary)';

        // Start from bottom
        particle.style.animation = 'readUp 1s ease-out forwards';

        // DB Flash first
        layers.forEach(l => l.style.borderColor = 'var(--secondary)');
        setTimeout(() => layers.forEach(l => l.style.borderColor = '#64748b'), 500);

        setTimeout(() => {
            enableButtons();
        }, 1000);
    }
}

function enableButtons() {
    writeBtn.disabled = false;
    readBtn.disabled = false;
}

writeBtn.addEventListener('click', () => animateDB('write'));
readBtn.addEventListener('click', () => animateDB('read'));
