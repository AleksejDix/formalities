<template>
  <section class="dark:bg-denim-900">
    <header>
      <h1 class="text-3xl font-bold underline"></h1>
    </header>
    <main class="container mx-auto pt-8 max-w-sm">
      <GlobalButton label="primary" variant="primary" />
      <GlobalButton label="secondary" variant="secondary" />
      <GlobalButton label="critical" variant="critical" />
      <GlobalButton disabled label="large" size="large" />
      <GlobalButton label="submit" type="submit" />
      <AllInputs />
    </main>
  </section>
</template>

<script setup lang="ts">
import AllInputs from './components/AllInputs.vue';
import GlobalButton from './components/GlobalButton/GlobalButton.vue';
</script>
