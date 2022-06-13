<template>
  <div
    class="rounded-lg p-4"
    :class="variantClass"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div class="flex justify-between">
      <div class="flex items-center">
        <div v-if="icon" class="mr-2 h-6 w-6">
          <GlobalIcon class="h-6 w-6" :icon="icon" />
        </div>
        <slot />
      </div>
      <button v-if="close" type="button" @click="$emit('close')">
        <GlobalIcon class="h-6 w-6" icon="mdi:close" />
      </button>
    </div>
    <div v-if="$slots.button" class="mt-3">
      <slot name="button" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import type { PropType } from 'vue';

type variant = 'success' | 'error' | 'info' | 'warning' | 'default';

export default defineComponent({
  emits: ['close'],
  props: {
    text: {
      type: String,
      default: '',
      required: false
    },
    icon: {
      type: String,
      default: '',
      required: false
    },
    close: {
      type: Boolean,
      default: false,
      required: false
    },
    variant: {
      type: String as PropType<variant>,
      default: 'default',
      required: false
    }
  },
  setup(properties) {
    const variantClass = computed((): string => {
      switch (properties.variant) {
        case 'success':
          return 'bg-frog-800';
        case 'error':
          return 'bg-ruby-700';
        case 'info':
          return 'bg-velvet-600';
        case 'warning':
          return 'bg-white border-2 border-sun-800 text-sun-900 flex justify-center';
        default:
          return 'bg-denim-800';
      }
    });
    return { variantClass };
  }
});
</script>
