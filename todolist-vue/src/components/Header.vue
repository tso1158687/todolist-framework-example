<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue'

onMounted(() => {
    console.log('mounted')
    getPokenmon()
    // tslint:disable-next-line: no-console
    const hahaElement = document.getElementById('haha');
    if (hahaElement) {
        hahaElement.textContent = 'haha';
    }
})

const pokemonList = ref<any[]>([])

const getPokenmon = async () => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon')
    const res2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2')
    console.log(res.data)

    pokemonList.value = res.data.results
    console.log(res2.data)


}
</script>
<template>
    <div class="grid-container">
        <header class="header">Header</header>
        <nav class="nav">Navigation</nav>
        <main class="main">Main Content</main>
        <aside class="sidebar">Sidebar</aside>
        <footer class="footer">Footer</footer>
        <div class="contact">contact</div>
    </div>
    css
    複製程式碼

</template>
<style lang="scss" scoped>
.grid-container {
    display: grid;
    // grid-template-columns: 50px 1fr 1fr;
    gap: 50px 100px;
    background-color: #2196F3;
    padding: 10px;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 50px 50px;
}

.item1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4;
}

.flex-container {
    display: flex;
}

.flex-item {
    display: flex;
}

.grid-container {
    display: grid;
    grid-template-areas:
        'header  header '
        'nav     main'
        'nav     sidebar'
        'nav  footer'
        'contact contact';
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 50px 1fr 1fr 50px 200px;
    gap: 10px;
}

.contact {
    grid-area: contact;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header {
    grid-area: header;
}

.nav {
    grid-area: nav;
    display: flex;
    align-items: center;
}

.main {
    grid-area: main;
}

.sidebar {
    grid-area: sidebar;
}

.footer {
    grid-area: footer;
}
</style>