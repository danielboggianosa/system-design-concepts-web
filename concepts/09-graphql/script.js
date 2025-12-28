
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const output = document.getElementById('json-output');

const database = {
    name: "Alice",
    email: "alice@example.com",
    posts: ["Post 1", "Post 2"]
};

function updateOutput() {
    const selected = {};

    checkboxes.forEach(cb => {
        const field = cb.id.replace('field-', '');
        if (cb.checked) {
            selected[field] = database[field];
        }
    });

    const response = {
        data: {
            user: selected
        }
    };

    output.textContent = JSON.stringify(response, null, 2);

    // Highlight effect
    output.style.opacity = "0.5";
    setTimeout(() => output.style.opacity = "1", 200);
}

checkboxes.forEach(cb => {
    cb.addEventListener('change', updateOutput);
});
