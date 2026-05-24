# ReactTaskManager

A Kanban-style task management board built with React, TypeScript, and Material UI.

## Overview

A drag-and-drop task board with three columns: To Do, In Progress, and Done. Users can create, edit, delete, and move tasks between columns. The app follows Material Design conventions and meets WCAG 2.1 AA accessibility standards.

## Tech Stack

- **React 18** with TypeScript
- **Vite** — build tooling and dev server
- **Material UI (MUI)** — component library
- **Zustand** — state management
- **ESLint** with `eslint-plugin-jsx-a11y` — code quality and accessibility linting
- **Prettier** — code formatting

## Design Constraints

- All UI built with MUI components — no raw HTML elements for interactive or semantic content
- WCAG 2.1 AA compliance: keyboard navigation, ARIA labels on icon-only buttons, proper heading hierarchy via `Typography`, visible focus indicators, sufficient contrast ratios
- Roboto font via Google Fonts

## Project Structure

```
src/
├── components/
│   ├── Board.tsx        # Main board layout, holds column state
│   ├── Column.tsx       # Single column (To Do | In Progress | Done)
│   └── Card.tsx         # Individual task card
├── App.tsx              # ThemeProvider, CssBaseline, app shell
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## Getting Started

```bash
npm install
npm run dev
```

Dev server runs at [http://localhost:5173](http://localhost:5173).

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — run ESLint

## License

MIT
