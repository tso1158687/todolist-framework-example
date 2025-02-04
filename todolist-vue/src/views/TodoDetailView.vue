<script setup lang="ts">
import { useTodoListStore } from '@/stores/todoList';
import { formateDate } from '@/utilities/date';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const store = useTodoListStore()
const { todo } = storeToRefs(store)
const { getTodoData } = useTodoListStore()

const todoId = route.params.id;

onMounted(() => {
    getTodoData(Number(todoId))
})


</script>

<template>
<div class="todo-list">
  <div class="view2">
    <div class="detail-title">{{ todo?.title }}</div>
    <div class="detail-content">{{ todo?.content }}</div>
    <div class="detail-date">
      {{ formateDate(todo?.dueDate)  }}
    </div>
  </div>
</div>
</template>