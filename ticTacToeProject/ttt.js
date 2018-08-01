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

// const Player = (name, marker)=>{
//     return {name, marker};
// };

// const playerOne=Player(player1, "X");
// const playerTwo=Player(player2, "O");

const gameBoard=(()=>{
    const boardArray = ["", "", "", "", "", "O", "", "X", ""];
    const setBoard = () => {
        for (let i=0; i<9; i++){
            document.getElementById(`square${i+1}`).innerHTML= boardArray[i];
        }
    };
    return {
        boardArray,
        setBoard
    };
})();

gameBoard.setBoard();