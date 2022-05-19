<template>
  <FormKit type="group" v-model="data">
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
    <GlobalButton variant="primary" type="icon">
      <template #prefix>
        <svg
          data-v-18ab5ca6=""
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          class="h-6 w-6 !fill-current !stroke-current iconify iconify--icon"
          icon="icon:close"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.99985 6.41421L17.7278 19.1421L19.142 17.7279L6.41406 5L4.99985 6.41421Z"
            fill="currentColor"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 17.7266L6.41421 19.1408L19.1421 6.41285L17.7279 4.99864L5 17.7266Z"
            fill="currentColor"
          ></path>
        </svg>
      </template>
    </GlobalButton>
    <GlobalButton label="secondary" variant="secondary" />
    <GlobalButton label="critical" variant="critical" />
    <GlobalButton disabled label="large" size="large" />
    <GlobalButton label="submit" type="submit" />

    <InputRange label="Select input" placeholder="Select input" />

    <GlobalCounter
      v-model="counterValue"
      label="Bedrooms"
      labelDescription="Num of bedrooms"
      hidden-label="Number of bedrooms"
    />
  </FormKit>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import GlobalButton from './GlobalButton/GlobalButton.vue';
import FormSelect from './FormSelect/FormSelect.vue';
import InputRange from './InputRange/InputRange.vue';
import GlobalCounter from './GlobalCounter/GlobalCounter.vue';
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
  'radio',
  'range',
  'select',
  'autocomplete'
]);
const inputOptions = ref({
  checkbox: ['I like Tailwind', 'I also like FormKit', 'I like other things too'],
  radio: ['I like Tailwind', 'I like FormKit', 'I like everything'],
  select: ['I like Tailwind', 'I like FormKit', 'I like everything']
});
const counterValue = ref(0);
</script>
