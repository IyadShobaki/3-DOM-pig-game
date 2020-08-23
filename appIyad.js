

//My Solution for the challenge



var scores, roundScore, activePlayer, gamePlaying, winningScore;
var count =0;
document.getElementById('win-score').value = 100;
init();




document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
       
        //1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var secondDice = Math.floor(Math.random() * 6) + 1;
        //2. Display the result
        var diceDOM = document.querySelector('.dice');
        var secondDiceDOM = document.querySelector('.second-dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        secondDiceDOM.style.display = 'block';
        secondDiceDOM.src = 'dice-' + secondDice + '.png';
        //3.Update the round score If the rolled number was not a 1
        if(dice === 1 || secondDice === 1){
        
            nextPlayer();
            
        }else if (dice === 6 && secondDice === 6){
            alert('Both dice are 6s')
            document.querySelector('#current-'+ activePlayer).textContent = 0;
            scores[activePlayer] = 0
            document.querySelector('#score-' + activePlayer).textContent = 0;
            nextPlayer();
        }else{
            //Add score
            roundScore += (dice + secondDice);
            document.querySelector('#current-'+ activePlayer).textContent = roundScore;
        }
        /* 
        //with one dice

        if(dice !== 1){
            if(dice === 6){
                count++;
                console.log(count)
                if(count === 2){
                    document.querySelector('#current-'+ activePlayer).textContent = 0;
                    scores[activePlayer] = 0
                    document.querySelector('#score-' + activePlayer).textContent = 0;
                    nextPlayer();
                }else{
                    //Add score
                    roundScore += dice;
                    document.querySelector('#current-'+ activePlayer).textContent = roundScore;
                }
                
            }else{
                //Add score
                roundScore += dice;
                document.querySelector('#current-'+ activePlayer).textContent = roundScore;
                count =0;
            }
            
        }else{
            count =0;
            nextPlayer();
        }
        */
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  if(gamePlaying){
    //Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
    
    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    //Check if player win the game
    if(scores[activePlayer] >= winningScore){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.second-dice').style.display = 'none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying = false;
    }else{
        //Next player
        nextPlayer()
    }
  }

});



function nextPlayer(){
    //Next player     
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.second-dice').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click', init); // just passing the function and not call in it


function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    
    winningScore = document.getElementById('win-score').value;
  

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.second-dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
}






