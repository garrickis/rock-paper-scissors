function getComputerChoice() {
    var choice = Math.floor(Math.random() * 3);
    var selection = null;
    switch (choice) {
        case 0:
            selection = "Rock";
            break;
        case 1:
            selection = "Paper";
            break;
    
        default:
            selection = "Scissors"
            break;
    }
    return selection
}

    function compare(a, b) {

        if (a == b) {
            console.log("It's a tie!")
        }

        const win = [["rock","scissors"],["paper","rock"],["scissors","paper"]]
        const lose = [["rock","paper"],["paper","scissors"],["scissors","rock"]]

        var choices = [a,b]
        var outcome = null
        for (let i = 0; i < win.length; i++) {
            if (choices[0] == win[i][0] && choices[1] == win[i][1]) {
                outcome = true;
            } 
            
        }

        for (let i = 0; i < lose.length; i++) {
            if (choices[0] == lose[i][0] && choices[1] == lose[i][1]) {
                outcome = false
            } 
            
        }

        if(outcome == true){
            console.log(`You win! ${a} beats ${b}`)
        } else if (outcome == false ) {
            console.log(`You lose! ${b} beats ${a}`)
        }


    }

    function game() {
        const comp = getComputerChoice().toLowerCase();
        const user = prompt("Let's play rock, paper, scissors").toLowerCase();

        if (user != "rock" && user != "paper" && user != "scissors" ) {
            console.log("You have entered and invalid choice.")
        } else {
            console.log(`User chose ${user}`)
            console.log(`Computer chose ${comp}`)
        }

        compare(user,comp);
    }