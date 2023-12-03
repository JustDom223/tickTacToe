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
    const player1 = new Player('John', 'X');
    const player2 = new Player('Rob', 'O');


    function placePiece(playerMarker, row, col) {
        // reworked with eventlisteners
        // let row, col;
        do {
            row = row;
            col = col;
        } while (gameBoard[row][col]);
        
        gameBoard[row][col] = playerMarker;
        displayBoard();
    };
        
    // Update DOM and show placements
    function updateDOM(){

    }

    // update score
    playerScoreElement = document.querySelector('#playerScore')
    botScoreElement = document.querySelector('#botScore')
// update score needs work. its currently only for one score. 
    function updateScore(playerScore){
        playerScoreElement.innerText = playerScore.score

    }
    

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
    function resetDOM(){
        positionsElements.forEach(element => {
            element.innerText = null
        }
)}

    function endGame(currentPlayer){
        resetBoard()
        resetDOM()
        updateScore(currentPlayer)
    }
    
    // get elements
    const positionsElements = document.querySelectorAll('.positions')
    const startGameButtonElement = document.querySelector('#startGameButton')
    
    function startGame() {
        resetBoard(); // Assuming resetBoard() initializes and returns a new board
        let currentPlayer = player1;
    
        // adding eventListeners
        positionsElements.forEach(element => {
            element.addEventListener('click', (event) => {
                const elementRow = parseInt(element.getAttribute('data-row'));
                const elementCol = parseInt(element.getAttribute('data-col'));
                element.innerText = currentPlayer.marker
            
                console.log(`Element at row ${elementRow}, col ${elementCol} was clicked`)
                placePiece(currentPlayer.marker, elementRow, elementCol)
                        console.log('The if statements begin')
                        if (!checkBoard(currentPlayer.marker)) {
                            console.log(`${currentPlayer.name} wins!`);
                            currentPlayer.score++;
                            endGame(currentPlayer)
                        } else if (isBoardFull(gameBoard)) {
                            console.log("It's a tie!");
                            endGame()
                        };
                        // Change current player
                        currentPlayer = currentPlayer === player1 ? player2 : player1;
            });
        });
    }
    // Start game button
    startGameButtonElement.addEventListener('click', (event) => {
        startGame()
    })

})();

// Things to add
// 1. Enhancing User Experience:
// 2. Input Validation:
// 3. Clearing the Board for a New Game:
// 4.  PickPlayer Function:
// 5. Enhancing User Experience: