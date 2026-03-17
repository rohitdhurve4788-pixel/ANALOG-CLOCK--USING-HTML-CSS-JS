# ⏰ Analog Clock


As a Beginner I make A responsive analog clock built using **HTML, CSS, and JavaScript**.
This project displays the current system time with moving hour, minute, and second hands.

## 🚀 Live Demo



## 📌 Features

* Real-time analog clock using JavaScript
* Hour, minute, and second hands
* Responsive design for desktop and mobile
* Clean and simple UI
* Built completely from scratch

## 🛠️ Technologies Used

* **HTML5** – Structure
* **CSS3** – Styling and layout
* **JavaScript (ES6)** – Time logic and hand rotation

## ⚙️ How It Works

The project uses JavaScript's `Date()` object to get the current time.
The clock hands are rotated using CSS `transform: rotate()` based on:

* **Seconds →** `seconds × 6`
* **Minutes →** `minutes × 6`
* **Hours →** `(hours × 30) + minute offset`

The clock updates every second using `setInterval()`.

## 📱 Responsive Design

Media queries are used to adjust the clock size and hand lengths for smaller screens.

## 📂 Project Structure

analog-clock
├── index.html
├── style.css
├── script.js
└── README.md

## 👨‍💻 Author

**Rohit Dhurve**

## ⭐ If you like this project

Feel free to star the repository.
