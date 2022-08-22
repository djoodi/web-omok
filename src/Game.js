import { INVALID_MOVE } from 'boardgame.io/core';

const BOARD_SIZE = 225;
const STRIDE_LENGTH = 15;

// Return true if `cells` is in a winning configuration.
function IsVictory(cells, player) {
    if (CheckHorizontal(cells, player)) return true;
    if (CheckVertical(cells, player)) return true;
    if (CheckDiagonalMajor(cells, player)) return true;
    if (CheckDiagonalMinor(cells, player)) return true;

    return false;
}

function CheckHorizontal(cells, player) {
    for (let x = 0; x < STRIDE_LENGTH; x++) {

        let count = 0;
        let chain = false;

        for (let y = 0; y < STRIDE_LENGTH; y++) {

            const cell = cells[15 * x + y];

            if (cell === player && chain) {
                count++;
            }

            if (cell === player && !chain) {
                chain = true;
                count++;
            }

            if (cell !== player && chain) {
                chain = false;
                count = 0;
            }

            if (count >= 5) return true;
        }
    }

    return false;
}

function CheckVertical(cells, player) {
    for (let y = 0; y < STRIDE_LENGTH; y++) {

        let count = 0;
        let chain = false;

        for (let x = 0; x < STRIDE_LENGTH; x++) {

            const cell = cells[15 * x + y]

            if (cell === player && chain) {
                count++;
            }

            if (cell === player && !chain) {
                chain = true;
                count++;
            }

            if (cell !== player && chain) {
                chain = false;
                count = 0;
            }

            if (count >= 5) return true;

        }
    }

    return false;
}


// Checks diagonals as if you raised your left arm.
function CheckDiagonalMajor(cells, player) {

    // checks lower-right diags top-side

    for (let x = 0; x < STRIDE_LENGTH; x++) {

        let count = 0;
        let chain = false;

        for (let y = 0; y < STRIDE_LENGTH; y++) {

            const index = x + (y * 16);
            if (index > BOARD_SIZE - (x * 15)) {
                continue;
            }

            const cell = cells[index]

            if (cell === player && chain) {
                count++;
            }

            if (cell === player && !chain) {
                chain = true;
                count++;
            }

            if (cell !== player && chain) {
                chain = false;
                count = 0;
            }

            if (count >= 5) return true;
        }
    }

    // checks lower-right diags left-side

    for (let y = 1; y < STRIDE_LENGTH; y++) {

        let count = 0;
        let chain = false;

        for (let x = 0; x < STRIDE_LENGTH; x++) {

            const index = y * 15 + (x * 16);

            if (index > BOARD_SIZE - y) {
                continue;
            }

            const cell = cells[index]

            if (cell === player && chain) {
                count++;
            }

            if (cell === player && !chain) {
                chain = true;
                count++;
            }

            if (cell !== player && chain) {
                chain = false;
                count = 0;
            }

            if (count >= 5) return true;

        }
    }

    return false;

}

function CheckDiagonalMinor(cells, player) {

    // checks lower-left diagonals from top-side

    for (let x = 1; x < STRIDE_LENGTH; x++) {

        let count = 0;
        let chain = false;

        for (let y = 0; y < STRIDE_LENGTH; y++) {

            const index = x + (y * 14);

            if (index > x * 15 + 1) continue;

            const cell = cells[index]

            if (cell === player && chain) {
                count++;
            }

            if (cell === player && !chain) {
                chain = true;
                count++;
            }

            if (cell !== player && chain) {
                chain = false;
                count = 0;
            }

            if (count >= 5) return true;

        }
    }

    for (let y = 1; y < STRIDE_LENGTH; y++) {

        let count = 0;
        let chain = false;

        for (let x = 0; x < STRIDE_LENGTH; x++) {

            const index = (y * 15) + 14 + (x * 14);

            if (index > BOARD_SIZE - 1) continue;

            const cell = cells[index]

            if (cell === player && chain) {
                count++;
            }

            if (cell === player && !chain) {
                chain = true;
                count++;
            }

            if (cell !== player && chain) {
                chain = false;
                count = 0;
            }

            if (count >= 5) return true;

        }
    }
}

// Return true if all `cells` are occupied.
function IsDraw(cells) {
    return cells.filter(c => c === null).length === 0;
}

export const Omok = {
    name: 'Omok',
    setup: () => ({ cells: Array(225).fill(null) }),

    turn: {
        minMoves: 1,
        maxMoves: 1,
    },

    moves: {
        clickCell: (G, ctx, id) => {
            if (G.cells[id] !== null) {
                return INVALID_MOVE;
            }
            G.cells[id] = ctx.currentPlayer;
        }
    },

    minPlayers: 2,
    maxPlayers: 2,

    endIf: (G, ctx) => {
        if (IsVictory(G.cells, ctx.currentPlayer)) {
            return { winner: ctx.currentPlayer };
        }
        if (IsDraw(G.cells)) {
            return { draw: true };
        }
    },
};