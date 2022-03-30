"use strict";

const boardElement = document.getElementById('board');
const ticTacToeArray = [
    ["paintWhite", "paintBlack", "paintWhite"],
    ["paintBlack", "paintWhite", "paintBlack"],
    ["paintWhite", "paintBlack", "paintWhite"],
];
const cheesArray = [
    ["paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack"],
    ["paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite"],
    ["paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack"],
    ["paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite"],
    ["paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack"],
    ["paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite"],
    ["paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack"],
    ["paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite"]
];

function setupBoard(boardBlockHeight, boardBlockWidth) {
    boardElement.innerHTML = "";//clear board
    const blockHeight = 50;
    const blockWidth = 50;
    const boardHeight = boardBlockHeight * blockHeight;
    const boardWidth = boardBlockWidth * blockWidth;

    boardElement.style.width = boardWidth + "px";
    boardElement.style.height = boardHeight + "px";
}

function makeBlock(cssColorClass) {
    let block = document.createElement('div');
    block.classList.add('block');
    block.classList.add(cssColorClass);
    boardElement.appendChild(block);
}

function makeTicTacToeBoard() {

    setupBoard(3, 3);

    for (let yPos = 0; yPos < 3; yPos++) {

        for (let xPos = 0; xPos < 3; xPos++) {

            const colorCss = ticTacToeArray[yPos][xPos];
            makeBlock(colorCss);

        }
    }
}

function makeCheesBoard() {

    setupBoard(8, 8);

    for (let yPos = 0; yPos < 8; yPos++) {

        for (let xPos = 0; xPos < 8; xPos++) {

            const colorCss = cheesArray[yPos][xPos];
            makeBlock(colorCss);

        }
    }
}

document.getElementById("btn-whiteBlock").addEventListener("click", () => makeBlock("paintWhite"));