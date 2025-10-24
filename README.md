# 🐍 Snake & Ladders Game

A simple and fun **Snake & Ladders** game built using **HTML, CSS, and JavaScript only** — no external libraries!  
This project demonstrates front-end concepts, local storage usage, CRUD operations, and responsive design.

---

## 🌐 Live Demo  
👉 [Play Now](https://mankooaniket.github.io/Snake-Ladder/)

---

## 🎯 Project Overview

This is a two-player version of the classic Snake & Ladders game.  
Players roll a dice to move across the 100-block board, climbing ladders and avoiding snakes.  
The winner is stored in a persistent leaderboard using **Web Storage (LocalStorage)**.

---

## 🧩 Features

✅ **Responsive UI** — Works on mobile, tablet, and desktop  
✅ **Two-Player Gameplay** — Players take turns rolling the dice
✅ **Dynamic Board Rendering** — 100 tiles created via JS  
✅ **Snakes & Ladders Logic** — Classic rules implemented  
✅ **Scoreboard & Dice Animation**  
✅ **Persistent Leaderboard** — Stored using LocalStorage  
✅ **CRUD Operations**
- **Create** → Add new winners to leaderboard  
- **Read** → Display leaderboard results  
- **Update** → Player positions updated dynamically  
- **Delete** → Clear leaderboard using “Clear Data” button  

---

## 🧱 Tech Stack

- **HTML5** – Structure and game layout  
- **CSS3** – Styling and responsive design  
- **Vanilla JavaScript (ES6)** – Game logic, storage, and interactivity  
- **LocalStorage** – Data persistence (Leaderboard, Player positions)

---

## 🎮 How to Play

1. Open **index.html** in your browser.  
2. Click **Start Game** to open the game board.  
3. Click **Roll Dice** to move your token.  
4. First player to reach **100** wins! 🏆  
5. Winners are automatically saved to the leaderboard.  
6. Visit the **Leaderboard** page to view or clear game history.

---

## 🧠 Data Storage Details

- Player positions and leaderboard are stored in **LocalStorage**.
- Leaderboard persists between sessions until cleared.
- Example data format:

```json
[
  { "winner": "Player 1", "time": "10/24/2025, 10:45 PM" },
  { "winner": "Player 2", "time": "10/24/2025, 11:02 PM" }
]

