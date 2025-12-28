
const packet = document.getElementById('packet');
const stats = document.getElementById('stats');
const edgeServers = document.querySelectorAll('.server.edge');
const modeBtns = document.querySelectorAll('.mode-btn');

let currentMode = 'no-cdn';

function setMode(mode) {
    currentMode = mode;
    modeBtns.forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');

    if (mode === 'cdn') {
        edgeServers.forEach(s => {
            s.style.opacity = '1';
            s.style.boxShadow = '0 0 10px rgba(245, 158, 11, 0.3)';
        });
    } else {
        edgeServers.forEach(s => {
            s.style.opacity = '0.3';
            s.style.boxShadow = 'none';
        });
    }
}

function startStream() {
    document.getElementById('start-btn').disabled = true;
    stats.innerHTML = "";

    // We will simulate 3 users requesting data
    // US User always close to Origin

    const requestUS = simulateRequest('us', 'origin');

    let requestEU, requestAsia;

    if (currentMode === 'no-cdn') {
        requestEU = simulateRequest('eu', 'origin');
        requestAsia = simulateRequest('asia', 'origin');
    } else {
        requestEU = simulateRequest('eu', 'edge-eu');
        requestAsia = simulateRequest('asia', 'edge-asia');
    }

    Promise.all([requestUS, requestEU, requestAsia]).then(() => {
        document.getElementById('start-btn').disabled = false;
        stats.innerHTML += "<br>All downloads complete.";
    });
}

function simulateRequest(userRegion, sourceId) {
    return new Promise(resolve => {
        const userEl = document.querySelector(`.user-${userRegion}`);
        const sourceEl = sourceId === 'origin' ? document.getElementById('origin-server') : document.getElementById(sourceId);

        // Create a temporary packet for this user
        const p = document.createElement('div');
        p.className = 'packet';
        p.innerText = '📦';
        p.style.left = sourceEl.style.left;
        p.style.top = sourceEl.style.top;
        document.querySelector('.world-map').appendChild(p);

        // Calculate distance delay
        // Rough estimate based on left % diff
        const userLeft = parseFloat(getComputedStyle(userEl).left);
        const sourceLeft = parseFloat(getComputedStyle(sourceEl).left);
        const distance = Math.abs(userLeft - sourceLeft);

        // Base latency + distance factor
        const duration = 1000 + (distance * 20);

        // Animate
        p.style.transition = `all ${duration}ms linear`;
        p.style.opacity = '1';

        // Force reflow
        void p.offsetWidth;

        p.style.left = userEl.style.left;
        p.style.top = userEl.style.top;

        setTimeout(() => {
            p.remove();
            const latency = Math.round(duration / 10);
            stats.innerHTML += `User (${userRegion.toUpperCase()}): Downloaded in ${latency}ms<br>`;
            resolve();
        }, duration);
    });
}
