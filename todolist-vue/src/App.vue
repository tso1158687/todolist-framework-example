<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/todo">About</router-link>
  </div>
  <router-view />
</template>

<style>
/* You can add global styles to this file, and also import other style files */
@import url("https://fonts.googleapis.com/css2?family=Anek+Malayalam&family=Noto+Sans+TC&display=swap");

* {
  font-family: "Anek Malayalam", "Noto Sans TC", sans-serif;
}

html,
body {
  margin: 0;
  padding: 0;
}
</style>
