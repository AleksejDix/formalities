<template>
  <FormKit
    type="range"
    v-bind="$attrs"
    :validation="validation"
    :disabled="disabled"
    :label="label"
    :help="help"
    :min="min"
    :max="max"
    :interval="interval"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target)"
  >
  </FormKit>
</template>
<script lang="ts">
export default {
  inheritAttrs: false
};
</script>
<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: [Number, Array],
    required: null
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
    default: 100
  },
  disabled: {
    type: Boolean,
    default: false
  },
  validation: {
    type: String,
    default: ''
  }
});
</script>
