// obiekty z wlasciwosciami zamiast pojedynczycz queryselectorow
const p1 = {
    score: 0,
    button: document.querySelector('.btn-p1'),
    display: document.querySelector('.player-one-score'),
}
const p2 = {
    score: 0,
    button: document.querySelector('.btn-p2'),
    display: document.querySelector('.player-two-score'),
}
const reset = document.querySelector('.reset');
const scoreLimit = document.querySelector('#select-point');

let winScore = 3;
let isGameOver = false;
// jedna funkcja dodania punktu, gdzie argumenty w event listenerach swapują się (p1,p2) (p2,p1)
function addScore(player, opponent) {
    if(!isGameOver){
        player.score += 1;
        if (player.score === winScore){
            isGameOver = true;
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}
p1.button.addEventListener('click', function(){
    addScore(p1,p2)
});
p2.button.addEventListener('click', function(){
    addScore(p2,p1)
});

scoreLimit.addEventListener('change', function(){
    // winScore = parseInt(scoreLimit.value);
    winScore = parseInt(this.value);
    resetGame();
})
reset.addEventListener('click', function(){
    resetGame();
});
function resetGame(){
    isGameOver = false;
    for(let p of [p1,p2] ){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('winner', 'loser');
        p.button.disabled= false;
    }
}


