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

// function decideWinner(){
//
// }
function startGame(){
    document.getElementById('computer').innerHTML = null;
    document.getElementById('p1').innerHTML = null;
    document.getElementById('winner').innerHTML = null;
}

document.getElementById('r').addEventListener("click",function(){
    let a = document.getElementById('r').innerHTML;
    document.getElementById('p1').innerHTML = a;
    document.getElementById('computer').innerHTML = determineChoice();
    let b = document.getElementById('computer').innerHTML;
    determineWinnerR(a,b);
});

document.getElementById('p').addEventListener("click",function(){
    let a = document.getElementById('p').innerHTML;
    document.getElementById('p1').innerHTML = a;
    document.getElementById('computer').innerHTML = determineChoice();
    let b = document.getElementById('computer').innerHTML;
    // determineWinner(a,b);
});

document.getElementById('s').addEventListener("click",function(){
    let a = document.getElementById('s').innerHTML;
    document.getElementById('p1').innerHTML = a;
    document.getElementById('computer').innerHTML = determineChoice();
    let b = document.getElementById('computer').innerHTML;
    // determineWinner(a,b);
});

function determineWinnerR(p1,bot){
    if(p1 === "Rock" && bot === "Rock" ){
        let a = document.getElementById('winner').innerHTML = "Draw";
        return a;
    }else if (p1 === 'rock' && bot === 'Scissors'){
        let b = document.getElementById('winner').innerHTML = "Player 1 wins";
        return b;
    }else{
        let a = document.getElementById('winner').innerHTML = "Unsure of winner";
        return a;
    }
}
