<template>
  <FormKit
    type="range"
    min="20"
    max="100"
    step="10"
    value="30"
    v-bind="$attrs"
    :label="label"
    :placeholder="placeholder"
    :validation="validation"
    :disabled="disabled"
  >
  </FormKit>
</template>
<script lang="ts">
export default {
  inheritAttrs: false
};
</script>

<script lang="ts" setup>
import { PropType } from 'vue';
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
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
