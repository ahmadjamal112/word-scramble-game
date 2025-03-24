document.addEventListener("DOMContentLoaded", function() {
    const words = ["javascript", "react", "developer", "coding", "frontend", "backend", "algorithm", "function"];
    
    let originalWord = "";
    let scrambledWord = "";
    let score = 0;

    const scrambleWord = (word) => {
        return word.split("").sort(() => Math.random() - 0.5).join("");
    };

    const generateNewWord = () => {
        originalWord = words[Math.floor(Math.random() * words.length)];
        scrambledWord = scrambleWord(originalWord);
        document.getElementById("scrambled-word").innerText = scrambledWord;
        document.getElementById("user-input").value = "";
        document.getElementById("message").innerText = "";
    };

    const checkAnswer = () => {
        const userInput = document.getElementById("user-input").value.toLowerCase();
        if (userInput === originalWord) {
            document.getElementById("message").innerText = "Correct! 🎉";
            score++;
            document.getElementById("score").innerText = score;
            setTimeout(generateNewWord, 1500);
        } else {
            document.getElementById("message").innerText = "Try again! ❌";
        }
    };

    // Event Listeners
    document.getElementById("submit-btn").addEventListener("click", checkAnswer);
    document.getElementById("skip-btn").addEventListener("click", generateNewWord);

    // Start Game
    generateNewWord();
});
