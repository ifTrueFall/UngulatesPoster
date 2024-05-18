function handleAnswerSelection(questionId, correctAnswer) {
    const questionElement = document.getElementById(questionId);
    const radioButtons = questionElement.querySelectorAll('input[type="radio"]');
    const feedbackElement = questionElement.querySelector('p[id^="feedback"]');

    for (const radioButton of radioButtons) {
        radioButton.addEventListener('click', () => {
            if (radioButton.value === correctAnswer) {
                feedbackElement.textContent = "Correct!";
            } else {
                feedbackElement.textContent = "Incorrect. Please try again.";
            }
        });
    }
}
// Call the function for each question; this tells the script this answer is correct else other choices are incorrect
handleAnswerSelection("question1", "a");
handleAnswerSelection("question2", "d");
handleAnswerSelection("question3", "d");
handleAnswerSelection("question4", "d");
handleAnswerSelection("question5", "d");
handleAnswerSelection("question6", "b");
handleAnswerSelection("question7", "d");
handleAnswerSelection("question8", "b");
handleAnswerSelection("question9", "a");
handleAnswerSelection("question10", "b");
handleAnswerSelection("question11", "a");
handleAnswerSelection("question12", "c");
handleAnswerSelection("question13", "d");
handleAnswerSelection("question14", "c");
handleAnswerSelection("question15", "c");
handleAnswerSelection("question16", "a");
handleAnswerSelection("question17", "c");
handleAnswerSelection("question18", "a");
handleAnswerSelection("question19", "b");
handleAnswerSelection("question20", "b");
handleAnswerSelection("question21", "c");