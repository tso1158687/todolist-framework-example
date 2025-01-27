import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { Todo } from '@/types/todo.type'
import {
  getTodoListDataApi,
  addTodoApi,
  toggleCompleteStatusApi,
  removeTodoApi,
  removeCompletedTodoApi,
} from '@/services/todo.service'

export const useTodoListStore = defineStore('todo', () => {
  const todoList = ref<Todo[]>([])

  function getTodoList() {
    return todoList
  }

  async function getTodoListData() {
    try {
      const data = await getTodoListDataApi()
      todoList.value = data
    } catch (error) {
      console.error('Failed to fetch todos:', error)
      // 這裡可以做一些錯誤處理邏輯
    }
  }

  async function addTodo(newTodo: string): Promise<void> {
    try {
      const todo = await addTodoApi(newTodo)
      todoList.value.push(todo)
    } catch (error) {
      console.error('Failed to add todo:', error)
      // 這裡可以做一些錯誤處理邏輯
    }
  }

  async function toggleCompleteStatus(todo: Todo): Promise<void> {
    try {
      const newTodo = await toggleCompleteStatusApi(todo)
      todoList.value = todoList.value.map((t) => (t.id === newTodo.id ? newTodo : t))
    } catch (error) {
      console.error('Failed to toggle complete status:', error)
      // 這裡可以做一些錯誤處理邏輯
    }
  }

  async function removeTodo(todo: Todo): Promise<void> {
    try {
      const result = await removeTodoApi(todo)
      if (result) {
        todoList.value = todoList.value.filter((t) => t.id !== todo.id)
      }
    } catch (error) {
      console.error('Failed to remove todo:', error)
      // 這裡可以做一些錯誤處理邏輯
    }
  }

  async function removeCompletedTodo(): Promise<void> {
    try {
      const count = await removeCompletedTodoApi()
      todoList.value = todoList.value.filter((t) => !t.completed)
    } catch (error) {
      console.error('Failed to remove completed todos:', error)
      // 這裡可以做一些錯誤處理邏輯
    }
  }

  return {
    todoList,
    getTodoList,
    addTodo,
    toggleCompleteStatus,
    removeTodo,
    removeCompletedTodo,
    getTodoListData,
  }
})
