<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const todoId = route.params.id;
onMounted(() => {
    console.log('todo detail init')
    // get router params
    console.log(route.params)
})


</script>

<template>
<h1>todo detail</h1>
{{ todoId }}
</template>