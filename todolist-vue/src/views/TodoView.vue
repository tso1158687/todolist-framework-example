<script setup lang="ts">
import { useTodoListStore } from '@/stores/todoList';
import { ref } from 'vue'
const { addTodo } = useTodoListStore()
const newTodo = ref('')
const addTodoToList = () => {
    console.log(newTodo.value)
    if (newTodo.value.trim() === '') {
        return
    }
    // addTodo(newTodo.value)
    newTodo.value = ''
}
</script>

<template>
    <header class="header flex flex-direction-column">
    <input
      class="new-todo"
      placeholder="Title"
      autofocus

    />
    <input
      class="new-todo-content"
      type="text"
      placeholder="What needs to be done?"
    />
    <input type="date"  />
    <button
      class="classic-button"
      @click="addTodoToList"
    >
      Add
    </button>
  </header>


</template>