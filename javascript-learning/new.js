let operator_value;
let pre_value = [];
let x = ""; // Stores the current expression
let display_x = ""; // Stores the expression shown on the screen

function output() {
    if (x.length === 0) {
        document.getElementById("result").value = 0;
    } else {
        try {
            let solution = eval(x); // Evaluate the expression
            document.getElementById("result").value = solution;

            // Store history as "1+2 = 3"
            let historyItem = `${display_x} = ${solution}`;
            pre_value.push(historyItem);
            x = solution.toString(); // Set x to the result for further calculations
            display_x = solution.toString(); // Update display_x as well
        } catch (e) {
            document.getElementById("result").value = "Error";
            x = "";
            display_x = "";
        }
    }
}

function history_1() {
    let preElement = document.getElementById("pre");
    preElement.innerHTML = ''; // Clear previous history

    if (pre_value.length === 0) {
        preElement.innerHTML = "<p>No History</p>";
        return;
    }

    // Append history items
    for (let i = pre_value.length - 1; i >= 0; i--) {
        let p = document.createElement("p");
        p.innerText = pre_value[i];
        preElement.appendChild(p);
    }
}

// Clear all input
function clearScreen() {
    document.getElementById("result").value = "0";
    x = "";
    display_x = "";
}

// Clear one character at a time
function back_1() {
    if (x.length > 0) {
        x = x.slice(0, -1);
        display_x = display_x.slice(0, -1);
        document.getElementById("result").value = display_x || "0";
    }
}

// Delete history
function delete_1() {
    pre_value = [];
    document.getElementById("pre").innerHTML = "<p>No History</p>";
}

// Query loop for number & operator selection
document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener("click", function (event) {
        let key = event.target.innerHTML;

        // Handle number inputs
        if (event.target.classList.contains("number")) {
            x += key;
            display_x += key;
            document.getElementById("result").value = display_x;
        }

        // Handle operator inputs
        if (event.target.classList.contains("operators")) {
            operator_value = key;

            // Handle opening bracket `(`
            if (operator_value === "(") {
                if (x.length > 0 && x[x.length - 1].match(/[0-9)]/)) {
                    x += "*(";  // Implicit multiplication added in the background
                    display_x += "("; // Only show `(` on screen
                } else {
                    x += "(";
                    display_x += "(";
                }
                document.getElementById("result").value = display_x;
                return;
            }

            // Prevent consecutive operators (`++`, `--`, `**`, etc.)
            if (x.length > 0 && x[x.length - 1].match(/[+\-*/%]/)) {
                x = x.slice(0, -1);
                display_x = display_x.slice(0, -1);
            }

            x += operator_value;
            display_x += operator_value;
            document.getElementById("result").value = display_x;
        }
    });
});

// Event Listeners for buttons
document.getElementById("equal").addEventListener("click", output);
document.getElementById("all-clear").addEventListener("click", clearScreen);
document.getElementById("clear").addEventListener("click", back_1);
document.getElementById("history").addEventListener("click", history_1);
document.getElementById("delete").addEventListener("click", delete_1);

// Sidebar Navigation
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


function output() {
    if (x.length === 0) {
        document.getElementById("result").value = 0;
    } else {
        try {
            let solution = eval(x); // Evaluate the expression
            document.getElementById("result").value = solution;

            // Store history as "1+2 = 3"
            let historyItem = `${display_x} = ${solution}`;
            pre_value.push(historyItem);
            x = solution.toString(); // Set x to the result for further calculations
            display_x = solution.toString(); // Update display_x as well
        } catch (e) {
            document.getElementById("result").value = "Error";
            x = "";
            display_x = "";
        }
    }
}

document.querySelectorAll(".box").forEach((box)  =>  {
    box.addEventListener("click", function(event) {
    if (event.target.classList.contains(("number"))) { 
         x += event.target.innerHTML;
         display_x += event.target.innerHTML;
        document.getElementById("result").value = display_x;
        console.log(x);
    }

    //target the operator
    if (event.target.classList.contains("operators")) {

        operator_value =  event.target.innerHTML;

        if(x[x.length-1]===")" && operator_value.match(/^[+\-%*\/]$/)){
            x+=operator_value;
            display_x += operator_value;
            document.getElementById("result").value = display_x;
        }

        if(operator_value === "(") {
            if (x.length >0 && x[x.length - 1].match(/[0-9\)]/))
            {
                x+="*(";
            }
            else {
                x +="(";
            }
            display_x +="(";
            document.getElementById("result").value = display_x;
            console.log(x);
        }

        //match with number
        if(x[x.length - 1].match(/[0-9]/)  ){
            x += operator_value;
            display_x+=operator_value;
            document.getElementById("result").value = display_x; 
        }

        if(x[x.length-1].match(/[*]/) && operator_value.match(/[+\-]/)){
            x+=operator_value;
            display_x+=operator_value;
            document.getElementById("result").value = display_x;
        }

        //match with operator
        if(x[x.length - 1].match(/^[+\-*\/%]$/) && !x[x.length - 2].match(/[*]/) ){
            x = x.substring(0,x.length - 1);
            
            document.getElementById("result").innerHTML.slice(0, -1);
            x+=operator_value;
            document.getElementById("result").value = x;
        }

        
    }

});
});

// if(x[x.length-1]==="*" && operator_value.match(/[+\-]/)){
//     x+=operator_value;
//     display_x+=operator_value;
//     document.getElementById("result").value = display_x;
//     console.log(x);
// }


let openParenthesesCount = 0; // To track the number of open parentheses

function output() {
    if (bool_1) {
        try {
            let expression = x
                .replace(/\(?(\d+(\.\d+)?)\)?%\(?(\d+(\.\d+)?)\)?/g, "($1*$3)/100")
                .replace(/(\d+(\.\d+)?)%/g, "($1/100)")
                .replace(/\)(?=\d)/g, ")*"); // Fix: Insert '*' after closing parenthesis when followed by a number

            solution = eval(expression); // Evaluate modified expression
            document.getElementById("result").value = solution;
            bool_1 = false;  // Reset bool_1 after evaluation
            // Store history as "1+2 = 3"
            historyItem = `${display_x} = ${solution}`;
            pre_value.push(historyItem);
            x = solution.toString(); // Set x to the result for further calculations
            display_x = solution.toString(); // Update display_x as well
        } catch (e) {
            document.getElementById("result").value = "Error";
            x = "";
            display_x = "";
        }
    } else {
        if (x.length === 0) {
            document.getElementById("result").value = 0;
        } else {
            // Fix: Insert '*' after closing parenthesis when followed directly by a number
            x = x.replace(/\)(?=\d)/g, ")*");

            try {
                solution = eval(x); // Evaluate the expression after applying the fix
                document.getElementById("result").value = solution;

                // Store history as "1+2 = 3"
                historyItem = `${display_x} = ${solution}`;
                pre_value.push(historyItem);
                x = solution.toString(); // Set x to the result for further calculations
                display_x = solution.toString(); // Update display_x as well
            } catch (e) {
                document.getElementById("result").value = "Error";
                x = "";
                display_x = "";
            }
        }
    }
}

// Query loop for number & operator selection
document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener("click", function (event) {
        let key = event.target.innerHTML;

        // Handle number inputs
        if (event.target.classList.contains("number")) {
            x += key;
            display_x += key;
            document.getElementById("result").value = display_x;
        }

        // Handle operator inputs
        if (event.target.classList.contains("operators")) {
            operator_value = key;

            // When % is clicked, set bool_1 to true
            if (operator_value === "%") {
                bool_1 = true;
            } else {
                bool_1 = false; // Reset bool_1 if any other operator is clicked
            }

            // Handle opening bracket `(`
            if (operator_value === "(") {
                // Allow open parentheses if there is no unmatched closing parenthesis
                if (openParenthesesCount >= 0) {
                    x += "(";
                    display_x += "(";
                    openParenthesesCount++; // Increment the open parentheses counter
                    document.getElementById("result").value = display_x;
                }
                return;
            }

            // Handle closing bracket `)`
            if (operator_value === ")") {
                // Only allow a closing parenthesis if there is an unmatched opening parenthesis
                if (openParenthesesCount > 0) {
                    x += ")";
                    display_x += ")";
                    openParenthesesCount--; // Decrement the open parentheses counter
                    document.getElementById("result").value = display_x;
                }
                return;
            }

            // Prevent consecutive operators (`++`, `--`, `**`, etc.)
            if (x.length > 0 && x[x.length - 1].match(/[+\-*/%]/)) {
                x = x.slice(0, -1);
                display_x = display_x.slice(0, -1);
            }

            x += operator_value;
            display_x += operator_value;
            document.getElementById("result").value = display_x;
        }
    });
});
