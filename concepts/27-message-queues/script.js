
const mq = document.getElementById('mq');
function produce() {
    const m = document.createElement('div');
    m.className = 'mq-msg';
    m.innerText = '✉️';
    mq.appendChild(m);
}
function consume() {
    if(mq.children.length > 0) {
        mq.removeChild(mq.children[0]);
    }
}
        