<template>
  <label :class="context.classes.wrapper">
    <input
      type="checkbox"
      :class="[context.classes.input]"
      :disabled="(context.disabled as boolean)"
      :data-disabled="(context.disabled as boolean) ? true : undefined"
      :value="context._value"
      v-bind="context.attrs"
      @change="handleChange"
    />
    <span :class="context.classes.decorator"> </span>
    <div :class="context.classes.label">{{ context.label }}</div>
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
const node = context.value.node;
context.value.disabled = context.value.disabled === '' || (context.value.disabled as boolean);
function handleChange(event: Event) {
  const value = (event.target as HTMLInputElement).checked;
  node.input(value);
}
</script>
