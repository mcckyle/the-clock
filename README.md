[![Deploy to GitHub Pages](https://github.com/mcckyle/the-clock/actions/workflows/deploy.yml/badge.svg)](https://github.com/mcckyle/the-clock/actions/workflows/deploy.yml)
[![License](https://img.shields.io/badge/License-MIT-blue)](./LICENSE)
# ⏰ Analog Clock

A classical **Analog Clock** built with **React** and **Vite**. This project is hosted on **GitHub Pages** for easy access and demonstrates real-time updates with smooth animations.

---

## 🚀 Features
- Real-time clock synchronized with your system time.
- Modular design with dedicated, single-responsibility React components.
- Classic **Roman numerals** and **animated hands** (hour, minute, second).
- Smooth **tick highlight effect** for the current second.
- Fully responsive layout with a **dark-themed design**.
- Built using **React + Vite** for speed and simplicity.

---

## 🛠️ Tech Stack
- **React** – UI library
- **Vite** – Fast bundler & dev environment
- **CSS Modules** – Scoped styling
- **GitHub Pages** – Deployment

---

## Installation

Clone the repository:

```bash
git clone https://github.com/mcckyle/the-clock.git
cd the-clock
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

---

## 📁 Project Structure

```
the-clock/
├── .github/              # GitHub workflows (CI/CD).
├── public/               # Static assets (served as-is).
├── src/                  # Application Source code.
│   ├── components/       # Reusable React components.
│   │   ├── AnalogClock/
│   │   │   ├── AnalogClock.jsx
│   │   │   └── AnalogClock.module.css
│   │   │
│   │   ├── TickMarks/
│   │   │   ├── TickMarks.jsx
│   │   │   └── TickMarks.module.css
│   │   │
│   │   ├── RomanNumerals/
│   │   │   ├── RomanNumerals.jsx
│   │   │   └── RomanNumerals.module.css
│   │   │
│   │   ├── ClockHands/
│   │   │   ├── ClockHands.jsx
│   │   │   └── ClockHands.module.css
│   │
│   ├── utils/
│   │   ├── useHandAngles.js
│   │   ├── useClockTime.js
│   │   ├── clock.js
│   │   └── formatTime.jsx
│   │
│   ├── App.jsx           # Main React application component.
│   ├── main.jsx          # React DOM entry point.
│   ├── App.css           # Styles specific to App.jsx.
│   └── index.css         # Global styles.
│
├── .gitignore            # Specifies intentionally untracked files and folders to ignore.
├── LICENSE               # Open source license for the project.
├── README.md             # Project overview, instructions, and documentation.
├── eslint.config.js      # ESLint configuration.
├── index.html            # HTML entry point.
├── vite.config.js        # Vite config for build and development.
├── package.json          # Project metadata, dependencies, and scripts.
└── package-lock.json     # Exact versions of installed dependencies.
```

---

## Deployment

This project is deployed via **GitHub Pages**. You can view it live here: https://mcckyle.github.io/the-clock/

---

## Contributing

Contributions are welcome! Feel free to fork the repo and submit some pull requests.

---

## License

This project is open-source and available under the **MIT License**.

---

## Contact

For questions or feedback, reach out via GitHub.

---
