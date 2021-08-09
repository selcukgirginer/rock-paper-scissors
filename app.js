
var player_Score = 0;
var computer_Score = 0;

window.setInterval(() => {
    document.getElementById('computer').innerHTML = computer_Score;
document.getElementById('player').innerHTML = player_Score;
if(player_Score == 3){
    var value = confirm('Player won, do you want to play again? ');
    computer_Score = 0;
    player_Score = 0;
    document.getElementById('leftimg').src = 'src/Hand/left-rock.png';
    document.getElementById('rightimg').src = 'src/Hand/right-rock.png';

    if(value == false){
        window.close();
    }
}
if(computer_Score == 3){
    var value = confirm('Computer won, do you want to play again? ');
    computer_Score = 0;
    player_Score = 0;
    document.getElementById('leftimg').src = 'src/Hand/left-rock.png';
    document.getElementById('rightimg').src = 'src/Hand/right-rock.png';
    
    if(value == false){
        window.close();
    }
}
}, 0);

function check(player){
    var computer = Math.floor(Math.random()*3);

    if(computer == 0){
        document.getElementById('leftimg').src = 'src/Hand/left-rock.png';
    }

    if(computer == 1){
        document.getElementById('leftimg').src = 'src/Hand/left-paper.png';
    }

    if(computer == 2){
        document.getElementById('leftimg').src = 'src/Hand/left-sci.png';
    }

    if(player == 0){
        document.getElementById('rightimg').src = 'src/Hand/right-rock.png';
    }

    if(player == 1){
        document.getElementById('rightimg').src = 'src/Hand/right-paper.png';
    }

    if(player == 2){
        document.getElementById('rightimg').src = 'src/Hand/right-sci.png';
    }
    
    if(player == 0 && computer == 0){
        alert('Tie');
    }
    if(player == 1 && computer == 1){
        alert('Tie');
    }
    if(player == 2 && computer == 2){
        alert('Tie');
    }

    /* 0-tas
1-kagit
2-makas*/

    if(player == 0 && computer == 1){
        computer_Score++;
    }
    if(player == 0 && computer == 2){
        player_Score++;
    }
    if(player == 1 && computer == 0){
        player_Score++;
    }
    if(player == 2 && computer == 0){
        computer_Score++;
    }
    if(player == 1 && computer == 2){
        computer_Score++;
    }
    if(player == 2 && computer== 1){
        player_Score++;
    }
}
