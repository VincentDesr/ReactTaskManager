import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from '@mui/material'
import { useState } from 'react'

type TaskDialogProps = {
  open: boolean
  onClose: () => void
  onSubmit: (values: { title: string; description: string }) => void
}

function TaskDialog({ open, onClose, onSubmit }: TaskDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      aria-labelledby="task-dialog-title"
    >
      <TaskDialogForm onClose={onClose} onSubmit={onSubmit} />
    </Dialog>
  )
}

type TaskDialogFormProps = Omit<TaskDialogProps, 'open'>

function TaskDialogForm({ onClose, onSubmit }: TaskDialogFormProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [titleError, setTitleError] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) {
      setTitleError(true)
      return
    }
    onSubmit({ title: trimmed, description: description.trim() })
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <DialogTitle id="task-dialog-title">New task</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField
            autoFocus
            required
            label="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
              if (titleError) setTitleError(false)
            }}
            error={titleError}
            helperText={titleError ? 'Title is required' : ' '}
            fullWidth
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
            minRows={3}
            fullWidth
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit" variant="contained">
          Create
        </Button>
      </DialogActions>
    </form>
  )
}

export default TaskDialog
