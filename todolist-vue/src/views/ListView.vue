<script setup lang="ts">
import { useTodoListStore } from '@/stores/todoList';
import { ref, computed } from 'vue'
import { formateDate } from '../utilities/date';
import { storeToRefs } from 'pinia';
const store = useTodoListStore()
const { todoList } = storeToRefs(store)
const { removeTodo, removeCompletedTodo, toggleCompleteStatus } = useTodoListStore()
const remainingTodo = computed(() => {
    return todoList.value.filter((todo) => !todo.completed).length
})


</script>

<template>
    <ul class="todo-list">
        <li v-for="todo in todoList" :key="todo.id">
            <div class="view">
                <input class="toggle" type="checkbox" @click="toggleCompleteStatus(todo)" />
                <label :class="{ completed: todo.completed }">{{ todo.content }}/{{ formateDate(todo.create) }}</label>
                <button class="destroy" @click="removeTodo(todo)"></button>
            </div>
        </li>
    </ul>
    <footer class="footer">
        <span class="todo-count"><strong>{{ remainingTodo }}</strong> left</span>
        <button class="clear-completed" @click="removeCompletedTodo">
            Clear completed
        </button>
    </footer>
</template>