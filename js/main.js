document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("playerForm");
    const playerInput = document.getElementById("playerName");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const playerName = playerInput.value.trim();
        if (playerName) {
            localStorage.setItem("playerName", playerName);
            window.location.href = "pages/game.html";
        }
    });
});
