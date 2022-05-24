<template>
  <FormKit
    type="autocomplete"
    v-bind="$attrs"
    :label="label"
    :placeholder="placeholder"
    :options="options"
    :validation="validation"
    :value="value"
    @input="$emit('update', $event.target)"
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
  value: {
    type: String,
    default: ''
  },
  options: {
    type: [Function, Array],
    required: true
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
  }
});
</script>
