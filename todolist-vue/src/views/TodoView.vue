<script setup lang="ts">
import { useTodoListStore } from '@/stores/todoList';
import { ref, watch, watchEffect, type Ref } from 'vue'
const { addTodo } = useTodoListStore()

const todoForm = ref({
  title: '',
  content: '',
  dueDate: ''
})

const count1= ref(0)
const count2= ref(0)

const isFormValid = ref(false)

watch(todoForm.value, (newVal) => {
  console.log(newVal.title)
  // isFormValid.value = newVal.title.trim() !== '' && newVal.content.trim() !== ''
})

watchEffect(() => console.log('effect',count1.value))

watch(count1,(oldValue, newValue) => {
  console.log('watch')
  console.log(oldValue, newValue)
})

watchEffect(() => {
  console.log('??')
  console.log(todoForm.value)
})

function add(origin:number) {
  count2.value++

}


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
  <button @click="add(count1)">count1</button>
  <button @click="add(count2)">count2</button>
{{ count1 }}/ {{ count2 }}
  {{ todoForm }}
  <header class="header flex flex-direction-column">
    <input class="new-todo" placeholder="Title" autofocus v-model="todoForm.title" />
    <input class="new-todo-content" type="text" placeholder="What needs to be done?" v-model="todoForm.content" />
    <input type="date" v-model="todoForm.dueDate" />
    <button class="classic-button" @click="addTodoToList"
    :disabled="true">
      Add
    </button>
  </header>


</template>