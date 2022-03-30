"use strict";

const boardElement = document.getElementById('board');

const ticTacToeArray = [
    ["paintWhite", "paintBlack", "paintWhite"],
    ["paintBlack", "paintWhite", "paintBlack"],
    ["paintWhite", "paintBlack", "paintWhite"],
];
const cheesArray = [
    ["paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite"],
    ["paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack"],
    ["paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite"],
    ["paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack"],
    ["paintBlack", "paintWhite", "paintBlack", "paintWhite kingIcon", "paintBlack", "paintWhite", "paintBlack", "paintWhite"],
    ["paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack"],
    ["paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite"],
    ["paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack", "paintWhite", "paintBlack"]
];

const kingPlasment = {
    posY: -1,
    posX: -1
}

function setupBoard(boardBlockHeight, boardBlockWidth) {
    boardElement.innerHTML = "";//clear board
    const blockHeight = 50;
    const blockWidth = 50;
    const boardHeight = boardBlockHeight * blockHeight;
    const boardWidth = boardBlockWidth * blockWidth;

    boardElement.style.width = boardWidth + "px";
    boardElement.style.height = boardHeight + "px";

    //reset kingPlasment
    kingPlasment.posY = -1;
    kingPlasment.posX = -1;
}

function makeBlock(cssColorClass, idValue) {
    let block = document.createElement('div');
    block.id = idValue;//block.setAttribute("id", idValue);  
    //block.classList.add('block');
    //block.classList.add(cssColorClass);
    block.className = 'block ' + cssColorClass;
    boardElement.appendChild(block);
}

function makeTicTacToeBoard() {

    setupBoard(3, 3);

    for (let yPos = 0; yPos < 3; yPos++) {

        for (let xPos = 0; xPos < 3; xPos++) {

            const colorCss = ticTacToeArray[yPos][xPos];
            makeBlock(colorCss, "Y" + yPos + "X" + xPos);

        }
    }
}

function makeCheesBoard() {

    setupBoard(8, 8);

    for (let yPos = 0; yPos < 8; yPos++) {

        for (let xPos = 0; xPos < 8; xPos++) {

            const colorCss = cheesArray[yPos][xPos];

            if (colorCss.includes('kingIcon')) {
                kingPlasment.posY = yPos;
                kingPlasment.posX = xPos;
            }

            makeBlock(colorCss, "Y" + yPos + "X" + xPos);

        }
    }
}

function moveKingUp() {
    if (kingPlasment.posY === -1) {//if there is no king placed
        return;
    }

    const kingDiv = document.getElementById("Y" + kingPlasment.posY + "X" + kingPlasment.posX);
    const kingsNewPosY = kingPlasment.posY - 1;

    if (kingsNewPosY < 0 || kingsNewPosY > 7) {
        return;//prevent king from going outside board.
    }
    const kingMoveToDiv = document.getElementById("Y" + kingsNewPosY + "X" + kingPlasment.posX);

    kingDiv.classList.toggle("kingIcon");
    kingMoveToDiv.classList.toggle("kingIcon");

    kingPlasment.posY = kingPlasment.posY - 1;
}

document.getElementById("btn-whiteBlock").addEventListener("click", () => makeBlock("paintWhite"));