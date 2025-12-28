
const btn = document.getElementById('send-proxy-btn');
const packet = document.getElementById('proxy-packet');
const explanation = document.getElementById('explanation');
const modeBtns = document.querySelectorAll('.mode-btn');

let currentMode = 'forward';

function setMode(mode) {
    currentMode = mode;
    modeBtns.forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');

    const proxyLabel = document.querySelector('.proxy .label');
    const clientLabel = document.querySelector('.client .label');
    const serverLabel = document.querySelector('.server .label');

    if (mode === 'forward') {
        proxyLabel.textContent = "Forward Proxy";
        clientLabel.textContent = "Client (Internal)";
        serverLabel.textContent = "Internet";
        explanation.textContent = "The Server sees the Proxy IP, not the Client IP.";
    } else {
        proxyLabel.textContent = "Reverse Proxy";
        clientLabel.textContent = "Public Internet";
        serverLabel.textContent = "Internal Server";
        explanation.textContent = "The Client talks to the Proxy, never directly to the Server.";
    }
}

function animateProxy() {
    btn.disabled = true;
    packet.style.animation = 'none';

    // Step 1: Client to Proxy
    packet.style.opacity = '1';
    packet.style.transform = 'translateY(-50%) scale(1)';
    packet.style.animation = 'flowStep1 1s cubic-bezier(0.45, 0, 0.55, 1) forwards';

    setTimeout(() => {
        // Change packet color/properties at Proxy to symbolize "masking" or "routing"
        packet.style.backgroundColor = currentMode === 'forward' ? '#a855f7' : '#22d3ee';

        // Step 2: Proxy to Server
        packet.style.animation = 'flowStep2 1s cubic-bezier(0.45, 0, 0.55, 1) forwards';

        setTimeout(() => {
            packet.style.opacity = '0';
            btn.disabled = false;
            packet.style.backgroundColor = '#fff'; // Reset
        }, 1000);

    }, 1000);
}

btn.addEventListener('click', animateProxy);
