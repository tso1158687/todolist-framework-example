import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { Todo } from '@/types/todo.type'

export const useTodoListStore = defineStore('counter', () => {
  const todoList = ref<Todo[]>([
    {
      content: '吃飯',
      id: 1,
      create: new Date(2021, 8, 1),
      completed: false,
    },
    {
      content: '睡覺',
      id: 2,
      create: new Date(2023, 8, 2),
      completed: false,
    },
  ])

  function getTodoList() {
    return todoList
  }

  function addTodo(newTodo: string): void {
    todoList.value.push({
      content: newTodo,
      id: +new Date(),
      create: new Date(),
      completed: false,
    })
  }

  function toggleCompleteStatus(todo: Todo): void {
    todo.completed = !todo.completed
  }

  function removeTodo(todo: Todo): void {
    todoList.value = todoList.value.filter((t) => t.id !== todo.id)
  }

  function removeCompletedTodo(): void {
    todoList.value = todoList.value.filter((t) => !t.completed)
  }

  return { todoList, getTodoList, addTodo, toggleCompleteStatus, removeTodo, removeCompletedTodo }
})
