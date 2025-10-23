document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const rollBtn = document.getElementById("rollDiceBtn");
    const resetBtn = document.getElementById("resetBtn");
    const diceImage = document.getElementById("diceImage");
    const currentPlayerDisplay = document.getElementById("currentPlayer");

    // 🪜 Ladders & 🐍 Snakes positions
    const ladders = {
        3: 22,
        5: 8,
        11: 26,
        20: 29,
        27: 56,
        72: 92,
        80: 99
    };

    const snakes = {
        17: 4,
        19: 7,
        21: 9,
        43: 34,
        54: 28,
        62: 18,
        87: 24,
        93: 73,
        95: 75,
        98: 79
    };

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

    const token1 = document.createElement("div");
    const token2 = document.createElement("div");
    token1.classList.add("token", "player1");
    token2.classList.add("token", "player2");
    board.appendChild(token1);
    board.appendChild(token2);

    // 🧍 Initial setup
    updatePlayerPosition(0);
    updatePlayerPosition(1);

    // 🎲 Dice roll handler
    rollBtn.addEventListener("click", () => {
        const roll = Math.floor(Math.random() * 6) + 1;
        diceImage.src = `assets/images/dice${roll}.png`;

        movePlayer(currentPlayer, roll);

        // 🏁 Win condition
        if (playerPositions[currentPlayer] >= 100) {
            setTimeout(() => {
                alert(`🏆 Player ${currentPlayer + 1} wins!`);
                saveWinnerToStorage(currentPlayer + 1);
                window.location.href = "leaderboard.html";
            }, 300);
            return;
        }

        // Switch player
        currentPlayer = currentPlayer === 0 ? 1 : 0;
        currentPlayerDisplay.textContent = `Player ${currentPlayer + 1}`;
    });

    // 🔁 Reset button
    resetBtn.addEventListener("click", () => {
        localStorage.removeItem("lastWinner");
        window.location.reload();
    });

    // 🧩 Helper functions
    function movePlayer(playerIndex, roll) {
        let newPosition = playerPositions[playerIndex] + roll;

        // Don’t go beyond 100
        if (newPosition > 100) newPosition = 100;

        // 🪜 Check ladders
        if (ladders[newPosition]) {
            newPosition = ladders[newPosition];
        }

        // 🐍 Check snakes
        if (snakes[newPosition]) {
            newPosition = snakes[newPosition];
        }

        playerPositions[playerIndex] = newPosition;
        updatePlayerPosition(playerIndex);
    }

    function updatePlayerPosition(playerIndex) {
        const cells = document.querySelectorAll(".cell");
        const token = playerIndex === 0 ? token1 : token2;
        const position = playerPositions[playerIndex];

        // Find cell position index (since grid is reversed in pattern)
        const cellIndex = 100 - position;
        const targetCell = cells[cellIndex];

        if (targetCell) {
            targetCell.appendChild(token);
        }
    }

    function saveWinnerToStorage(playerNumber) {
        const timestamp = new Date().toLocaleString();
        localStorage.setItem("lastWinner", JSON.stringify({
            winner: `Player ${playerNumber}`,
            time: timestamp
        }));
    }
});
