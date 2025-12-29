
function saveData() {
    const val = document.getElementById('shardInput').value;
    if(!val) return;
    
    // Simple even/odd sharding logic
    const isEven = val % 2 === 0;
    const targetId = isEven ? 's2-data' : 's1-data';
    
    const container = document.getElementById(targetId);
    const item = document.createElement('div');
    item.innerText = `User ${val}`;
    item.className = 'stored-item fade-in';
    container.appendChild(item);
}
        