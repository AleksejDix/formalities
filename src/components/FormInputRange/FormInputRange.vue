<template>
  <FormKit
    type="range"
    :label="label"
    :min="min"
    :max="max"
    :help="help"
    :value="modelValue"
    :validation="validation"
    @input="handleInput"
  >
  </FormKit>
</template>

<script lang="ts" setup>
const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  },
  label: {
    type: String,
    default: ''
  },
  help: {
    type: String,
    default: ''
  },
  interval: {
    type: Number,
    default: 5
  },
  min: {
    type: Number,
    default: undefined
  },
  max: {
    type: Number,
    default: undefined
  },
  validation: {
    type: String,
    default: ''
  }
});

function handleInput(value: number) {
  emit('update:modelValue', value);
}
</script>
