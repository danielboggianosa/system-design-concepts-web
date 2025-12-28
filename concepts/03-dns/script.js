
const btn = document.getElementById('lookup-btn');
const arrow = document.querySelector('.arrow-down');
const dnsServer = document.querySelector('.dns-server .icon');
const lookupText = document.getElementById('lookup-process');
const result = document.getElementById('result-display');

function animateDNS() {
    btn.disabled = true;

    // Reset
    arrow.style.opacity = '0';
    lookupText.style.opacity = '0';
    result.style.opacity = '0';
    result.style.transform = 'translateY(20px)';
    dnsServer.style.animation = 'none';

    // Step 1: Send Request
    setTimeout(() => {
        arrow.style.opacity = '1';
        arrow.style.animation = 'slideDown 0.5s forwards';
    }, 100);

    // Step 2: DNS Searching
    setTimeout(() => {
        dnsServer.style.animation = 'scan 0.5s infinite';
        lookupText.style.opacity = '1';
    }, 600);

    // Step 3: Result Found
    setTimeout(() => {
        dnsServer.style.animation = 'none';
        lookupText.style.opacity = '0';

        result.style.opacity = '1';
        result.style.transform = 'translateY(0)';

        arrow.style.transform = 'rotate(180deg)'; // Arrow points back up? Or just show result

        setTimeout(() => {
            btn.disabled = false;
            arrow.style.transform = 'rotate(0deg)';
        }, 1500);

    }, 2000);
}

btn.addEventListener('click', animateDNS);
setTimeout(animateDNS, 500);
