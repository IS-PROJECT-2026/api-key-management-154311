# API Key Management Dashboard

A lightweight, single-page administration dashboard for managing API keys, mobile applications, companies, configurations, and deployments. Built with vanilla HTML, CSS, and JavaScript

**Live Site:** [https://is-project-2026.github.io/api-key-management-154311/](https://is-project-2026.github.io/api-key-management-154311/)

## Features

- **Dashboard** — overview with stat cards, a weekly API request chart, and a recent activity feed
- **Mobile Applications** — listing of registered apps with platform, version, and status
- **Companies** — company profiles with industry, headquarters, employee count, and app associations
- **Configurations** — environment variables, feature flags, and settings across all applications
- **Deployments** — deployment tracking across environments
- **API Keys** — full listing of keys with masked values, creation dates, last usage, scopes, and status badges
- **Responsive design** — works on desktop, tablet, and mobile with a collapsible sidebar

## Tech Stack

| Layer   | Technology                              |
| ------- | --------------------------------------- |
| Markup  | HTML5                                   |
| Styling | CSS3 (custom properties, grid, flexbox) |
| Logic   | Vanilla JavaScript (ES6+)               |
| Hosting | GitHub Pages                            |

## Project Structure

```
.
├── index.html          # Single-page application shell
├── css/
│   └── styles.css      # All styling including responsive breakpoints
├── js/
│   └── app.js          # Page routing, table builders, dashboard analytics
└── README.md
```

## Getting Started

No build step is needed. Open `index.html` in a browser

Pages

| Sidebar Item        | Description                                           |
| ------------------- | ----------------------------------------------------- |
| Dashboard           | Stat cards, bar chart, activity feed                  |
| Mobile Applications | App listing with bundle ID, platform, version, status |
| Companies           | Company directory with industry, HQ, employee count   |
| Configurations      | Environment variables, feature flags, and settings    |
| Deployments         | Deployment history placeholder                        |
| API Keys            | Key listing with masked values, scopes, and status    |

## License

This project is for educational purposes as part of the IS Project 2026 github crash course.
