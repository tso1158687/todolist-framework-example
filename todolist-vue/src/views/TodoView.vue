<script setup lang="ts">
import Counter from '@/components/Counter.vue';
import { useCountStore } from '@/stores/counter.store';
import { useTodoListStore } from '@/stores/todoList';
import { computed, onMounted, ref, watchEffect } from 'vue'
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';
import { useRoute } from 'vue-router';
import { RouterLink, RouterView } from 'vue-router'
const {reset}=useCountStore()


onBeforeRouteUpdate((to, from) => {
  console.log('route update')
  console.log('to:', to)
  console.log('from:', from)
})

onBeforeRouteLeave((to, from) => {
  const answer = window.confirm(
    'Do you really want to leave? you have unsaved changes!'
  )
  // 取消导航并停留在同一页面上
  if (!answer) return false
})

onMounted(() => {
  const route = useRoute()
  console.log('route:', route.query)
  query.value = route.query.v as string
})



const query = ref('')

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
  }).catch((error: any) => {
    console.error(error)
  })

}

const clearForm = () => {
  todoForm.value.title = ''
  todoForm.value.content = ''
  todoForm.value.dueDate = ''
}

function changeValueTo(value: number) {
  reset(value)
}
</script>

<template>
  <h2>counter</h2>
  <div>
    <Counter :init-value="2" @reset="reset" @counterValue="changeValueTo($event)"/>
  </div>
  query: {{ query }}
  <header class="header flex flex-direction-column">
    <input class="new-todo" placeholder="Title" autofocus v-model="todoForm.title" />
    <input class="new-todo-content" type="text" placeholder="What needs to be done?" v-model="todoForm.content" />
    <input type="date" v-model="todoForm.dueDate" />
    <button class="classic-button" @click="addTodoToList" :disabled="!isFormValid">
      Add
    </button>

  </header>

  <h2>link</h2>
  <ul>
    <li>
      <RouterLink to="/todo/a" activeClass="red">Test A</RouterLink>
    </li>
    <li>
      <RouterLink to="/todo/b" activeClass="red">Test B</RouterLink>
    </li>
  </ul>
<Testa></Testa>
  <RouterView />

</template>
<style scoped>
.red {
  color: red;
}
</style>