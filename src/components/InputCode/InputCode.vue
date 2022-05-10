<template>
  <input
    v-for="index in digits"
    :key="index"
    maxlength="1"
    :class="context.classes.digit"
    :value="tmp[index - 1] || ''"
    @input="handleInput(index - 1, $event)"
    @focus="handleFocus"
  />
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import type { FormKitFrameworkContext } from '@formkit/core';

import { ref } from 'vue';

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & { digicts: number }>,
    required: true
  }
});

const digits = Number(props.context.digits);
const tmp = ref(props.context.value || '');

/**
 * Handle input, advancing or retreating focus.
 */
function handleInput(index: number, e: Event) {
  const prev = tmp.value;

  const targetEl = e.target as HTMLInputElement;

  if (tmp.value.length <= index) {
    // If this is a new digit
    tmp.value = '' + tmp.value + targetEl.value;
  } else {
    // If this digit is in the middle somewhere, cut the string into two
    // pieces at the index, and insert our new digit in.
    tmp.value = '' + tmp.value.substr(0, index) + targetEl.value + tmp.value.substr(index + 1);
  }

  // Get all the digit inputs
  const inputs = e.target.parentElement.querySelectorAll('input');

  if (index < digits - 1 && tmp.value.length >= prev.length) {
    // If this is a new input and not at the end, focus the next input
    inputs.item(index + 1).focus();
  } else if (index > 0 && tmp.value.length < prev.length) {
    // in this case we deleted a value, focus backwards
    inputs.item(index - 1).focus();
  }

  if (tmp.value.length === digits) {
    // If our input is complete, commit the value.
    props.context.node.input(tmp.value);
  } else if (tmp.value.length < digits && props.context.value !== '') {
    // If our input is incomplete, it should have no value.
    props.context.node.input('');
  }
}

/**
 * On focus, select the text in our input.
 */
function handleFocus(event: Event) {
  (event.target as HTMLInputElement).select();
}
</script>
