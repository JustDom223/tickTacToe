// Game Setup: Define the game board as a 2D array and the players.
(function() {
    let gameBoard = [
        [null, null, null], // First row 
        [null, null, null], // Second row
        [null, null, null]  // Third row
    ];

    function displayBoard() {
        for (let row of gameBoard) {
            console.log(row.map(cell => cell || ' ').join(" | "));
            console.log("---------");
        }
    }

    const player1 = 'X';
    const player2 = 'O';

    function placePiece(player) {
        let row, col;
        do {
            row = prompt('Row (0, 1, or 2)?');
            col = prompt('Column (0, 1, or 2)?');
        } while (gameBoard[row][col]);

        gameBoard[row][col] = player;
        displayBoard();
    }

    function checkBoard(player){
        // Check rows and columns
        for(let i = 0; i < 3; i++){
            if((gameBoard[i][0] === player && gameBoard[i][1] === player && gameBoard[i][2] === player)||
                gameBoard[0][i] === player && gameBoard[1][i] === player && gameBoard[2][i] === player){
                    return false;
                }
        }
        // Check diagnals
        if((gameBoard[0][0] === player && gameBoard[1][1] === player && gameBoard[2][2] === player)||
           (gameBoard[0][2] === player && gameBoard[1][1] === player && gameBoard[2][0] === player)){
            return false;
    }
        return true;
    }

    function pickPlayer(){
        
    }


    let gameLoop = true;
    let currentPlayer = player1;

    while(gameLoop){
        placePiece(currentPlayer);
        if(!checkBoard(currentPlayer)){
            console.log(`Player ${currentPlayer} wins!`)
            gameLoop = false
        }
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
        // add isBoardFull

    
    


    // Gameplay Logic: Implement functions to check for a win or a tie.

    // Example of game loop (you'll need to implement turn logic and win condition)
    // placePiece(player1);
    // Add logic to alternate turns and check for a winner
})();


        // for(let i = 0; i<gameBoard.length; i++){
        //     console.log('i')
        //     for (let j = 0; j < gameBoard[i].length; j++){
        //         console.log('j')
        //     }
        // }};


// Player Turns: Create a system for player input and alternating turns.

// Game Loop: Implement a loop to keep the game running until there's a winner or a tie.

// Console Interaction: Handle input and output through the console.
