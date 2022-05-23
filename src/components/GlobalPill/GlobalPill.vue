<template>
  <FormKit
    :type="type"
    :label="label"
    :options="options"
    :validation="validation"
    :disabled="disabled"
    wrapper-class="pill"
    input-class="pill"
    :label-class="{
      pill: true,
      checked: modelValue
    }"
    :decorator-class="{
      pill: true,
      checked: modelValue
    }"
    @input="handleInput"
    @node="setNode"
  >
  </FormKit>
</template>
<script lang="ts">
export default {
  inheritAttrs: false
};
</script>

<script lang="ts" setup>
import { PropType, ref, nextTick } from 'vue';

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
    type: Object as PropType<ISelectOption>,
    default: null
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
  }
});

const emit = defineEmits(['update:modelValue']);
const isChecked = ref(false);

const setNode = (node) => {
  nextTick(() => node.input(props.modelValue));
};

function handleInput(event: Event) {
  isChecked.value = event;
  emit('update:modelValue', event);
}
</script>
<style>
.global-options-decorator.pill {
  @apply absolute inset-0 cursor-pointer whitespace-nowrap rounded-full bg-offwhite-100 px-4 py-2.5 ring-1 ring-denim-900 transition duration-200 dark:bg-denim-800 dark:text-offwhite-100 dark:ring-white;
}
.global-options-decorator.pill.checked {
  @apply bg-velvet-600 ring-velvet-600;
}
.global-options-wrapper.pill {
  @apply relative flex h-12 cursor-pointer items-center justify-center transition duration-200 active:scale-90 active:ease-out;
}
.global-options-label.pill {
  @apply z-10 dark:text-offwhite-100;
}
.global-options-label.pill.checked {
  @apply text-offwhite-100;
}
.global-options-input.pill {
  @apply z-30 sr-only;
}
</style>
