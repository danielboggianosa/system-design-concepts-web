
const display = document.getElementById('display-area');
const btns = document.querySelectorAll('.mode-btn');

function showSQL() {
    updateActiveBtn(0);
    display.innerHTML = `
        <div class="table-wrapper">
            <div class="table-title">Users Table</div>
            <div class="row"><span>ID: 1</span> <span>Name: Alice</span></div>
            <div class="row"><span>ID: 2</span> <span>Name: Bob</span></div>
        </div>
        <div class="rel-line"></div>
        <div class="table-wrapper">
            <div class="table-title">Orders Table</div>
            <div class="row"><span>ID: 101</span> <span>User_ID: 1</span></div>
            <div class="row"><span>ID: 102</span> <span>User_ID: 2</span></div>
        </div>
    `;
}

function showNoSQL() {
    updateActiveBtn(1);
    display.innerHTML = `
        <div class="doc-wrapper">
            {<br>
            &nbsp;&nbsp;"_id": "1",<br>
            &nbsp;&nbsp;"name": "Alice",<br>
            &nbsp;&nbsp;"orders": [<br>
            &nbsp;&nbsp;&nbsp;&nbsp;{ "id": "101", "total": 50 }<br>
            &nbsp;&nbsp;]<br>
            }
        </div>
        <div class="doc-wrapper" style="margin-left: 1rem">
             {<br>
            &nbsp;&nbsp;"_id": "2",<br>
            &nbsp;&nbsp;"name": "Bob",<br>
            &nbsp;&nbsp;"orders": [<br>
            &nbsp;&nbsp;&nbsp;&nbsp;{ "id": "102", "total": 20 }<br>
            &nbsp;&nbsp;]<br>
            }
        </div>
    `;
}

function updateActiveBtn(index) {
    btns.forEach(b => b.classList.remove('active'));
    btns[index].classList.add('active');
}

// Init
showSQL();
