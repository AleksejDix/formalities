<template>
  <FormKit
    :type="type"
    v-bind="$attrs"
    :label="label"
    :placeholder="placeholder"
    :options="options"
    :validation="validation"
    :disabled="disabled"
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
import { PropType } from 'vue';

interface ISelectOption {
  label: string;
  value: string | number;
}

const props = defineProps({
  type: {
    type: String as PropType<'checkbox' | 'radio'>,
    required: true
  },
  value: {
    type: Object as PropType<ISelectOption>,
    default: null
  },
  options: {
    type: Array as PropType<ISelectOption[]>,
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
