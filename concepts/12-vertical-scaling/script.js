
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
