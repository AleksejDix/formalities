<template>
  <FormKit type="group" v-model="data">
    <FormKit
      v-for="type in inputTypes"
      :key="type"
      :label="`This is a ${type} input`"
      :type="type"
      :placeholder="`${type} input placeholder`"
      :options="inputOptions[type] ? inputOptions[type] : null"
      :digits="type === 'code' ? '4' : undefined"
      :multiple="type === 'file'"
      :disabled="type === 'date' ? true : undefined"
      :validation="type === 'email' ? 'required|email' : 'required'"
      :validation-visibility="type === 'email' ? 'live' : 'blur'"
      :validation-label="type"
    />

    <pre>{{ data }}</pre>
  </FormKit>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const data = ref();
const inputTypes = ref([
  'text',
  'textarea',
  'email',
  'url',
  'password',
  'number',
  'date',
  'datetime-local',
  'month',
  'search',
  'tel',
  'time',
  'week',
  'hidden',
  'button',
  'checkbox',
  'color',
  'file',
  'radio',
  'range',
  'select',
  'submit',
  'passwordToggle',
  'code',
  'counter'
]);
const inputOptions = ref({
  checkbox: ['I like Tailwind', 'I also like FormKit', 'I like other things too'],
  radio: ['I like Tailwind', 'I like FormKit', 'I like everything'],
  select: ['I like Tailwind', 'I like FormKit', 'I like everything']
});
</script>
