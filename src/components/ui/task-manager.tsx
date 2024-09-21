'use client'

import { useState } from 'react'
import { PlusIcon, PencilIcon, TrashIcon, CheckIcon, XIcon } from 'lucide-react'

interface Task {
  id: number
  text: string
  completed: boolean
}

export function TaskManagerComponent() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('')
  const [editingTask, setEditingTask] = useState<number | null>(null)
  const [editText, setEditText] = useState('')

  const addTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
      setNewTask('')
    }
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleComplete = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const startEditing = (id: number, text: string) => {
    setEditingTask(id)
    setEditText(text)
  }

  const saveEdit = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, text: editText } : task
    ))
    setEditingTask(null)
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-4 bg-purple-600 text-white">
        <h1 className="text-2xl font-bold font-cal">Task Manager</h1>
      </div>
      <form onSubmit={addTask} className="px-6 py-4 border-b">
        <div className="flex items-center">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-purple-600 text-white rounded-r-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <PlusIcon size={20} />
          </button>
        </div>
      </form>
      <ul className="px-6 py-4">
        {tasks.map(task => (
          <li key={task.id} className="flex items-center justify-between py-2 border-b last:border-b-0">
            {editingTask === task.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-grow px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            ) : (
              <span className={`flex-grow ${task.completed ? 'line-through text-gray-400' : ''}`}>
                {task.text}
              </span>
            )}
            <div className="flex items-center space-x-2">
              {editingTask === task.id ? (
                <>
                  <button onClick={() => saveEdit(task.id)} className="text-green-600 hover:text-green-800">
                    <CheckIcon size={20} />
                  </button>
                  <button onClick={() => setEditingTask(null)} className="text-red-600 hover:text-red-800">
                    <XIcon size={20} />
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => toggleComplete(task.id)} className="text-blue-600 hover:text-blue-800">
                    <CheckIcon size={20} />
                  </button>
                  <button onClick={() => startEditing(task.id, task.text)} className="text-yellow-600 hover:text-yellow-800">
                    <PencilIcon size={20} />
                  </button>
                  <button onClick={() => deleteTask(task.id)} className="text-red-600 hover:text-red-800">
                    <TrashIcon size={20} />
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}