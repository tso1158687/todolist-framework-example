
import axios from 'axios'
import { Todo } from '../type/todo.type'
const url = 'http://localhost:3000/todo'
const apiClient = axios.create({
  baseURL: url,
})

export async function getTodoListDataApi(): Promise<Todo[]> {
  const response = await apiClient.get<Todo[]>('')
  return response.data
}

export async function addTodoApi(content: string): Promise<Todo> {
  const response = await apiClient.post<Todo>('', { content })
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
