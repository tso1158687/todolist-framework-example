<script setup lang="ts">
import { ref } from 'vue'

const newTodo = ref('')
const addTodo = () => {
    if (newTodo.value.trim() === '') {
        return
    }
   console.log(newTodo.value)
    newTodo.value = ''
}
</script>

<template>
    <header class="header">

        <input class="new-todo" placeholder="What needs to be done?" autofocus @keyup.enter="addTodo"
            :model="newTodo" />
    </header>


</template>