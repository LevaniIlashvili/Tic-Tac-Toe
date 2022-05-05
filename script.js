"use strict";

const gameBoard = (function() {
    const board = ['', '', '', '', '', '', '', '', ''];
    return {board};
})();

const boardToScreen = (function() {
    const grid = document.querySelectorAll('.grid');
    const gridArr = Array.from(grid);
    const display = () => {grid.forEach(element => {
        element.textContent = gameBoard.board[gridArr.indexOf(element)];
    })}
    return {display, grid, gridArr}
})();


const placeMark = (function() {
    let currentPlayer;
    const reset = document.querySelector('.reset');
    reset.addEventListener('click', () => {
        currentPlayer = undefined;
        gameBoard.board.forEach(element => {
            gameBoard.board[gameBoard.board.indexOf(element)] = '';
            boardToScreen.grid.forEach(element => {
                boardToScreen.grid[boardToScreen.gridArr.indexOf(element)].textContent = '';
            });
        });
        winCondition.winnerText.textContent = "X's turn"
    });
    boardToScreen.grid.forEach(element => {
        element.addEventListener('click', () => {
            // prevent from placing mark if its placed
            if(gameBoard.board[boardToScreen.gridArr.indexOf(element)] != '') {
                return;
            }
            if(currentPlayer === 'o' || currentPlayer === undefined) {
                currentPlayer = 'x';
                winCondition.winnerText.textContent = `O's turn`;
            } else if(currentPlayer === 'x') {
                currentPlayer = 'o';
                winCondition.winnerText.textContent = `X's turn`;
            }
            if(currentPlayer === null) {
                return; 
            } else {
                element.textContent = currentPlayer;
                gameBoard.board[boardToScreen.gridArr.indexOf(element)] = currentPlayer;
                winCondition.checkWin(currentPlayer);
            }
            if(winCondition.checkWin(currentPlayer)) {
                currentPlayer = null;
            }
            console.log(currentPlayer);
        });
    });
    return {currentPlayer}
})();

const winCondition = (function() {
    const winnerText = document.querySelector('.winner')
    const checkWin = (currPlayer) => {
        if(gameBoard.board[0] === currPlayer && gameBoard.board[1] === currPlayer && gameBoard.board[2] === currPlayer) {
            if(currPlayer === 'x') {
                winnerText.textContent = 'Winner is ' + currPlayer.toUpperCase();
            } else {
                winnerText.textContent = 'Winner is ' + currPlayer.toUpperCase();
            }
            return true;
        } else if(gameBoard.board[3] === currPlayer && gameBoard.board[4] === currPlayer && gameBoard.board[5] === currPlayer) {
            if(currPlayer === 'x') {
                winnerText.textContent = 'Winner is ' + currPlayer.toUpperCase();
            } else {
                winnerText.textContent = 'Winner is ' + currPlayer.toUpperCase();
            }
            return true;
        } else if(gameBoard.board[6] === currPlayer && gameBoard.board[7] === currPlayer && gameBoard.board[8] === currPlayer) {
            if(currPlayer === 'x') {
                winnerText.textContent = 'Winner is ' + currPlayer.toUpperCase();
            } else {
                winnerText.textContent = 'Winner is ' + currPlayer.toUpperCase();
            }
            return true;
        } else if(gameBoard.board[0] === currPlayer && gameBoard.board[3] === currPlayer && gameBoard.board[6] === currPlayer) {
            if(currPlayer === 'x') {
                winnerText.textContent = 'Winner is ' + currPlayer.toUpperCase();
            } else {
                winnerText.textContent = 'Winner is ' + currPlayer.toUpperCase();
            }
            return true;
        } else if(gameBoard.board[1] === currPlayer && gameBoard.board[4] === currPlayer && gameBoard.board[7] === currPlayer) {
            if(currPlayer === 'x') {
                winnerText.textContent = 'Winner is ' + currPlayer.toUpperCase();
            } else {
                winnerText.textContent = 'Winner is ' + currPlayer.toUpperCase();
            }
            return true;
        } else if(gameBoard.board[2] === currPlayer && gameBoard.board[5] === currPlayer && gameBoard.board[8] === currPlayer) {
            if(currPlayer === 'x') {
                winnerText.textContent = 'Winner is ' + currPlayer.toUpperCase();
            } else {
                winnerText.textContent = 'Winner is ' + currPlayer.toUpperCase();
            }
            return true;
        } else if(gameBoard.board[0] === currPlayer && gameBoard.board[4] === currPlayer && gameBoard.board[8] === currPlayer) {
            if(currPlayer === 'x') {
                winnerText.textContent = 'Winner is ' + currPlayer.toUpperCase();
            } else {
                winnerText.textContent = 'Winner is ' + currPlayer.toUpperCase();
            }
            return true;
        } else if(gameBoard.board[2] === currPlayer && gameBoard.board[4] === currPlayer && gameBoard.board[6 ] === currPlayer) {
            if(currPlayer === 'x') {
                winnerText.textContent = 'Winner is ' + currPlayer.toUpperCase();
            } else {
                winnerText.textContent = 'Winner is ' + currPlayer.toUpperCase();
            }
            return true;
        } else if(gameBoard.board.includes('') === false) {
            console.log(gameBoard.board.includes(''))
            winnerText.textContent = 'Tie';
        }
    }
    return {checkWin, winnerText}
})();




