<template>
  <FormKit
    type="tel"
    :label="label"
    :placeholder="placeholder"
    validation="isPhoneValid"
    :validation-rules="{ isPhoneValid }"
    :value="modelValue"
    @input="handleInput"
    @validate="handleValidate"
    :validation-visibility="validationVisibility"
  >
  </FormKit>
</template>
<script lang="ts">
export default {
  inheritAttrs: false
};
</script>

<script lang="ts" setup>
import { ref } from 'vue';
const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  validation: {
    type: String,
    default: ''
  },
  validationVisibility: {
    type: String,
    default: 'live'
  },
  validationMessage: {
    type: String,
    default: 'Please enter a valid telephone number'
  }
});

const isValid = ref(false);

function handleInput(value: string) {
  emit('update:modelValue', value);
}

const handleValidate = (event: Event): void => {
  isValid.value = event.valid;
};

const isPhoneValid = (): boolean => {
  return isValid.value;
};
</script>
