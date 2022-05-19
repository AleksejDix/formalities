<template>
  <input
    :type="node.props.inputType"
    @input="context.handlers.DOMInput"
    @blur="handleBlur"
    :value="context._value"
    :id="context.id"
    :name="node.name"
    :class="context.classes.input"
    :disabled="(context.disabled as boolean)"
    v-bind="context.attrs"
  />
  <button type="button" @click="toggleType" :class="context.classes.button">
    {{ node.props.icon }}
  </button>
</template>

<script lang="ts" setup>
import { PropType, toRef } from 'vue';
import type { FormKitFrameworkContext } from '@formkit/core';

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext>,
    required: true
  }
});

const context = toRef(props, 'context');
const node = context.value.node;

node.props.inputType = 'password';
node.props.icon = 'view';

const handleBlur = () => {
  context.value.handlers.blur();
};

const toggleType = () => {
  if (node.props.inputType == 'password') {
    node.props.inputType = 'text';
    node.props.icon = 'hide';
  } else {
    node.props.inputType = 'password';
    node.props.icon = 'view';
  }
};
</script>
