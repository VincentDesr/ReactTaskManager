import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import Board from './components/Board'

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Board />
    </ThemeProvider>
  )
}

export default App
