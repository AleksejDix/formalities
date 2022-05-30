<template>
  <FormKit
    :type="type"
    :label="label"
    :options="options"
    :validation="validation"
    :disabled="disabled"
    :wrapper-class="{
      pill: true,
      disabled: disabled
    }"
    input-class="pill"
    :label-class="{
      pill: true,
      disabled: disabled
    }"
    :decorator-class="{
      pill: true,
      disabled: disabled
    }"
    @input="handleInput"
    @node="setNode"
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
import { PropType, nextTick } from 'vue';

interface ISelectOption {
  label: string;
  value: string | number;
}

const props = defineProps({
  type: {
    type: String as PropType<'checkbox' | 'radio'>,
    required: true
  },
  modelValue: {
    type: [String, Number, Boolean],
    required: true
  },
  options: {
    type: Array as PropType<ISelectOption[]>,
    default: () => []
  },
  label: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  validation: {
    type: String,
    default: ''
  },
  validationVisibility: {
    type: String,
    default: 'blur'
  }
});

const emit = defineEmits(['update:modelValue']);

const setNode = (node) => {
  nextTick(() => node.input(props.modelValue));
};

function handleInput(event: Event) {
  emit('update:modelValue', event);
}
</script>
<style>
.global-options-decorator.pill {
  @apply absolute inset-0 cursor-pointer whitespace-nowrap rounded-full bg-offwhite-100 px-4 py-2.5 ring-1 ring-denim-900 transition duration-200 dark:bg-denim-800 dark:text-offwhite-100 dark:ring-white;
}
.global-options-wrapper.pill {
  @apply relative inline-flex h-12 cursor-pointer items-center justify-center transition duration-200 active:scale-90 active:ease-out;
}
input:checked ~ .global-options-decorator.pill {
  @apply border-offwhite-100 bg-velvet-600 text-offwhite-100 ring-velvet-600;
}

input:disabled ~ .global-options-decorator.pill {
  @apply pointer-events-none bg-denim-400  ring-denim-400;
}

input:active ~ .global-options-decorator.pill {
  @apply scale-90 transition duration-200 ease-out;
}

input:focus-visible ~ .global-options-decorator.pill {
  @apply outline outline-2 outline-offset-4 outline-velvet-600 ring-white;
}

.global-options-wrapper.pill.disabled {
  @apply pointer-events-none;
}
.global-options-label.pill {
  @apply z-10 dark:text-offwhite-100 px-6;
}
.global-options-label.pill.checked {
  @apply text-offwhite-100;
}
.global-options-label.pill.disabled {
  @apply text-denim-700;
}
.global-options-input.pill {
  @apply z-30 sr-only;
}
</style>
