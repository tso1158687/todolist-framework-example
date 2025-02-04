<script setup lang="ts">
import { useTodoListStore } from '@/stores/todoList';
import { computed, ref, watchEffect } from 'vue'
const { addTodo } = useTodoListStore()

const todoForm = ref({
  title: '',
  content: '',
  dueDate: ''
})

const isTitleValid = ref(false)
const isDuleDateValid = ref(false)
const isFormValid = computed(() => isTitleValid.value && isDuleDateValid.value)

watchEffect(() => {
  isTitleValid.value = todoForm.value.title.trim() !== ''
})

watchEffect(() => {
  isDuleDateValid.value = todoForm.value.dueDate.trim() !== ''
})

const addTodoToList = () => {
  addTodo({
    title: todoForm.value.title,
    content: todoForm.value.content,
    dueDate: new Date(todoForm.value.dueDate)
  }).then(() => {
    clearForm()
  }).catch((error:any) => {
    console.error(error)
  })

}

const clearForm = () => {
  todoForm.value.title = ''
  todoForm.value.content = ''
  todoForm.value.dueDate = ''
}
</script>

<template>
  <header class="header flex flex-direction-column">
    <input class="new-todo" placeholder="Title" autofocus v-model="todoForm.title" />
    <input class="new-todo-content" type="text" placeholder="What needs to be done?" v-model="todoForm.content" />
    <input type="date" v-model="todoForm.dueDate" />
    <button class="classic-button" @click="addTodoToList" :disabled="!isFormValid">
      Add
    </button>
  </header>


</template>