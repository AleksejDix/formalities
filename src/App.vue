<template>
  <section class="dark:bg-denim-900">
    <header>
      <h1 class="text-3xl font-bold underline"></h1>
    </header>
    <main class="container mx-auto pt-8 max-w-sm">
      <FormInput v-model="input1" type="number" label="Some label" placeholder="Some placeholder" />
      <FormInput
        v-model="input2"
        label="Some label"
        placeholder="Some placeholder"
        validation="required"
      />
      <FormInput
        v-model="input3"
        label="Some label"
        placeholder="Some placeholder"
        :disabled="true"
      />
      <AllInputs />
    </main>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AllInputs from './components/AllInputs.vue';
import FormInput from './components/FormInput/FormInput.vue';

const input1 = ref('');
const input2 = ref('');
const input3 = ref('');
</script>
