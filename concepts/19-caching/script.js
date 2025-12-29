
const cacheStorage = document.getElementById('cache-storage');
const statusDisplay = document.getElementById('status-display');
const timeDisplay = document.getElementById('time-display');
const cacheLayer = document.querySelector('.cache-layer');
const dbLayer = document.querySelector('.db-layer');

let cache = new Set();
let isProcessing = false;

function requestData(data) {
    if (isProcessing) return;
    isProcessing = true;

    // Reset
    statusDisplay.innerText = "Requesting '" + data + "'...";
    statusDisplay.style.color = "var(--text-main)";
    timeDisplay.innerText = "Time: ...";
    cacheLayer.classList.remove('active-layer');
    dbLayer.classList.remove('active-layer');

    // Step 1: Check Cache
    setTimeout(() => {
        cacheLayer.classList.add('active-layer');

        if (cache.has(data)) {
            // CACHE HIT
            setTimeout(() => {
                cacheLayer.classList.remove('active-layer');
                statusDisplay.innerText = "⚡ CACHE HIT!";
                statusDisplay.style.color = "#22c55e";
                timeDisplay.innerText = "Time: 10ms (Super Fast)";
                isProcessing = false;
            }, 500);
        } else {
            // CACHE MISS
            setTimeout(() => {
                cacheLayer.classList.remove('active-layer');
                statusDisplay.innerText = "❌ CACHE MISS... Fetching form DB";
                statusDisplay.style.color = "#ef4444";

                // Step 2: Fetch from DB
                setTimeout(() => {
                    dbLayer.classList.add('active-layer');

                    setTimeout(() => {
                        dbLayer.classList.remove('active-layer');
                        addToCache(data);
                        statusDisplay.innerText = "✅ Data Retrieved (and Cached)";
                        statusDisplay.style.color = "var(--text-main)";
                        timeDisplay.innerText = "Time: 500ms (Slow)";
                        isProcessing = false;
                    }, 1500); // Simulate DB delay

                }, 500);

            }, 500);
        }
    }, 300);
}

function addToCache(data) {
    if (cache.has(data)) return;

    // Naive LRU simulation: Limit size to 2
    if (cache.size >= 2) {
        // Remove first item visually
        cacheStorage.firstElementChild.remove();
        const firstVal = cache.values().next().value;
        cache.delete(firstVal);
    }

    cache.add(data);
    const item = document.createElement('div');
    item.className = 'cache-item';
    item.innerText = data;
    cacheStorage.appendChild(item);
}
