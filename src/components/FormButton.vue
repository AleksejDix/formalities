<template>
  <button
    v-bind="context.attrs"
    :disabled="(context.disabled as boolean)"
    :data-disabled="(context.disabled as boolean) ? true : undefined"
    :class="
      [
        context.classes.input,
        context.classes[context.attrs.size || 'base'],
        context.classes[context.attrs.variant || 'primary']
      ].join(' ')
    "
  >
    <slot />
  </button>
</template>
<script lang="ts" setup>
import { toRef } from 'vue';
import type { PropType } from 'vue';
import type { FormKitFrameworkContext } from '@formkit/core';

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext>,
    required: true
  }
});
const context = toRef(props, 'context');

context.value.disabled = context.value.disabled === '' || (context.value.disabled as boolean);
</script>
