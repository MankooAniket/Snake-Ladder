document.addEventListener("DOMContentLoaded", () => {
    const winnerBox = document.getElementById("winnerBox");
    const clearBtn = document.getElementById("clearDataBtn");

    let leaderboardData = JSON.parse(localStorage.getItem("leaderboard")) || [];

    if (leaderboardData.length > 0) {
        winnerBox.innerHTML = leaderboardData
            .map(
                (entry, index) =>
                    `<p>${index + 1}. <strong>${entry.winner}</strong> - ${entry.time}</p>`
            )
            .join("");
    } else {
        winnerBox.innerHTML = `<p>No recent game data found.</p>`;
    }

    clearBtn.addEventListener("click", () => {
        localStorage.removeItem("leaderboard");
        leaderboardData = [];
        winnerBox.innerHTML = `<p>Leaderboard cleared.</p>`;
    });
});
