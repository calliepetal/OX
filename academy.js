// Make your changes to store and update game state in this file
let board = [[null, null, null], [null, null, null], [null, null, null]];
let player = 'nought';
const player1 = prompt("Noughts player, please enter your name:");
const player2 = prompt("Crosses player, please enter your name:");

// Take the row and column number between 0 and 2 
// (inclusive) and update the game state.
function takeTurn(row, column) {
    if (board[row][column] === null) {
    board[row][column] = player;
    player = (player === 'cross') ? 'nought' : 'cross';
    console.log("takeTurn was called with row: "+row+", column:"+column);
}
}


// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {

    function eq3(a, b, c) {
        return (a == b && b == c && a != null);
    }
    //check rows for winner:
    for (let i = 0; i < 3; i++) {
        if (eq3(board[i][0], board[i][1], board[i][2])) {
            const winrow = board[i][0]; //store the value of the winning cell as 'winrow'
            return(winrow === 'nought') ? 'noughts' : 'crosses' //ternary operator to change 'nought' to 'noughts' and 'cross' to 'crosses'  
        }
    }

    //check cols for winner:
    for (let i = 0; i < 3; i++) {
        if (eq3(board[0][i], board[1][i], board[2][i])) {
            const wincol = board[0][i];
            return(wincol === 'nought') ? 'noughts' : 'crosses' 
        }
    }
    
    //check diags for winner:
    if (eq3(board[0][0], board[1][1], board[2][2])) {
        const windia1 = board[0][0];
        return(windia1 === 'nought') ? 'noughts' : 'crosses';
    }

    if (eq3(board[0][2], board[1][1], board[2][0])) {
        const windia2 = board[0][2];
        return(windia2 === 'nought') ? 'noughts' : 'crosses'    
    }

    //check if draw:
    if (board.every(row => row.every(cell => cell))) {
        return "nobody";
    }
 
//if no conditions are met
    console.log("checkWinner was called");
    return null;
}

// Set the game state back to its original state to play another game.
function resetGame() {
    board = [[null, null, null], [null, null, null], [null, null, null]];
    player = 'nought';
    console.log("resetGame was called");
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    return board;
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}
