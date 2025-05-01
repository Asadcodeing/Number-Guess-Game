const secreteNum = Math.floor(Math.random() * 10) + 1;
let attempts = 3;

function numGuess() {
    const num = parseInt(document.getElementById("userGuess").value);
    const result = document.getElementById("result");
    const attemptsLeft = document.getElementById("attemptsLeft");

    if(isNaN(num) || num < 1 || num > 10){
        result.textContent = "InValid Input! Guess number between 1 and 10";
        attemptsLeft.textContent = "";
    }else if(num === secreteNum){
        result.textContent = "Congratulations! You won the Game. Refresh the Website and Play Again";
        attemptsLeft.textContent = "";
    }else{
        attempts--;
        if(attempts > 0){
            result.textContent = num > secreteNum ? "Too High" : "Too Low";
            attemptsLeft.textContent = `Guess correct number. Now! You have only ${attempts} attempts`;
        }else{
            result.textContent = `Game Over! You lose the Game. Secerate number is ${secreteNum}. Refresh the Website and Play Again`;
            attemptsLeft.textContent = "";
        }
    }

}
