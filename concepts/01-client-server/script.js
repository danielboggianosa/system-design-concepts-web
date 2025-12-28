
const reqPacket = document.getElementById('req-packet');
const resPacket = document.getElementById('res-packet');
const serverStatus = document.getElementById('server-status');
const restartBtn = document.getElementById('restart-btn');

let isAnimating = false;

function animateClientServer() {
    if (isAnimating) return;
    isAnimating = true;
    restartBtn.disabled = true;
    restartBtn.textContent = "Processing...";
    restartBtn.style.opacity = "0.5";

    // Reset
    reqPacket.style.animation = 'none';
    resPacket.style.animation = 'none';
    serverStatus.style.backgroundColor = '#333';

    // Trigger Request
    // Force reflow
    void reqPacket.offsetWidth;

    reqPacket.style.opacity = '1';
    reqPacket.style.animation = 'sendRequest 1.5s ease-in-out forwards';

    // When Request hits Server
    setTimeout(() => {
        // Server Processing
        serverStatus.style.backgroundColor = '#4ade80'; // Green
        serverStatus.style.boxShadow = '0 0 10px #4ade80';

        // Processing Delay
        setTimeout(() => {
            serverStatus.style.backgroundColor = '#333';
            serverStatus.style.boxShadow = 'none';
            reqPacket.style.opacity = '0'; // Hide Request

            // Trigger Response
            resPacket.style.opacity = '1';
            resPacket.style.animation = 'sendResponse 1.5s ease-in-out forwards';

            // Complete
            setTimeout(() => {
                isAnimating = false;
                restartBtn.disabled = false;
                restartBtn.textContent = "Send Request";
                restartBtn.style.opacity = "1";
            }, 1500);

        }, 800); // 800ms processing time

    }, 1500); // 1.5s travel time
}

restartBtn.addEventListener('click', animateClientServer);

// Auto play on load
setTimeout(animateClientServer, 500);
