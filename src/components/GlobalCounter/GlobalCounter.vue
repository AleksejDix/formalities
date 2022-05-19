<template>
  <FormKit
    type="counter"
    v-bind="$attrs"
    :validation="validation"
    :disabled="disabled"
    :label="label"
    :labelDescription="labelDescription"
    :hiddenLabel="hiddenLabel"
    :value="value"
    :minValue="minValue"
    :maxValue="maxValue"
    @input="$emit('update', $event.target)"
  >
  </FormKit>
</template>
<script lang="ts">
export default {
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'update'
  }
};
</script>
<script lang="ts" setup>
const props = defineProps({
  value: {
    type: Number,
    default: 0
  },
  label: {
    type: String,
    default: ''
  },
  validation: {
    type: String,
    default: ''
  },
  labelDescription: {
    type: String,
    default: ''
  },
  hiddenLabel: {
    type: String,
    default: ''
  },
  minValue: {
    type: Number,
    default: 0
  },
  maxValue: {
    type: Number,
    default: 100
  },
  disabled: {
    type: Boolean,
    default: false
  }
});
</script>
