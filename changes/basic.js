
    let x = "";
    let solution = 0;

    function output() {
        if (x.length === 0) {
            document.getElementById("result").value = 0;
        }
        else {
        solution = eval(x);
        document.getElementById("result").innerHTML = solution;
        x = solution;
        }
    
    }

    function clear() {
        if (x.length === 0) {
            document.getElementById("result").innerHTML = 0;
        }
        else {
        document.getElementById("result").innerHTML ="";
        x = "";
        }
    }

    document.querySelectorAll(".box").forEach((box)  =>  {
        box.addEventListener("click", function(event) {
        if (event.target.classList.contains(("number"))) {
            console.log(event.target.innerHTML); 
             x += event.target.innerHTML;
            document.getElementById("result").innerHTML = x;// Logs the button value
        }

    });
});

document.getElementById("equal").addEventListener("click" , output);

document.getElementById("all-clear").addEventListener("click" , clear);

document.addEventListener("keydown", function(event) {
    let displayDiv = document.getElementById("result");

    if (/^[0-9+\-*/.=]$/.test(event.key)) {
        displayDiv.innerHTML += event.key;
        x+= event.key;
        console.log(x);
    }

    if (/^[a-zA-Z]$/.test(event.key)) {
        event.preventDefault();
    }


    // Clear content on "Backspace"
    if (event.key === "Backspace") {
        displayDiv.innerHTML = displayDiv.innerHTML.slice(0, -1);
        x=x.slice(0,x.length-1);
    }

    if (event.key === "Enter") {
        output();  
    }


});

function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }








