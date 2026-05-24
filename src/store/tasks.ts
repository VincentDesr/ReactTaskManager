import { create } from 'zustand'

export type TaskStatus = 'todo' | 'in-progress' | 'done'

export type Task = {
  id: string
  title: string
  description: string
  status: TaskStatus
}

type TaskStore = {
  tasks: Task[]
  addTask: (input: { title: string; description: string; status?: TaskStatus }) => void
  updateTask: (id: string, updates: Partial<Pick<Task, 'title' | 'description'>>) => void
  deleteTask: (id: string) => void
  moveTask: (id: string, status: TaskStatus) => void
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: ({ title, description, status = 'todo' }) =>
    set((state) => ({
      tasks: [...state.tasks, { id: crypto.randomUUID(), title, description, status }],
    })),
  updateTask: (id, updates) =>
    set((state) => ({
      tasks: state.tasks.map((t) => (t.id === id ? { ...t, ...updates } : t)),
    })),
  deleteTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) })),
  moveTask: (id, status) =>
    set((state) => ({
      tasks: state.tasks.map((t) => (t.id === id ? { ...t, status } : t)),
    })),
}))
