<template>
  <FormKit
    type="range"
    :validation="validation"
    :label="label"
    :help="help"
    :min="min"
    :max="max"
    :interval="interval"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target)"
    v-bind="$attrs"
  >
  </FormKit>
</template>

<script lang="ts" setup>
defineProps({
  modelValue: {
    type: [Number, Array]
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
    default: 1
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    required: true
  },
  validation: {
    type: String,
    default: ''
  }
});
</script>
