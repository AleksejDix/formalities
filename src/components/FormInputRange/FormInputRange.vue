<template>
  <FormKit type="range" v-bind="$attrs" @input="handleInput"> </FormKit>
</template>

<script lang="ts" setup>
const emit = defineEmits(['update:modelValue']);

function handleInput(value: number) {
  emit('update:modelValue', value);
}
</script>
