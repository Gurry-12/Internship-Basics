let display = document.getElementById("display");
let result = document.getElementById("result");
let button1 = document.getElementById("button1");

let count = 0;  // Initialize count to 0

// Function to generate a random arithmetic question
function generateRandomQuestion() {
    let num1 = Math.floor(Math.random() * 10) + 1;  // Random number between 1 and 10
    let num2 = Math.floor(Math.random() * 10) + 1;  // Random number between 1 and 10
    
    // Randomly pick an operator
    let operatorChoice = Math.floor(Math.random() * 2);  // 0 for '+' and 1 for '*'
    
    let operator;
    let answer;
    
    // Use a switch statement to determine the operator and answer
    switch (operatorChoice) {
        case 0:
            operator = "+";
            answer = num1 + num2;  // Addition
            break;
        case 1:
            operator = "*";
            answer = num1 * num2;  // Multiplication
            break;
    }
    
    return {
        question: `${num1} ${operator} ${num2}`,  // Format the question
        answer: answer
    };
}

// Object to hold the current question and its answer
let currentQuestion = generateRandomQuestion();

// Function to display the current question
function Question_show() {
    display.innerHTML = currentQuestion.question;  // Show the current question
}

// Function to handle the submit action
function handleSubmit() {
    if (count < 5) {  // Limit to 5 questions
        let userAnswer = Number(result.value);
        if (userAnswer === currentQuestion.answer) {
            alert("Correct Answer!");
        } else {
            alert("Incorrect Answer.");
        }
        count++;  // Move to the next question
        result.value = '';  // Clear the result input field
        currentQuestion = generateRandomQuestion();  // Generate a new random question
        Question_show();  // Show next question
    } else {
        display.innerHTML = "All questions answered!";
        button1.disabled = true;  // Disable button once all questions are shown
    }
}

// Add event listener for the submit button
button1.addEventListener("click", handleSubmit);

// Initial question display
Question_show();
