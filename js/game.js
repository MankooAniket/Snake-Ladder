document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const rollBtn = document.getElementById("rollDiceBtn");
    const resetBtn = document.getElementById("resetBtn");
    const diceImage = document.getElementById("diceImage");
    const currentPlayerDisplay = document.getElementById("currentPlayer");

    // 🟩 Generate 100 board cells
    for (let i = 100; i >= 1; i--) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = i;
        board.appendChild(cell);
    }

    // 🎯 Initialize Players
    let playerPositions = [1, 1];
    let currentPlayer = 0;

    rollBtn.addEventListener("click", () => {
        // Dice logic to be added next step
        const roll = Math.floor(Math.random() * 6) + 1;
        diceImage.src = `assets/images/dice${roll}.png`;
        console.log(`Player ${currentPlayer + 1} rolled ${roll}`);
    });

    resetBtn.addEventListener("click", () => {
        localStorage.removeItem("lastWinner");
        window.location.reload();
    });
});