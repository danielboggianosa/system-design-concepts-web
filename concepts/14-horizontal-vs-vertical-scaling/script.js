
const container = document.getElementById('server-container');
const mainServer = document.getElementById('main-server');

let verticalLevel = 1;
let horizontalCount = 1;

function scaleVertical() {
    // If we have multiple servers, reset to 1 before vertical scaling (for clarity)
    if (horizontalCount > 1) {
        resetScaling();
        // Wait small tick
        setTimeout(() => scaleVertical(), 100);
        return;
    }

    if (verticalLevel < 3) {
        verticalLevel++;
        mainServer.className = `server-unit level-${verticalLevel}`;
        mainServer.querySelector('.power-level').innerText = `${verticalLevel}x Power`;
    }
}

function scaleHorizontal() {
    // If we have a giant server, reset first (optional, but cleaner)
    if (verticalLevel > 1) {
        resetScaling();
        setTimeout(() => scaleHorizontal(), 100);
        return;
    }

    if (horizontalCount < 4) {
        horizontalCount++;
        const newServer = document.createElement('div');
        newServer.className = 'server-unit';
        newServer.innerHTML = `
            <span class="icon">🤖</span>
            <span class="power-level">1x Power</span>
        `;

        // Animation
        newServer.style.transform = "scale(0)";
        container.appendChild(newServer);

        requestAnimationFrame(() => {
            newServer.style.transform = "scale(1)";
        });
    }
}

function resetScaling() {
    verticalLevel = 1;
    horizontalCount = 1;

    // Clear all except main
    container.innerHTML = "";
    container.appendChild(mainServer);

    // Reset main
    mainServer.className = 'server-unit';
    mainServer.querySelector('.power-level').innerText = '1x Power';
}
