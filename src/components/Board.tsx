import { Box, Container, Typography } from '@mui/material'
import Column from './Column'

const COLUMNS = ['To Do', 'In Progress', 'Done'] as const

function Board() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h1" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 500, mb: 3 }}>
        Task Board
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          alignItems: 'start',
        }}
      >
        {COLUMNS.map((title) => (
          <Column key={title} title={title} />
        ))}
      </Box>
    </Container>
  )
}

export default Board
