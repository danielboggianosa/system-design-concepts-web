
const btn = document.getElementById('ping-btn');
const packetA = document.getElementById('packet-a');
const packetB = document.getElementById('packet-b');
const latencyA = document.getElementById('latency-a');
const latencyB = document.getElementById('latency-b');

function animatePing() {
    btn.disabled = true;

    // Reset
    packetA.style.left = '0';
    packetA.style.transform = 'translateX(-100%)';
    packetA.style.transition = 'none';

    packetB.style.left = '0';
    packetB.style.transform = 'translateX(-100%)';
    packetB.style.transition = 'none';

    latencyA.innerText = '0ms';
    latencyB.innerText = '0ms';

    // Force Reflow
    void packetA.offsetWidth;

    // Start Animation
    // Path A: Low Latency (Fast) - Total trip 0.5s
    const timeA = 500;
    const timeB = 2500;

    let start = Date.now();

    // Animate via JS for precise timing control or CSS transitions
    requestAnimationFrame((timestamp) => {
        // Just use CSS transitions for smooth movement but update text timer
        packetA.style.transition = \`left \${timeA/2}ms linear, transform \${timeA/2}ms linear\`;
        packetB.style.transition = \`left \${timeB/2}ms linear, transform \${timeB/2}ms linear\`;

        // Go to right
        packetA.style.left = '100%';
        packetA.style.transform = 'translateX(0)';
        
        packetB.style.left = '100%';
        packetB.style.transform = 'translateX(0)';

        // Return trip logic needs to be sequenced
        setTimeout(() => {
            packetA.style.left = '0%';
            packetA.style.transform = 'translateX(-100%)';
        }, timeA/2);

        setTimeout(() => {
            packetB.style.left = '0%';
            packetB.style.transform = 'translateX(-100%)';
        }, timeB/2);

        // Timer
        const interval = setInterval(() => {
            const now = Date.now();
            const elapsed = now - start;
            
            if (elapsed < timeA) latencyA.innerText = \`\${elapsed}ms\`;
            else latencyA.innerText = \`\${timeA}ms\`;

            if (elapsed < timeB) latencyB.innerText = \`\${elapsed}ms\`;
            else latencyB.innerText = \`\${timeB}ms\`;

            if (elapsed > timeB) clearInterval(interval);

        }, 50);

        setTimeout(() => {
            btn.disabled = false;
        }, timeB + 100);
    });
}

btn.addEventListener('click', animatePing);
setTimeout(animatePing, 500);
