
const slot = document.getElementById('resource-slot');
const consoleOut = document.getElementById('console-output');

let hasResource = false;

function executeMethod(method) {
    if (document.querySelector('.action-btn:disabled')) return; // Simple debounce

    // Lock buttons temporarily if needed, or just let animations play

    switch (method) {
        case 'GET':
            if (hasResource) {
                consoleOut.innerText = "GET /users/1 -> 200 OK (Returning Data)";
                const card = slot.firstElementChild;
                card.style.transform = "scale(1.1)";
                setTimeout(() => card.style.transform = "scale(1)", 300);
            } else {
                consoleOut.innerText = "GET /users/1 -> 404 Not Found";
                consoleOut.style.color = "#ef4444";
                setTimeout(() => consoleOut.style.color = "var(--text-muted)", 1000);
            }
            break;

        case 'POST':
            if (hasResource) {
                consoleOut.innerText = "POST /users -> 409 Conflict (Already Exists)";
                consoleOut.style.color = "#ef4444";
                const card = slot.firstElementChild;
                card.style.animation = "shake 0.3s";
                setTimeout(() => {
                    card.style.animation = "none";
                    consoleOut.style.color = "var(--text-muted)";
                }, 300);
            } else {
                consoleOut.innerText = "POST /users -> 201 Created";
                createResource();
                hasResource = true;
            }
            break;

        case 'PUT':
            if (hasResource) {
                consoleOut.innerText = "PUT /users/1 -> 200 OK (Updated)";
                updateResource();
            } else {
                consoleOut.innerText = "PUT /users/1 -> 404 Not Found (Creating...)";
                createResource(); // PUT can assume create if ID known, simplifying here
                hasResource = true;
            }
            break;

        case 'DELETE':
            if (hasResource) {
                consoleOut.innerText = "DELETE /users/1 -> 204 No Content";
                const card = slot.firstElementChild;
                card.style.animation = "fadeOut 0.3s forwards";
                setTimeout(() => {
                    slot.innerHTML = "";
                    hasResource = false;
                }, 300);
            } else {
                consoleOut.innerText = "DELETE /users/1 -> 404 Not Found";
            }
            break;
    }
}

function createResource() {
    slot.innerHTML = `
        <div class="user-card" style="animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)">
            <h3>John Doe</h3>
            <p>Role: User</p>
        </div>
    `;
}

function updateResource() {
    const card = slot.firstElementChild;
    card.style.transform = "rotateY(90deg)"; // Flip effect start
    card.style.transition = "transform 0.2s";

    setTimeout(() => {
        card.innerHTML = `
            <h3>John Doe</h3>
            <p style="color: var(--accent)">Role: Admin ✨</p>
        `;
        card.style.transform = "rotateY(0deg)"; // Flip back
    }, 200);
}
