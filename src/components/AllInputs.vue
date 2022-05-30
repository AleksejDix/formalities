<template>
  <FormKit type="group" v-model="data">
    <FormInputRange label="Range" v-model="range" />
    {{ range }}
    <FormInput
      v-for="type in inputTypes"
      :key="type"
      :label="`This is a ${type} input`"
      :type="type"
      :placeholder="`${type} input placeholder`"
      :disabled="type === 'url' ? true : undefined"
      :validation="type === 'email' ? 'required|email' : 'required'"
    />
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
    <GlobalAutocomplete
      v-model="autocomplete"
      label="Test label"
      placeholder="Test placeholder"
      validation="required"
    />
    <GlobalOptions label="Toggle input" type="toggle" v-model="toggle" />
    <GlobalPill
      label="Pill input"
      :options="[
        { label: 'France', value: 'fr' },
        { label: 'Germany', value: 'de' },
        { label: 'Spain', value: 'es' },
        { label: 'Italy', value: 'ie' }
      ]"
      type="checkbox"
      v-model="pill"
      validation="required"
    />
    <div class="text-offwhite-100">{{ pill }}</div>
    <GlobalPill label="Pill input" type="checkbox" disabled v-model="pill" />
    <GlobalOptions
      label="Radio input"
      type="radio"
      :options="[
        { label: 'France', value: 'fr' },
        { label: 'Germany', value: 'de' },
        { label: 'Spain', value: 'es' },
        { label: 'Italy', value: 'ie' }
      ]"
      validation="required"
      v-model="radio"
      validationVisibility="live"
    />
    <div class="text-offwhite-100">{{ radio }}</div>
    <GlobalOptions
      label="Checkbox input"
      type="checkbox"
      :options="[
        { label: 'France', value: 'fr' },
        { label: 'Germany', value: 'de' },
        { label: 'Spain', value: 'es' },
        { label: 'Italy', value: 'ie' }
      ]"
      validation="required"
      v-model="checkbox"
    />
    <div class="text-offwhite-100">{{ checkbox }}</div>
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
      validation="required|min:1"
      validationVisibility="dirty"
    />
    <FormInputTel label="Phone number" placeholder="Telephone input placeholder" v-model="phone" />
  </FormKit>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import GlobalButton from './GlobalButton/GlobalButton.vue';
import FormSelect from './FormSelect/FormSelect.vue';
import FormInputRange from './FormInputRange/FormInputRange.vue';
import GlobalCounter from './GlobalCounter/GlobalCounter.vue';
import GlobalOptions from './GlobalOptions/GlobalOptions.vue';
import GlobalPill from './GlobalPill/GlobalPill.vue';
import GlobalAutocomplete from './GlobalAutocomplete/GlobalAutocomplete.vue';
import FormInput from './FormInput/FormInput.vue';
import FormInputTel from './FormInputTel/FormInputTel.vue';
const data = ref();
const inputTypes = ref([
  'text',
  'textarea',
  'email',
  'url',
  'password',
  'number',
  'time',
  'hidden'
]);
const select = ref(null);
const counterValue = ref(0);
const radio = ref('');
const checkbox = ref(['fr']);
const toggle = ref(false);
const pill = ref(['fr']);
const autocomplete = ref('');
const phone = ref('');
const range = ref(0);
</script>
