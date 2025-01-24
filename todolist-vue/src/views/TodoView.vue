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
    addTodo(newTodo.value)
    newTodo.value = ''
}
</script>

<template>
    <header class="header">
        <input class="new-todo" placeholder="What needs to be done?" autofocus @keyup.enter="addTodoToList"
            v-model="newTodo" />
    </header>


</template>