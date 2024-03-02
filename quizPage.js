



const englishQuestion=[{

    question: "What is the plural form of 'cat'?",
    answers: ["cats", "cat", "catt", "catses"],
    correctAnswer: "cats"
},{
    question: "What is the past tense of 'walk'?",
    answers: ["walked", "walks", "walking", "walksed"],
    correctAnswer: "walked"
},{
    question: "What does the word 'serene' mean?",
    answers: ["happy", "sad", "calm", "angry"],
    correctAnswer: "calm"
},{
    question: "What is the meaning of 'paradox'?",
    answers: ["a statement that contradicts itself", "a true statement", "a false statement", "a statement that is not true"],
    correctAnswer: "a statement that contradicts itself"
}

]

const historyQuestion = [
    {
        question: "What year did World War I begin?",
        options: ["1914", "1917", "1918", "1920"],
        answer: "1914"
    },
    {
        question: "Who was the first president of the United States?",
        options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        answer: "George Washington"
    },
    {
        question: "Which ancient civilization built the Great Pyramids of Giza?",
        options: ["Mesopotamia", "Greece", "Rome", "Egypt"],
        answer: "Egypt"
    },
    
];

const mathQuestions = [
    {
        question: "What is the formula to calculate the area of a rectangle?",
        options: ["length * width", "2 * (length + width)", "length + width", "length / width"],
        answer: "length * width"
    },
    {
        question: "Solve for x: 2x + 5 = 15",
        options: ["x = 10", "x = 5", "x = 7", "x = 3"],
        answer: "x = 5"
    },
    {
        question: "Which of the following is a quadratic function?",
        options: ["f(x) = |x|", "f(x) = 3x + 2", "f(x) = x^2 + 2x + 1", "f(x) = √x"],
        answer: "f(x) = x^2 + 2x + 1"
    },
    {
        question: "What is the formula for the perimeter of a square?",
        options: ["4 * length", "2 * (length + width)", "length * width", "2 * π * radius"],
        answer: "4 * length"
    },
    // Add more math questions here
];



document.addEventListener('DOMContentLoaded', function() {
 

    const userName = localStorage.getItem("userName");
    const quizCategory = localStorage.getItem("quizCategory");

    const userNameSection = document.getElementById("user-name-section");
    userNameSection.innerHTML = `<p>Welcome, ${userName}!</p>`;

    const quizTitle = document.getElementById("quiz-title");
    quizTitle.textContent = `Quiz: ${quizCategory}`;

    const questionsSection = document.getElementById("questions-section");

   
    
    if(quizCategory == "English"){
        englishQuestion.forEach((q, index) => {
            const questionElement = document.createElement("div");
            questionElement.className = "quiz-question";
            questionElement.innerHTML = `
                <p>${index + 1}. ${q.question}</p>
                <form id="question-${index}-form" class="quiz-form">
                    ${q.answers.map(option => `
                        <input type="radio" name="question-${index}" value="${option}" class="quiz-option">
                        <label>${option}</label><br>
                    `).join('')}
                </form>
            `;
            questionsSection.appendChild(questionElement);
        });
    }
    else if(quizCategory== "History"){
        // Load history questions
        historyQuestion.forEach((q, index) => {
            const questionElement = document.createElement("div");
            questionElement.className = "quiz-question";
            questionElement.innerHTML = `
                <p>${index + 1}. ${q.question}</p>
                <form id="question-${index}-form" class="quiz-form">
                    ${q.options.map(option => `
                        <input type="radio" name="question-${index}" value="${option}" class="quiz-option">
                        <label>${option}</label><br>
                    `).join('')} 
                </form>
            `;
            questionsSection.appendChild(questionElement);
        });

    }
    else if(quizCategory== "Mathematics"){
        // Load math questions
        mathQuestions.forEach((q, index) => {
            const questionElement = document.createElement("div");
            questionElement.className = "quiz-question";
            questionElement.innerHTML = `
                <p>${index + 1}. ${q.question}</p>
                <form id="question-${index}-form" class="quiz-form">
                    ${q.options.map(option => `
                        <input type="radio" name="question-${index}" value="${option}" class="quiz-option">
                        <label>${option}</label><br>
                    `).join('')}
                </form>
            `;
            questionsSection.appendChild(questionElement);
        });

    }


    const submitButton = document.getElementById("submit-btn");
    submitButton.addEventListener("click", grade);

    
    

});


function grade() {

    let score = 0;

    //get the category name from local storage
    const quizCategory = localStorage.getItem("quizCategory");

    //get the length of all the questions in each category
    let totalQuestions = 0;
    if (quizCategory === "English") {
        totalQuestions = englishQuestion.length;
    } else if (quizCategory === "History") {
        totalQuestions = historyQuestion.length;
    } else if (quizCategory === "Mathematics") {
        totalQuestions = mathQuestions.length;
    }
    let incorrectAnswers = [];

    if(quizCategory == "English"){
        englishQuestion.forEach((q, index) => {
        
            const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`); //get all the options that the user selected 
            if (selectedOption) {
                if (selectedOption.value === q.correctAnswer) {
                    score++;
                }
                else{
                    incorrectAnswers.push({question: q.question, correctAnswer: q.correctAnswer});
                }
            }
        });
    }
    else if(quizCategory== "History"){
        historyQuestion.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
            if (selectedOption) {
                if (selectedOption.value === q.answer) {
                    score++;
                }
                else{
                    incorrectAnswers.push({question: q.question, correctAnswer: q.answer});
                }
            }
        });

    }
    else if(quizCategory== "Mathematics"){
        mathQuestions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
            if (selectedOption) {
                if (selectedOption.value === q.answer) {
                    score++;
                }
                else{
                    incorrectAnswers.push({question: q.question, correctAnswer: q.answer});
                }
            }
        });

    }
    
    const btn = document.getElementById("btn_section");

    const resultSection = document.createElement("div");
    resultSection.className = "result-section";
    if(incorrectAnswers.length>0){
        resultSection.innerHTML = `
        <h2>Result:</h2>
        <p>You scored ${score} out of ${totalQuestions}.</p>
        <p>Incorrect Answers:</p>
        <ul>${incorrectAnswers.map(answer => `<li>${answer.question}: ${answer.correctAnswer}</li>`).join('')}</ul>
        `;
    }
    else{
        resultSection.innerHTML = `
        <h2>Result:</h2>
        <p>Congratulations! You scored ${score} out of ${totalQuestions}.</p>
        
        
        
    `;
    }
    document.body.appendChild(btn.appendChild(resultSection));

    console.log(score);
}



