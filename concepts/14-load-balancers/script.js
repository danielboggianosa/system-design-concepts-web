
let currentServerIndex = 0;
const serverCount = 3;
const container = document.getElementById('visualization');
const lb = document.querySelector('.balancer');

function addTraffic(amount) {
    let delay = 0;
    for (let i = 0; i < amount; i++) {
        setTimeout(() => {
            spawnRequest();
        }, delay);
        delay += 300; // Stagger burst
    }
}

function spawnRequest() {
    const packet = document.createElement('div');
    packet.className = 'request-packet';

    // Start pos (above LB)
    const lbRect = lb.getBoundingClientRect();
    const startX = lbRect.left + lbRect.width / 2 - 10;
    const startY = lbRect.top - 50;

    packet.style.left = startX + 'px';
    packet.style.top = startY + 'px';

    document.body.appendChild(packet);

    // Animate to LB
    const lbY = lbRect.top + lbRect.height / 2 - 10;

    packet.animate([
        { top: startY + 'px', opacity: 0 },
        { top: lbY + 'px', opacity: 1 }
    ], {
        duration: 300,
        fill: 'forwards',
        easing: 'ease-in'
    }).onfinish = () => {
        // Route to server (Round Robin)
        routeToServer(packet);
    };
}

function routeToServer(packet) {
    // Determine target server
    const targetId = `server-${currentServerIndex + 1}`;
    const serverEl = document.getElementById(targetId);

    // Update index for next time
    currentServerIndex = (currentServerIndex + 1) % serverCount;

    const sRect = serverEl.getBoundingClientRect();
    const targetX = sRect.left + sRect.width / 2 - 10;
    const targetY = sRect.top + sRect.height / 2 - 10;
    const currentPacketRect = packet.getBoundingClientRect();

    packet.animate([
        { top: currentPacketRect.top + 'px', left: currentPacketRect.left + 'px' },
        { top: targetY + 'px', left: targetX + 'px' }
    ], {
        duration: 400,
        fill: 'forwards',
        easing: 'ease-out'
    }).onfinish = () => {
        packet.remove();
        processRequest(serverEl);
    };
}

function processRequest(serverEl) {
    serverEl.classList.add('active');

    // Update Load Bar
    const fill = serverEl.querySelector('.fill');
    let currentLoad = parseInt(fill.style.width) || 0;
    currentLoad = Math.min(currentLoad + 20, 100);
    fill.style.width = currentLoad + '%';

    // Simulate processing
    setTimeout(() => {
        serverEl.classList.remove('active');
        // Reduce load
        let newLoad = parseInt(fill.style.width) || 0;
        newLoad = Math.max(newLoad - 20, 0);
        fill.style.width = newLoad + '%';
    }, 1000);
}
