
const btn = document.getElementById('order-btn');
const waiter = document.getElementById('waiter');
const bubble = document.getElementById('order-bubble');
const statusMsg = document.getElementById('api-status');

function animateAPI() {
    btn.disabled = true;

    // Reset positions
    waiter.style.transform = 'translate(0, 0)';
    bubble.style.opacity = '0';
    bubble.innerText = "📝 Order";

    // Step 1: Client -> Waiter (Customer gives order)
    statusMsg.innerText = "Client sends Request (Order) to API...";

    // Move waiter to customer
    waiter.style.transform = 'translateX(-100px)'; // Adjust based on layout distance estimate

    setTimeout(() => {
        // Waiter takes order
        bubble.style.opacity = '1';

        setTimeout(() => {
            // Step 2: Waiter -> Kitchen
            statusMsg.innerText = "API routes Request to System...";
            waiter.style.transform = 'translateX(100px)'; // To Kitchen

            setTimeout(() => {
                // Kitchen prepares
                statusMsg.innerText = "System processes Request...";
                bubble.innerText = "⚙️ Processing";

                setTimeout(() => {
                    // Step 3: Kitchen -> Waiter -> Customer
                    statusMsg.innerText = "System returns Response (Data)...";
                    bubble.innerText = "🍔 Response";

                    // Waiter returns
                    waiter.style.transform = 'translateX(-100px)'; // Back to customer

                    setTimeout(() => {
                        // Delivered
                        statusMsg.innerText = "API delivers Response to Client.";

                        setTimeout(() => {
                            // Waiter returns to idle
                            waiter.style.transform = 'translateX(0)';
                            bubble.style.opacity = '0';
                            btn.disabled = false;
                        }, 1000);
                    }, 1500);

                }, 1000); // Prep time (Kitchen)

            }, 1000); // Travel to Kitchen

        }, 500); // Take order time

    }, 500); // Travel to Customer
}

btn.addEventListener('click', animateAPI);
