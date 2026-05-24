# ReactTaskManager

## Tech Stack

- React 18 + TypeScript
- Vite
- Material UI (MUI)
- Zustand for state management
- ESLint with eslint-plugin-jsx-a11y
- Prettier for formatting

## Design Constraints

- All UI built with MUI components — no raw HTML for interactive or semantic content
- WCAG 2.1 AA: keyboard navigation, ARIA labels on icon-only buttons, heading hierarchy via Typography, visible focus indicators, sufficient contrast
- Roboto font via Google Fonts

## Workflow

- User stories and tasks are tracked as GitHub Issues (use `gh issue list` and `gh issue view`)
- Labels: `user-story` for stories, `task` for implementation tasks
- One branch per user story: `feature/us{n}-short-name`

## Project Structure

- Components live in `src/components/`
- Zustand store in `src/store/`
- App shell in `src/App.tsx` wraps everything in ThemeProvider + CssBaseline
