<template>
  <FormKit :variant="props.variant" :type="myInput">
    <slot name="default" />
  </FormKit>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';

const props = defineProps({
  type: {
    type: String as PropType<'button' | 'submit'>,
    default: 'button'
  },
  variant: {
    type: String as PropType<'primary' | 'secondary' | 'critical'>,
    default: 'primary'
  },
  size: {
    type: String as PropType<'base' | 'large'>,
    default: 'base'
  }
});

const myInput = {
  type: 'input',
  props: ['type', 'variant', 'size'],
  schema: [
    {
      $el: 'div',
      attrs: {
        'data-type': 'button',
        class: '$classes.outer'
      },
      children: [
        {
          $el: 'button',
          attrs: {
            type: 'button',
            class: '$classes.input'
          },
          children: '$slots.default'
        }
      ]
    }
  ]
};
</script>
