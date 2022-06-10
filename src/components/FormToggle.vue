<template>
  <label
    :class="[context.classes[context._value ? 'checked' : 'unchecked'], context.classes.outer]"
  >
    <span :class="[{ 'translate-x-5': context._value }, context.classes.decorator]"> </span>
    <input
      type="checkbox"
      :class="[context.classes.input]"
      :checked="context._value"
      v-bind="context.attrs"
      @input="context.handlers.DOMInput"
    />
  </label>
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
</script>
<style scoped></style>
