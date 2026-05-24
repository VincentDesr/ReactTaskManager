import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from '@mui/material'
import { useEffect, useState } from 'react'

type TaskDialogProps = {
  open: boolean
  onClose: () => void
  onSubmit: (values: { title: string; description: string }) => void
}

function TaskDialog({ open, onClose, onSubmit }: TaskDialogProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [titleError, setTitleError] = useState(false)

  useEffect(() => {
    if (open) {
      setTitle('')
      setDescription('')
      setTitleError(false)
    }
  }, [open])

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
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      aria-labelledby="task-dialog-title"
    >
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
    </Dialog>
  )
}

export default TaskDialog
