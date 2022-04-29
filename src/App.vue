<template>
  <section class="bg-denim-900">
    <header>
      <h1 class="text-3xl font-bold underline"></h1>
    </header>
    <main class="container mx-auto pt-8 bg-denim-900">
      <TextInput
        label="Some label"
        placeholder="Some placeholder"
        validation="required"
        prefix="asfd"
        suffix="asfd"
      />
      <AllInputs />
    </main>
  </section>
</template>

<script setup lang="ts">
import AllInputs from "./components/AllInputs.vue";
import TextInput from "./components/TextInput/TextInput.vue";
</script>
