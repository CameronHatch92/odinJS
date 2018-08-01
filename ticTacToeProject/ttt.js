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

let currPlay = playerOne;


const gameBoard=(()=>{
    const boardArray = ["", "", "", "", "", "O", "", "X", ""];
    const setBoard = () => {
        for (let i=0; i<9; i++){
            document.getElementById(`square${i+1}`).innerHTML= boardArray[i];
            document.getElementById(`square${i+1}`).onclick = function(){
                boardArray[i]= currPlay.marker;
                if(currPlay===playerOne){
                    currPlay=playerTwo;
                }else{
                    currPlay=playerOne;
                }
                updateBoard();
            };
        }
    };
    return {
        boardArray,
        setBoard
    };
})();


const displayController = (()=>{
    const currentPlayer = (player) => player.name;
    const currentMarker = (player) => player.marker;
    return {currentMarker,
    currentPlayer};
})();



function getGameStatus(player){
    document.getElementById("currentPlayer").innerHTML = `<b>Current Player:</b> ${displayController.currentPlayer(player)}`;
    document.getElementById("currentMarker").innerHTML = `<b>Player's Marker:</b> ${displayController.currentMarker(player)}`;

};




function updateBoard(){
    getGameStatus(currPlay);
    gameBoard.setBoard();
};
updateBoard();

