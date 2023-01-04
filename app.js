var counting = 0;
let randNum = Math.floor(Math.random() * 101);

const guess = () => {
    
    const player_input = parseInt(document.getElementById("inputNumber").value);
    
    if(player_input == randNum){
        alert(`correct! the number is ${randNum} and you guess ${counting} times.\nTry to play again.`);
        location.reload();
    }
    else if(player_input > randNum){
        alert("greater than the number.");
    }
    else if(player_input < randNum){
        alert("less than the number.");
    }
    counting++;
}