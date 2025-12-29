
const dataset = document.getElementById('dataset');
const statusDiv = document.getElementById('status');
const itemCount = 20;
const targetId = 15;

function init() {
    dataset.innerHTML = '';
    for(let i=1; i<=itemCount; i++) {
        const item = document.createElement('div');
        item.className = 'data-item';
        item.innerText = i;
        item.id = `item-${i}`;
        dataset.appendChild(item);
    }
}

async function fullScan() {
    init();
    statusDiv.innerText = "Scanning...";
    for(let i=1; i<=itemCount; i++) {
        const item = document.getElementById(`item-${i}`);
        item.style.backgroundColor = 'var(--secondary)';
        await new Promise(r => setTimeout(r, 100)); // Simulate time
        if(i === targetId) {
            item.style.backgroundColor = 'var(--color-group-1)';
            statusDiv.innerText = "Found via Full Scan (Slow)";
            return;
        }
        item.style.backgroundColor = '#334155';
    }
}

async function indexSeek() {
    init();
    statusDiv.innerText = "Using Index...";
    await new Promise(r => setTimeout(r, 300)); // Simulate lookup
    const item = document.getElementById(`item-${targetId}`);
    item.style.backgroundColor = 'var(--color-group-1)';
    statusDiv.innerText = "Found via Index (Fast)";
}

init();
        