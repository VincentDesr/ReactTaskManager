import { Paper, Stack, Typography } from '@mui/material'
import type { ReactNode } from 'react'

type ColumnProps = {
  title: string
  children?: ReactNode
}

function Column({ title, children }: ColumnProps) {
  return (
    <Paper
      component="section"
      aria-label={title}
      elevation={1}
      sx={{ p: 2, bgcolor: 'grey.100', minHeight: 200 }}
    >
      <Typography variant="h2" sx={{ fontSize: '1.125rem', fontWeight: 500, mb: 2 }}>
        {title}
      </Typography>
      <Stack spacing={1}>{children}</Stack>
    </Paper>
  )
}

export default Column
