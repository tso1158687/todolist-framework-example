<script setup lang="ts">
import { useTodoListStore } from '@/stores/todoList';
import { ref, computed } from 'vue'
import { formateDate } from '../utilities/date';
import { storeToRefs } from 'pinia';
const store = useTodoListStore()
// `name` 和 `doubleCount` 是响应式的 ref
// 同时通过插件添加的属性也会被提取为 ref
// 并且会跳过所有的 action 或非响应式 (不是 ref 或 reactive) 的属性
const { todoList } = storeToRefs(store)
// 作为 action 的 increment 可以直接解构

const {  removeTodo, removeCompletedTodo, toggleCompleteStatus } = useTodoListStore()
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