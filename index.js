
/*
- APPROACH:  - I wanted that when the user clicked on  any of the pictures that are displayed on the welcome page,
...they should get redirected to another page ("quizPage.html") , where they are welcomed by their name and on top of the page, 
...there is a little description of the questions on that page will be about.


*/


const english= document.getElementById('englishImage');
const history= document.getElementById('historyImage');
const math= document.getElementById('mathsImage');




function redirectToQuizPage(category) {

    // Prompt the user to enter their name
    const userName = prompt("Please enter your name:");

    if (userName) { // Check if user entered a name
        // Store the user's name in localStorage
        localStorage.setItem("userName", userName);
        // Store the selected quiz category in localStorage
        localStorage.setItem("quizCategory", category);
        // Redirect to quizPage.html
        window.location.href = 'quizPage.html';

        
    }
    else {
        alert("Please enter your name to continue");
        userName= prompt("Please enter your name:");
    }
    

}


//add event listeners to the image elements
english.addEventListener("click", function(){

    redirectToQuizPage("English");
    console.log(localStorage.getItem("userName"));

});
history.addEventListener("click", function(){
    redirectToQuizPage("History");
});
math.addEventListener("click", function(){

    redirectToQuizPage("Mathematics");
});


