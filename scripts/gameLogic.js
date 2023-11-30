// Game Setup: Define the game board as a 2D array and the players.
(function() {
    // get elements
    const positionsElements = document.querySelectorAll('.positions')
    
    // adding eventListeners
    positionsElements.forEach(element => {
        element.addEventListener('click', (event) => {
            const elementRow = parseInt(element.getAttribute('data-row'));
            const elementCol = parseInt(element.getAttribute('data-col'));
            const test = 'X'
            console.log(`Element at row ${elementRow}, col ${elementCol} was clicked`)
            placePiece(test, elementRow, elementCol)
        })
    })
    
    
    function placePiece(player, row, col) {
        // reworked with eventlisteners
        // let row, col;
        do {
            row = row;
            col = col;
        } while (gameBoard[row][col]);
        
        gameBoard[row][col] = player;
        displayBoard();
    };
    
    
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
// function createPlayer(){

// }


    const player1 = new Player('John', 'X');
    const player2 = new Player('Rob', 'O');
    

    function displayBoard() {
        for (let row of gameBoard) {
            console.log(row.map(cell => cell || ' ').join(" | "));
            console.log("---------");
        };
    };

    
    function checkBoard(player){
        // Check rows and columns
        for(let i = 0; i < 3; i++){
            if((gameBoard[i][0] === player && gameBoard[i][1] === player && gameBoard[i][2] === player)||
            gameBoard[0][i] === player && gameBoard[1][i] === player && gameBoard[2][i] === player){
                return false;

        }
        // Check diagnals
        if((gameBoard[0][0] === player && gameBoard[1][1] === player && gameBoard[2][2] === player)||
        (gameBoard[0][2] === player && gameBoard[1][1] === player && gameBoard[2][0] === player)){
            return false;
    };

        }
        return true;
    };
    // using .length for practice for chinese checkers
    function isBoardFull(board) {
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {
                if (board[row][col] === null) {
                    return false; // Found an empty spot
                }
            }
        }
        return true; // No empty spots found
    }

    // reset the board so that it is ready for the next game
    function resetBoard(){
        for(row = 0; row < gameBoard.length; row++){
            for(let col = 0; col < gameBoard[row].length; col++){
                gameBoard[row][col] = null
            }
        }
    }
    

    // gameplay loop
    function startGame() {
        let gameBoard = resetBoard(); // Assuming resetBoard() initializes and returns a new board
        let currentPlayer = player1;
        let gameLoop = true;
    
        while (gameLoop) {
            placePiece(currentPlayer.marker);
    
            if (!checkBoard(currentPlayer.marker)) {
                console.log(`${currentPlayer.name} wins!`);
                currentPlayer.score++;
                break; // Exit the loop
            } else if (isBoardFull(gameBoard)) {
                console.log("It's a tie!");
                break; // Exit the loop
            };
    
            // Change current player
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        }
    }
    
    window.startGame = startGame;
    window.gameBoard = gameBoard
    // To start a game
    // startGame();
    


    // Gameplay Logic: Implement functions to check for a win or a tie
})();

// Things to add
// 1. Enhancing User Experience:
// 2. Input Validation:
// 3. Clearing the Board for a New Game:
// 4.  PickPlayer Function:
// 5. Enhancing User Experience: