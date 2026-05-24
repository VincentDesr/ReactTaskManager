import AddIcon from '@mui/icons-material/Add'
import { Button, Paper, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { useTaskStore, type TaskStatus } from '../store/tasks'
import Card from './Card'
import TaskDialog from './TaskDialog'

type ColumnProps = {
  title: string
  status: TaskStatus
}

function Column({ title, status }: ColumnProps) {
  const tasks = useTaskStore((s) => s.tasks).filter((t) => t.status === status)
  const addTask = useTaskStore((s) => s.addTask)
  const [dialogOpen, setDialogOpen] = useState(false)

  const canAdd = status === 'todo'

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
      <Stack spacing={1}>
        {tasks.map((task) => (
          <Card key={task.id} task={task} />
        ))}
      </Stack>
      {canAdd && (
        <>
          <Button
            startIcon={<AddIcon />}
            onClick={() => setDialogOpen(true)}
            aria-label="Add task"
            sx={{ mt: tasks.length ? 2 : 0 }}
            fullWidth
          >
            Add task
          </Button>
          <TaskDialog
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
            onSubmit={(values) => addTask({ ...values, status })}
          />
        </>
      )}
    </Paper>
  )
}

export default Column
