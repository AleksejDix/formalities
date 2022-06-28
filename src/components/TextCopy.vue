<script lang="ts">
import { defineComponent, computed, h } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  props: {
    variant: {
      type: String as PropType<'body' | 'lead' | 'small'>,
      default: 'body'
    }
  },
  setup(properties, { slots }) {
    const headingClasses = computed(() => ({
      'text-18 md:text-20 lg:text-24 dark:text-denim-400': properties.variant === 'lead',
      'text-denim-700 dark:text-denim-400': properties.variant === 'body',
      'text-14 dark:text-denim-600': properties.variant === 'small'
    }));

    return () =>
      h(
        'p',
        {
          class: [headingClasses.value, 'max-w-[640px]']
        },
        slots.default?.()
      );
  }
});
</script>
