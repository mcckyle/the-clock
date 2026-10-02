[![Deploy to GitHub Pages](https://github.com/mcckyle/the-clock/actions/workflows/deploy.yml/badge.svg)](https://github.com/mcckyle/the-clock/actions/workflows/deploy.yml)
[![License](https://img.shields.io/badge/License-MIT-blue)](./LICENSE)

# Horologium Regale

A classical **Analog Clock** built with **React** and **Vite**. This project is hosted on **GitHub Pages** for easy access and demonstrates real-time updates with smooth animations.

[View the live clock](https://mcckyle.github.io/the-clock/)

---

## Features
- **Real-time Central Time** - The clock follows `America/Chicago`, including daylight-saving transitions.
- **Continuous hand movement** - Hour, minute, and second hands track fractional time for smooth motion rather than stepping between whole seconds.
- **Classical Roman dial**  - Roman numerals and graduated minute divisions establish a formal horological composition.
- **Responsive presentation** - The clock scales with the viewport while preserving its circular proportions and visual hierarchy.
- **Component-based architecture** - The dial, numerals, divisions, and hands are separated into focused React components.
- **CSS-driven craftsmanship** - CSS modules provide scoped styling for the clock's individual visual systems.
- **Accessible presentation** - The clock exposes a concise accessible label while decorative SVG elements remain hidden from assistive technology.
- **GitHub Pages deployment** - The application is built for a lightweight static deployment with Vite.

---

## Technology

| Technology | Purpose |
| --- | --- |
| [**React**](https://react.dev/) | Component-based application architecture |
| [**Vite**](https://vite.dev/) | Development server and production build tooling |
| **CSS Modules** | Scoped component styling |
| **SVG** | Precision dial divisions and Roman numerals |
| **JavaScript** | Time calculations and hand positioning |
| **GitHub Pages** | Static hosting and deployment |

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

## Architecture

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
│   │   └── clock.js
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

This project is deployed automatically to GitHub Pages through the repository's GitHub Actions workflow.

You can view it live here: https://mcckyle.github.io/the-clock/

---

## Contributing

Contributions are welcome! Feel free to fork the repo and submit some pull requests.

---

## License

This project is open source and available under the [**MIT License**](./LICENSE).

---

## Author

Kyle McColgan

[GitHub](https://github.com/mcckyle)
