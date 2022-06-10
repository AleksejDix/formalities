<template>
  <h1>Hallo</h1>
  <FormKit @click="asdf" type="button" variant="primary" size="base">My button</FormKit>
</template>

<script setup lang="ts">
function asdf() {
  alert('asdf');
}
</script>
