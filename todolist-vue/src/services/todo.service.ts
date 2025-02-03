import type { newTodo, Todo } from '@/types/todo.type'
import axios from 'axios'
const url = 'http://localhost:3000/todo'
const apiClient = axios.create({
  baseURL: url,
})

export async function getTodoListDataApi(): Promise<Todo[]> {
  const response = await apiClient.get<Todo[]>('')
  return response.data
}

export async function getTodoApi(id: number): Promise<Todo | undefined> {
  const response = await apiClient.get<Todo>(`/${id}`)
  return response.data
}

export async function addTodoApi(todo: newTodo): Promise<Todo> {
  const response = await apiClient.post<Todo>('', todo)
  return response.data
}

export async function toggleCompleteStatusApi(todo: Todo): Promise<Todo> {
  const newTodo = { ...todo, completed: !todo.completed }
  const response = await apiClient.post<Todo>('/update', newTodo)
  return response.data
}

export async function removeTodoApi(todo: Todo): Promise<boolean> {
  const response = await apiClient.post<boolean>('/removeTodo', todo)
  return response.data
}

export async function removeCompletedTodoApi(): Promise<number> {
  const response = await apiClient.post<number>('/removeCompletedTodo')
  return response.data
}
