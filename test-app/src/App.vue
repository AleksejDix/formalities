<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
function asdf() {
  alert('asdf');
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <FormKit @click="asdf" type="button" variant="primary" size="base">Primary Button</FormKit>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
