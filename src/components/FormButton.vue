<template>
  <FormKit
    type="button"
    :input-class="[type, variant, size].join(' ')"
    :disabled="disabled"
    @on="$attrs"
  >
    <slot v-if="$slots.prefix" name="prefix"></slot>
    <span v-if="label">
      {{ label }}
    </span>
  </FormKit>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';

const props = defineProps({
  type: {
    type: String as PropType<'button' | 'submit' | 'icon'>,
    default: 'button'
  },
  variant: {
    type: String as PropType<'primary' | 'secondary' | 'critical'>,
    default: 'primary'
  },
  size: {
    type: String as PropType<'base' | 'large'>,
    default: 'base'
  },
  label: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
});
</script>
<style>
.global-button.primary {
  @apply border-velvet-600 bg-velvet-600 text-offwhite-100 outline-velvet-600;
}

.global-button.primary:hover {
  @apply border-velvet-800 bg-velvet-800;
}

.global-button.primary:focus {
  @apply bg-velvet-800;
}

.global-button.secondary {
  @apply border-denim-900 bg-offwhite-100 text-denim-900 outline-velvet-900 dark:border-offwhite-100  dark:bg-denim-800 dark:text-offwhite-100;
}

.global-button.secondary:hover {
  @apply border-velvet-800 bg-velvet-800 text-offwhite-100 dark:text-velvet-600 dark:hover:text-offwhite-100;
}

.global-button.secondary:focus {
  @apply focus:bg-velvet-800 focus:text-offwhite-100;
}

.global-button.critical {
  @apply border-ruby-700 bg-ruby-700 text-offwhite-100 outline-ruby-900;
}

.global-button.critical:hover {
  @apply border-ruby-900 bg-ruby-900;
}

.global-button.critical:focus {
  @apply focus:bg-ruby-900;
}

.global-button.base {
  @apply py-3 px-6 text-16;
}

.global-button.large {
  @apply py-3 px-6 text-20;
}

.global-button.icon {
  @apply px-3;
}
</style>
