
const packet = document.getElementById('ip-packet');
const btn = document.getElementById('send-ip-btn');
const houses = document.querySelectorAll('.house');
const targetHouse = document.querySelector('.house.target');

function animateIP() {
    btn.disabled = true;

    // Reset
    packet.style.animation = 'none';
    houses.forEach(h => h.classList.remove('active'));
    void packet.offsetWidth; // Trigger reflow

    // Animate
    packet.style.animation = 'deliverPacket 2s ease-in-out forwards';

    // Highlight houses as it passes? No, just highlight target on arrival
    setTimeout(() => {
        targetHouse.classList.add('active');
        targetHouse.style.filter = "brightness(1.5)";
    }, 1800);

    setTimeout(() => {
        btn.disabled = false;
        setTimeout(() => {
            targetHouse.classList.remove('active');
            targetHouse.style.filter = "none";
        }, 1000);
    }, 2500);
}

btn.addEventListener('click', animateIP);
setTimeout(animateIP, 500);
