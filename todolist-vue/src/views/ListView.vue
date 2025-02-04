<script setup lang="ts">
import { useTodoListStore } from '@/stores/todoList';
import { computed, onMounted } from 'vue'
import { formateDate } from '../utilities/date';
import { storeToRefs } from 'pinia';
import { useRouter } from "vue-router";

const store = useTodoListStore()
const { todoList } = storeToRefs(store)
const { removeTodo, removeCompletedTodo, toggleCompleteStatus, getTodoListData } = useTodoListStore()
const remainingTodo = computed(() => {
    return todoList.value.filter((todo) => !todo.completed).length
})

const router = useRouter()

onMounted(() => {
    console.log('init')
    getTodoListData().then(() => {
        console.log('init success')
    })
})

function navigateToDetail(id: number): void {
    router.push({ name: 'todo-detail', params: { id } })
}
</script>

<template>
    <ul class="todo-list">
        <li v-for="todo in todoList" :key="todo.id">
            <div class="view">
                <input class="toggle" type="checkbox" @click="toggleCompleteStatus(todo)" />
                <label :class="{ completed: todo.completed }" @click="navigateToDetail(todo.id)">{{ todo.content }}/{{
                    formateDate(todo.dueDate) }}</label>
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