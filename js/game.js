document.addEventListener("DOMContentLoaded", () => {
    let p1sum = 0;
    let p2sum = 0;
    let turn = 1;

    const diceSound = new Audio("../assets/sounds/dice.mp3");
    const winSound = new Audio("../assets/sounds/win.mp3");

    const diceCont = document.getElementById("diceCont");
    const tog = document.getElementById("tog");
    const diceNum = document.getElementById("dice");
    const diceBtn = document.getElementById("diceBtn");
    const diceImage = document.getElementById("diceImage");
    const boardContainer = document.querySelector(".board-container");

    const player1Token = document.createElement("div");
    player1Token.id = "p1";
    const player2Token = document.createElement("div");
    player2Token.id = "p2";

    boardContainer.appendChild(player1Token);
    boardContainer.appendChild(player2Token);

    const player1Name = localStorage.getItem("player1") || "Player 1";
    const player2Name = localStorage.getItem("player2") || "Player 2";

    tog.textContent = `${player1Name}'s Turn`;

    const jumps = {
        1: 38, 4: 14, 8: 30, 21: 42, 28: 76, 32: 10, 36: 6, 48: 26,
        50: 67, 62: 18, 71: 92, 80: 99, 88: 24, 95: 56, 97: 78
    };

    for (let i = 100; i >= 1; i--) {
        const box = document.createElement("div");
        box.className = "box";
        box.id = `b${i < 10 ? "0" + i : i}`;
        boardContainer.appendChild(box);
    }

    function getBoxSize() {
        return boardContainer.clientWidth / 10;
    }

    function moveToken(playerId, position) {
        const token = document.getElementById(playerId);
        const boxSize = getBoxSize();

        if (position === 0) position = 1;

        let row = Math.floor((position - 1) / 10);
        let col = (position - 1) % 10;

        if (row % 2 === 1) {
            col = 9 - col;
        }

        token.style.left = `${col * boxSize}px`;
        token.style.top = `${(9 - row) * boxSize}px`;
    }

    function updatePosition(player, diceRoll) {
        if (player === 'p1') {
            let nextPos = p1sum + diceRoll;
            if (nextPos > 100) nextPos = p1sum;
            if (jumps[nextPos]) nextPos = jumps[nextPos];
            p1sum = nextPos;
            moveToken('p1', p1sum);
            if (p1sum === 100) return 'win';
        } else {
            let nextPos = p2sum + diceRoll;
            if (nextPos > 100) nextPos = p2sum;
            if (jumps[nextPos]) nextPos = jumps[nextPos];
            p2sum = nextPos;
            moveToken('p2', p2sum);
            if (p2sum === 100) return 'win';
        }
        return null;
    }

    function saveWinnerToLeaderboard(name) {
        const timestamp = new Date().toLocaleString();
        let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
        leaderboard.push({
            winner: name,
            time: timestamp
        });
        localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    }

    function repositionTokens() {
        moveToken('p1', p1sum);
        moveToken('p2', p2sum);
    }

    window.addEventListener('resize', () => {
        repositionTokens();
    });

    player1Token.style.left = '-55px';
    player1Token.style.top = `${getBoxSize() * 9}px`;
    player2Token.style.left = '-55px';
    player2Token.style.top = `${getBoxSize() * 8.3}px`;

    diceBtn.classList.add("red-turn");

    diceBtn.addEventListener("click", () => {
        diceSound.play();
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        diceNum.textContent = diceRoll;
        diceImage.src = `../assets/images/dice${diceRoll}.png`;

        let result = null;

        if (turn % 2 === 1) {
            result = updatePosition('p1', diceRoll);
            if (result === 'win') {
                winSound.play();
                saveWinnerToLeaderboard(player1Name);
                setTimeout(() => {
                    alert(`${player1Name} wins! 🎉`);
                    location.reload();
                }, 100);
            } else {
                tog.textContent = `${player2Name}'s Turn`;
                diceBtn.classList.remove("red-turn");
                diceBtn.classList.add("yellow-turn");
            }
        } else {
            result = updatePosition('p2', diceRoll);
            if (result === 'win') {
                winSound.play();
                saveWinnerToLeaderboard(player2Name);
                setTimeout(() => {
                    alert(`${player2Name} wins! 🎉`);
                    location.reload();
                }, 100);
            } else {
                tog.textContent = `${player1Name}'s Turn`;
                diceBtn.classList.remove("yellow-turn");
                diceBtn.classList.add("red-turn");
            }
        }
        turn++;
    });

});
