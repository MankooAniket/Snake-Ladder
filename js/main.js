document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("playerForm");
    const player1Input = document.getElementById("player1");
    const player2Input = document.getElementById("player2");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let player1 = player1Input.value.trim() || "Player 1";
        let player2 = player2Input.value.trim() || "Player 2";

        localStorage.setItem("player1", player1);
        localStorage.setItem("player2", player2);

        window.location.href = "pages/game.html";
    });
});
