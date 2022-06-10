<template>
  <button
    v-bind="$attrs"
    :class="
      [
        context.classes.input,
        context.classes[context.attrs.size],
        context.classes[context.attrs.variant]
      ].join(' ')
    "
  >
    {{ context.slots.default()[0].children }}
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
const node = context.value.node;
</script>
