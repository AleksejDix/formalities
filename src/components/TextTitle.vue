<script lang="ts">
import { defineComponent, computed, h } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  props: {
    level: {
      type: Number as PropType<1 | 2 | 3 | 4 | 5 | 6>,
      required: true
    },
    variant: {
      type: String as PropType<'poster' | 'title' | 'headline' | 'feature' | 'caption'>,
      required: true
    }
  },
  setup(properties, { slots }) {
    const headingClasses = computed(() => ({
      'text-32 md:text-48 lg:text-60 max-w-[592px] pb-4': properties.variant === 'poster',
      'text-32 md:text-36 lg:text-48 max-w-[592px] pb-4': properties.variant === 'title',
      'text-24 md:text-32 lg:text-36 max-w-[550px] pb-4': properties.variant === 'headline',
      'text-20 md:text-20 lg:text-24 md:max-w-[320px] lg:max-w-[550px] pb-4':
        properties.variant === 'feature',
      'text-16': properties.variant === 'caption'
    }));
    return () =>
      h(
        `h${properties.level}`,
        {
          class: [headingClasses.value]
        },
        slots.default?.()
      );
  }
});
</script>
