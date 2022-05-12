<template>
  <FormKit type="group" v-model="data">
    <GlobalButton label="primary" variant="primary" />
    <GlobalButton label="secondary" variant="secondary" />
    <GlobalButton label="critical" variant="critical" />
    <GlobalButton disabled label="large" size="large" />
    <GlobalButton label="submit" type="submit" />

    <InputRange label="Select input" placeholder="Select input" />
    <FormSelect
      label="Select input"
      placeholder="Select input"
      :options="[
        { label: 'France', value: 'fr' },
        { label: 'Germany', value: 'de' },
        { label: 'Spain', value: 'es' },
        { label: 'Italy', value: 'ie' },
        { label: 'Greece', value: 'gr' }
      ]"
      v-model="select"
    />
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
import GlobalButton from './GlobalButton/GlobalButton.vue';
import FormSelect from './FormSelect/FormSelect.vue';
import InputRange from './InputRange/InputRange.vue';

const select = ref(null);
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
