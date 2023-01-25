<script setup lang="ts">
import Test from './components/Examples.vue';
</script>

<template>
  <div class="app">
    <div class="container">
      <Test></Test>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sofia+Sans&display=swap');

.app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Sofia Sans', sans-serif;
}

html {
  font-size: 16px;
}

h1 {
  font-size: 3em;
}
</style>
