let namesList = [];
let stop = false;
let display = document.getElementById("display")
function askNames() {
    while (!stop) {
        let name = prompt("Enter a name (or leave empty to stop):");

        if (name === null || name.trim() === "") {
            stop = true;
        } else {
            namesList.push(name.trim());
        }
    }

    namesList.sort();
    for(let x of namesList){
        let node = document.createElement("p");
            let textnode = document.createTextNode(x);
            node.appendChild(textnode);
            document.getElementById("display").appendChild(node);
    }
    
}
askNames();
