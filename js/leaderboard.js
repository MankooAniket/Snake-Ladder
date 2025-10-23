document.addEventListener("DOMContentLoaded", () => {
    const winnerBox = document.getElementById("winnerBox");
    const clearBtn = document.getElementById("clearDataBtn");

    // 🏁 Load last winner from localStorage
    const lastWinnerData = localStorage.getItem("lastWinner");

    if (lastWinnerData) {
        const data = JSON.parse(lastWinnerData);
        winnerBox.innerHTML = `
            <p><strong>${data.winner}</strong></p>
            <p>Played on: ${data.time}</p>
        `;
    } else {
        winnerBox.innerHTML = `<p>No recent game data found.</p>`;
    }

    // 🧹 Clear storage data
    clearBtn.addEventListener("click", () => {
        localStorage.removeItem("lastWinner");
        winnerBox.innerHTML = `<p>Leaderboard cleared.</p>`;
    });
});
