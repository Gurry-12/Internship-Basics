function create_table(row,column) {
    document.getElementById("table1").innerHTML = ""    
    let table = document.createElement("table");
    table.className = "table"
    for(let i = 0; i<row ; i++){
        let tr = document.createElement("tr")
        for(let j = 0; j < column ; j++){
            let td = document.createElement("td")
            td.textContent = "a"
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    document.getElementById("table1").appendChild(table);
}

function add_table() {
    let row = document.getElementById("row").value;
    let col = document.getElementById("column").value;

    create_table(row,col)
     
    
    document.getElementById("row").value = ""
    document.getElementById("column").value = ""
    
}

