function createBoard(){
    let board="";
    for(let i=1; i<=9; i++){
        board += blockOfBoard(i);
    }
    document.getElementById("gameBoard").innerHTML=board;
}

function blockOfBoard(index){
    let code=`<div class=boardSquare id="square${index}">
    </div>`
    return code;
}
createBoard();

const Player = (name, marker) => {
    return { name, marker };
};

const playerOne=Player("player1", "X");
const playerTwo=Player("player2", "O");

let currPlay = {};


const gameBoard=(()=>{
    const boardArray = ["", "", "", "", "", "O", "", "X", ""];
    const setBoard = () => {
        for (let i=0; i<9; i++){
            document.getElementById(`square${i+1}`).innerHTML= boardArray[i];
            document.getElementById(`square${i+1}`).onclick = function(){
                if(boardArray[i]===""){
                boardArray[i]= currPlay.marker;
                if(currPlay===playerOne){
                    currPlay=playerTwo;
                }else{
                    currPlay=playerOne;
                }
                updateBoard();
            }
            };
        }
    };
    return {
        boardArray,
        setBoard
    };
})();

function checkForWin(){
    let winner = {};
    if(currPlay===playerOne){
        winner=playerTwo;
    }else{
        winner=playerOne;
    }

    if(gameBoard.boardArray[0]===gameBoard.boardArray[1]&&gameBoard.boardArray[1]===gameBoard.boardArray[2]&&gameBoard.boardArray[0]!=""){
        winProceduce(winner);
    }else if(gameBoard.boardArray[3]===gameBoard.boardArray[4]&&gameBoard.boardArray[4]===gameBoard.boardArray[5]&&gameBoard.boardArray[3]!=""){
        winProceduce(winner);
    }else if(gameBoard.boardArray[6]===gameBoard.boardArray[7]&&gameBoard.boardArray[7]===gameBoard.boardArray[8]&&gameBoard.boardArray[6]!=""){
        winProceduce(winner);
    }else if(gameBoard.boardArray[0]===gameBoard.boardArray[3]&&gameBoard.boardArray[3]===gameBoard.boardArray[6]&&gameBoard.boardArray[6]!=""){
        winProceduce(winner);
    }else if(gameBoard.boardArray[1]===gameBoard.boardArray[4]&&gameBoard.boardArray[4]===gameBoard.boardArray[7]&&gameBoard.boardArray[4]!=""){
        winProceduce(winner);
    }else if(gameBoard.boardArray[2]===gameBoard.boardArray[5]&&gameBoard.boardArray[5]===gameBoard.boardArray[8]&&gameBoard.boardArray[8]!=""){
        winProceduce(winner);
    }else if(gameBoard.boardArray[0]===gameBoard.boardArray[4]&&gameBoard.boardArray[4]===gameBoard.boardArray[8]&&gameBoard.boardArray[8]!=""){
        winProceduce(winner);
    }else if(gameBoard.boardArray[2]===gameBoard.boardArray[4]&&gameBoard.boardArray[4]===gameBoard.boardArray[6]&&gameBoard.boardArray[6]!=""){
        winProceduce(winner);
    } else if(gameBoard.boardArray.filter(elem => elem != "").length ===9){
        document.getElementById("winInfo").style.display="block";
        document.getElementById("winInfo").innerHTML=`<p id="gameEnd">It's a tie!</p>`;
        document.getElementById("gameInfo").style.display = "none";
        stopClick();
    }
}

function stopClick(){
    for (let i=1; i<=9; i++){
        document.getElementById(`square${i}`).onclick = function(){};
    }
};
function winProceduce(person){
    document.getElementById("winInfo").style.display="block";
    document.getElementById("winInfo").innerHTML=`<p id="gameEnd">Congratulations, ${person.name}!!!
    You have won!</p>`;
    document.getElementById("gameInfo").style.display = "none";
    stopClick();
}
const displayController = (()=>{
    const currentPlayer = (player) => player.name;
    const currentMarker = (player) => player.marker;
    return {currentMarker,
    currentPlayer};
})();



function getGameStatus(player){
    document.getElementById("currentPlayer").innerHTML = `<b>Current Player:</b> ${displayController.currentPlayer(player)}`;
    document.getElementById("currentMarker").innerHTML = `<b>Player's Marker:</b> ${displayController.currentMarker(player)}`;
    if (document.getElementById("firstPlayer").value!=""){
    playerOne.name = document.getElementById("firstPlayer").value;
    };
    if(document.getElementById("secondPlayer").value){
        playerTwo.name = document.getElementById("secondPlayer").value;
    };

};




function updateBoard(){
    getGameStatus(currPlay);
    gameBoard.setBoard();
    checkForWin();
};
updateBoard();
document.getElementById("gameBoard").style.display = "none";
document.getElementById("gameInfo").style.display = "none";
document.getElementById("winInfo").style.display = "none";
let gameCount = 0;
document.getElementById("startRestart").onclick = function(){
    for (let i=0; i<9; i++){
        gameBoard.boardArray[i]="";
    }
    updateBoard();
    document.getElementById("gameBoard").style.display="block";
    document.getElementById("gameInfo").style.display="block";
    currPlay=playerOne;
    gameCount++;
    if(gameCount%2===0){
        firstPlayer=playerTwo;
    }else{
        firstPlayer=playerOne;
    }
    getGameStatus(firstPlayer);
    document.getElementById("playerInfo").style.display = "none";
    document.getElementById("winInfo").style.display = "none";
}

