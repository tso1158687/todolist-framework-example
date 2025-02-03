<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <div class="link">
        <RouterLink to="/todo">Add</RouterLink>
        <RouterLink to="/list">List</RouterLink>

      </div>
    </header>
    <div class="main">
      <RouterView />
    </div>
  </section>


</template>
