<script setup>
import { ref } from 'vue';

const asdf = () => alert('asdf');
const text = ref('');
</script>

<template>
  <div class="py-32 bg-denim-900">
    <img alt="Vue logo" src="./assets/logo.png" />
    <FormKit
      type="text"
      label="Text"
      placeholder="Text placeholder"
      validation="required"
      v-model="text"
    />
    {{ text }}
    <FormButton label="Button" type="button" variant="primary" size="base" @click="asdf" />
    <router-view />
  </div>
</template>

<style lang="postcss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
