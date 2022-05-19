<template>
  <FormKit
    v-bind="$attrs"
    :type="formkitType"
    :label="label"
    :options="options"
    :validation="validation"
    :disabled="disabled"
    :value="value"
    :input-class="type"
    :inner-class="{
      toggle: type === 'toggle',
      checked: isChecked,
      unchecked: !isChecked
    }"
    :decorator-class="
      (type,
      {
        'translate-x-5': isChecked,
        toggle: type === 'toggle'
      })
    "
    @input="handleInput"
  >
  </FormKit>
</template>
<script lang="ts">
export default {
  inheritAttrs: false
};
</script>

<script lang="ts" setup>
import { PropType, computed, ref } from 'vue';

interface ISelectOption {
  label: string;
  value: string | number;
}

const props = defineProps({
  type: {
    type: String as PropType<'checkbox' | 'radio' | 'toggle'>,
    required: true
  },
  value: {
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

const formkitType = computed((): string => (props.type === 'toggle' ? 'checkbox' : props.type));

const emit = defineEmits(['update']);
const isChecked = ref(false);

function handleInput(event: Event) {
  isChecked.value = event;
  emit('update', event);
}
</script>
<style>
.global-options-input.checkbox {
  @apply form-checkbox rounded cursor-pointer h-6 w-6
  dark:bg-denim-800 bg-offwhite-100 border dark:border-offwhite-100 border-denim-900
  focus:ring-offset-2 focus:ring-offset-offwhite-100 focus:dark:ring-offset-denim-900
  focus:bg-offwhite-100 focus:dark:border-offwhite-100 focus:dark:bg-denim-800
  focus:ring-velvet-800 focus:dark:ring-velvet-800 checked:dark:bg-velvet-600 checked:bg-velvet-600
  checked:dark:border-offwhite-100 checked:border-velvet-800 checked:focus:bg-velvet-600
  checked:focus:border-offwhite-100 checked:hover:dark:border-offwhite-100 checked:hover:bg-velvet-600
  checked:hover:border-velvet-800 checked:focus:dark:bg-velvet-600
  dark:formkit-invalid:border-ruby-700 dark:formkit-invalid:ring-ruby-700 formkit-invalid:ring-ruby-700
  formkit-invalid:border-ruby-700;
}
.global-options-input.radio {
  @apply form-radio rounded-full cursor-pointer h-6 w-6 dark:bg-denim-800 bg-offwhite-100 border
  dark:border-offwhite-100 border-denim-900 focus:ring-offset-2 focus:ring-offset-offwhite-100
  focus:dark:ring-offset-denim-900 focus:bg-offwhite-100 focus:dark:border-offwhite-100
  focus:dark:bg-denim-800 focus:ring-velvet-800 focus:dark:ring-velvet-800 checked:dark:bg-velvet-600
  checked:bg-velvet-600 checked:dark:border-velvet-600 checked:border-velvet-600
  checked:focus:bg-velvet-600 checked:focus:border-velvet-600 checked:hover:dark:border-offwhite-100
  checked:hover:bg-velvet-600 checked:hover:border-velvet-600
  checked:focus:dark:bg-velvet-600 dark:formkit-invalid:border-ruby-700 dark:formkit-invalid:ring-ruby-700 
  formkit-invalid:ring-ruby-700 formkit-invalid:border-ruby-700;
}
.global-options-input.toggle {
  @apply sr-only;
}
.global-options-inner.toggle {
  @apply flex h-6 w-11 p-0.5 cursor-pointer items-center rounded-full py-1 duration-300 ease-in-out;
}
.global-options-inner.toggle.checked {
  @apply bg-velvet-600;
}
.global-options-inner.toggle.unchecked {
  @apply bg-denim-400;
}
.global-options-decorator.toggle {
  @apply cursor-pointer h-5 w-5 shadow transform rounded-full bg-offwhite-100 duration-300 ease-in-out;
}
</style>
