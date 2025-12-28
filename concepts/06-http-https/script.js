
const btn = document.getElementById('send-data-btn');
const packet = document.getElementById('data-packet');
const hacker = document.getElementById('hacker');
const tooltip = document.getElementById('hacker-tooltip');
const statusText = document.getElementById('status-text');
const modeBtns = document.querySelectorAll('.mode-btn');

let currentMode = 'http';

function setMode(mode) {
    currentMode = mode;
    modeBtns.forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');

    // Reset
    packet.style.animation = 'none';
    packet.style.opacity = '0';
    hacker.style.opacity = '0';
    tooltip.style.opacity = '0';
    statusText.innerText = "";

    if (mode === 'http') {
        packet.innerText = "password123";
        packet.style.background = "#fff";
        packet.style.color = "#000";
    } else {
        packet.innerText = "🔒 8x#k92@!";
        packet.style.background = "#4ade80"; // Green for secure
        packet.style.color = "#000";
    }
}

function animateData() {
    btn.disabled = true;
    packet.style.animation = 'none';

    // Hacker appears
    hacker.style.opacity = '1';

    // Start travel
    void packet.offsetWidth;
    packet.style.opacity = '1';
    packet.style.animation = 'travel 3s linear forwards';

    statusText.innerText = "Transmitting data...";

    // At 50% (Hacker intercept)
    setTimeout(() => {
        if (currentMode === 'http') {
            tooltip.innerText = "I hacked: password123";
            tooltip.style.background = "#ef4444";
            statusText.innerText = "⚠️ DANGER: Data Intercepted!";
        } else {
            tooltip.innerText = "I can't read this! 🤬";
            tooltip.style.background = "#333";
            statusText.innerText = "✅ SECURE: Hacker cannot decrypt.";
        }
        tooltip.style.opacity = '1';
    }, 1500);

    setTimeout(() => {
        btn.disabled = false;
        // Reset tooltip for next run
        setTimeout(() => {
            tooltip.style.opacity = '0';
            hacker.style.opacity = '0';
            packet.style.opacity = '0';
            statusText.innerText = "";
        }, 2000);
    }, 3500);
}

btn.addEventListener('click', animateData);
setMode('http'); // Init
