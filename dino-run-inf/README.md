# 🦖 NEA Dino Game V2

A custom-built, feature-rich version of the classic Chrome Dino game, developed as part of my A-Level Computer Science NEA. This game is written in **JavaScript**, **HTML**, and **CSS**, using the **Canvas API**, and is fully modular and extendable.

---

## 🎮 Game Features

- **Classic Mode**: Infinite runner with increasing speed and difficulty
- **Themed Environments**: Beach, Jungle, and City — each with unique Day/Night variants
- **2-Player Mode**: Includes cooperative mechanics like a coconut launcher
- **Game Modes**:

  - Endless
  - Time Trial
  - Score Target

- **Power-Ups**:

  - Score Multiplier
  - Shield
  - Slow Time
  - Fire Breathing

- **Mechanics**:
  - Scalable difficulty
  - Collision & hitbox system
  - Pause/resume system
  - Modular power-up and obstacle spawner

---

## ⚙️ Tech Stack

- **Languages**: JavaScript, HTML5, CSS3
- **Rendering**: HTML Canvas API
- **Tools/Libraries**:
  - [Howler.js](https://howlerjs.com/) for sound
  - [GSAP](https://gsap.com/) for smooth animations

---

## 🗂️ Project Structure

dino-v2/
├── index.html
├── README.md
├── /style
│ └── main.css
├── /js
│ ├── main.js
│ ├── gameState.js
│ ├── player.js
│ ├── coconutPlayer.js
│ ├── obstacle.js
│ ├── powerups.js
│ ├── ui.js
│ ├── controls.js
│ ├── config.js
│ ├── storage.js
│ ├── achievement.js
│ ├── ground.js
│ └── utils.js
├── /assets
│ ├── /img
│ │ ├── dino/.keep
│ │ ├── obstacles/.keep
│ │ ├── backgrounds/.keep
│ │ └── icons/.keep
│ ├── /audio
│ │ ├── jump.wav
│ │ ├── hit.wav
│ │ └── powerup.mp3
│ └── /fonts
│ └── pixel-font.ttf
├── /data
│ └── achievements.json

---

## 🧠 NEA Objectives

**This project demonstrates a range of advanced programming and software engineering concepts, including**:

- Modular and original code design — structured architecture with separate modules for player, obstacles, power-ups, and more
- Object-Oriented Programming (OOP) — use of constructor functions/classes to manage game entities and systems
- User Interface Development — dynamic HUD elements, feedback animations, and accessibility options
- Game Physics and Logic — custom collision detection, scalable speed mechanics, power-up interactions
- Version Control — full project tracked using Git and GitHub for iterative development and version tracking

---

## 🚀 How to Run

1. Clone the repository:

- https://github.com/Shxrkzy0/NEA-dino-v2.git

2. Open the project folder
3. Launch the game by opening [index.html] in any modern browser
4. Use the keyboard to control the player(s) and navigate the gamemodes

---

## 🛡️ Security Considerations

While this game does not handle sensitive data, here are some general security measures taken to ensure a safe experience for players:

- No Data Collection: The game does not collect or share any personal information, and all data is stored locally within the user's browser (such as game progress or settings).
- External Libraries: Only trusted, open-source libraries like Howler.js and GSAP have been used, minimizing the risk of malicious code.
- Cross-Origin Restrictions: Any external requests made (such as for assets) are fully controlled to avoid cross-origin vulnerabilities.

---

## 🎉 Thank You!

Thank you for checking out Dino Game V2! This game is a testament to both the challenges and rewards of game development. I hope you enjoy playing it as much as I enjoyed creating it. Stay tuned for more updates, and happy gaming!
