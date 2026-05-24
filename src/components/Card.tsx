import { Paper, Typography } from '@mui/material'
import type { Task } from '../store/tasks'

type CardProps = {
  task: Task
}

function Card({ task }: CardProps) {
  return (
    <Paper
      component="article"
      elevation={2}
      sx={{ p: 1.5, bgcolor: 'background.paper' }}
      aria-label={task.title}
    >
      <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
        {task.title}
      </Typography>
      {task.description && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, whiteSpace: 'pre-wrap' }}>
          {task.description}
        </Typography>
      )}
    </Paper>
  )
}

export default Card
