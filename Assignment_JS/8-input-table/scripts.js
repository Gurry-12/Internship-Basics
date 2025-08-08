function delete_element(event) {
    let row = event.target.parentElement;
    row.remove();  
}

function add_data() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let row = document.createElement("tr");

    let nameCell = document.createElement("td");
    nameCell.textContent = name;
    row.appendChild(nameCell);

    let emailCell = document.createElement("td");
    emailCell.textContent = email;
    row.appendChild(emailCell);

    let deleteButton = document.createElement("button");
    deleteButton.className = 'button-del btn btn-warning m-3';
    deleteButton.innerHTML = 'Delete';
    row.appendChild(deleteButton);

    document.getElementById("table").appendChild(row);

    deleteButton.addEventListener("click", delete_element);

    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
}

