// generate computers choice.
function determineChoice(){
    let randNo = (Math.random()*3)+1;
    randNo = Math.floor(randNo);

    if(randNo === 1){
        randNo = "Rock";
    }else if (randNo === 2) {
        randNo = "Paper";
    }else if (randNo === 3) {
        randNo = "Scissors";
    }else{
        randNo = null;
    }
    return randNo;
}
// resets the game for restart.
function resetGame(){
    document.getElementById('computer').innerHTML = null;
    document.getElementById('computer-score').innerHTML = 0;
    document.getElementById('p1').innerHTML = null;
    document.getElementById('p1-score').innerHTML = 0;
    document.getElementById('winner').innerHTML = null;
}

// gets the user click and also generates result
document.getElementById('r').addEventListener("click",function(){
    let a = document.getElementById('r').innerHTML;
    document.getElementById('p1').innerHTML = a;
    document.getElementById('computer').innerHTML = determineChoice();
    let b = document.getElementById('computer').innerHTML;
    let bb = determineWinnerR(a,b);
    tabulateResult(bb);
});
document.getElementById('p').addEventListener("click",function(){
    let a = document.getElementById('p').innerHTML;
    document.getElementById('p1').innerHTML = a;
    document.getElementById('computer').innerHTML = determineChoice();
    let b = document.getElementById('computer').innerHTML;
    let bb = determineWinnerP(a,b);
    tabulateResult(bb);
});
document.getElementById('s').addEventListener("click",function(){
    let a = document.getElementById('s').innerHTML;
    document.getElementById('p1').innerHTML = a;
    document.getElementById('computer').innerHTML = determineChoice();
    let b = document.getElementById('computer').innerHTML;
    let bb = determineWinnerS(a,b);
    tabulateResult(bb);
});

function determineWinnerR(p1,bot){
    if(p1 === "Rock" && bot === "Rock" ){
        let a = document.getElementById('winner').innerHTML = "Draw";
        return a;
    }else if (p1 === 'Rock' && bot === 'Scissors'){
        let a = document.getElementById('winner').innerHTML = "Player 1 wins";
        return a;
    }else if (p1 === 'Rock' && bot === 'Paper') {
        let a = document.getElementById('winner').innerHTML = "Computer wins";
        return a;
    }
}
function determineWinnerP(p1,bot){
    if(p1 === "Paper" && bot === "Paper" ){
        let a = document.getElementById('winner').innerHTML = "Draw";
        return a;
    }else if (p1 === 'Paper' && bot === 'Rock'){
        let a = document.getElementById('winner').innerHTML = "Player 1 wins";
        return a;
    }else if (p1 === 'Paper' && bot === 'Scissors') {
        let a = document.getElementById('winner').innerHTML = "Computer wins";
        return a;
    }
}
function determineWinnerS(p1,bot){
    if(p1 === "Scissors" && bot === "Scissors" ){
        let a = document.getElementById('winner').innerHTML = "Draw";
        return a;
    }else if (p1 === 'Scissors' && bot === 'Paper'){
        let a = document.getElementById('winner').innerHTML = "Player 1 wins";
        return a;
    }else if (p1 === 'Scissors' && bot === 'Rock') {
        let a = document.getElementById('winner').innerHTML = "Computer wins";
        return a;
    }
}

function tabulateResult(output){
    let scoreMutiplier, botScore, playerScoreUpdater, botScoreUpdater;
    scoreMutiplier = 1;
    playerScoreUpdater = document.getElementById('p1-score');
    botScoreUpdater = document.getElementById('computer-score');
    if(output === "Player 1 wins"){
        document.querySelector('#winner').classList.add("p1wins");
        document.querySelector('#winner').classList.remove("draw");
        playerScoreUpdater.innerHTML = scoreMutiplier + parseInt(playerScoreUpdater.innerHTML);
    }else if(output === "Computer wins"){
        botScoreUpdater.innerHTML = scoreMutiplier + parseInt(botScoreUpdater.innerHTML);
        document.querySelector('#winner').classList.remove("p1wins");
        document.querySelector('#winner').classList.remove("draw");
    }else {
        document.querySelector('#winner').classList.add("draw");
        document.querySelector('#winner').classList.remove("p1wins");
    }
}
