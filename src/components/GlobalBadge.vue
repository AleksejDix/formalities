<template>
  <div class="Chip" :class="variant">
    <span v-if="$slots.left">
      <slot name="left"></slot>
    </span>
    <span>
      <slot></slot>
    </span>
    <span v-if="$slots.right">
      <slot name="right"></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  props: {
    variant: {
      type: String as PropType<'normal' | 'gradient'>,
      default: 'normal'
    }
  }
});
</script>

<style lang="postcss">
.Chip {
  @apply inline-flex flex-row items-center space-x-1 rounded-2xl px-2.5 py-1 text-14 font-normal text-offwhite-100;
}

.Chip.normal {
  @apply bg-denim-800;
}

.Chip.gradient {
  @apply bg-gradient-to-r from-badge-start via-badge-fill to-badge-end;
}
</style>
