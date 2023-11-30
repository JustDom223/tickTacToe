// Game Setup: Define the game board as a 2D array and the players.
(function() {
    let gameBoard = [
        [null, null, null], // First row 
        [null, null, null], // Second row
        [null, null, null]  // Third row
    ];

    function Player(name, marker){
        this.name = name;
        this.marker = marker;
        this.score = 0;
    }
// create an input to add 
    const player1 = new Player('John', 'X');
    const player2 = new Player('Rob', 'O');
    

    function displayBoard() {
        for (let row of gameBoard) {
            console.log(row.map(cell => cell || ' ').join(" | "));
            console.log("---------");
        };
    };

    function placePiece(player) {
        // reworked with eventlisteners
        let row, col;
        do {
            row = prompt('Row (0, 1, or 2)?');
            col = prompt('Column (0, 1, or 2)?');
        } while (gameBoard[row][col]);
        
        gameBoard[row][col] = player;
        displayBoard();
    };
    
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
    };
        return true;
    };
    

    // gameplay loop
    let gameLoop = true;
    let currentPlayer = player1;
    while(gameLoop){
        placePiece(currentPlayer.marker);
        if(!checkBoard(currentPlayer.marker)){
            console.log(`${currentPlayer.name} wins!`)
            currentPlayer.score++;
            gameLoop = false

        };
        // Player Turns: Create a system for player input and alternating turns.
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    
    


    // Gameplay Logic: Implement functions to check for a win or a tie
})();

// Things to add
// 1. Enhancing User Experience:
// 2. Input Validation:
// 3. Clearing the Board for a New Game:
// 4.  PickPlayer Function:
// 5. Enhancing User Experience: