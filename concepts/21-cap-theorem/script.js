
function pick(type) {
    const desc = document.getElementById('cap-desc');
    if(type === 'CP') desc.innerText = "Consistent & Partition Tolerant. (e.g. Banking)";
    if(type === 'AP') desc.innerText = "Available & Partition Tolerant. (e.g. Social Feed)";
    if(type === 'CA') desc.innerText = "Consistent & Available. (Hard in distributed systems)";
}
        