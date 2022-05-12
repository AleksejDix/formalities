<template>
  <FormKit
    v-bind="$attrs"
    :label="label"
    :type="type"
    :placeholder="placeholder"
    :validation="validation"
    :disabled="disabled"
    @input="handleUpdate"
  >
    <!-- TODO: extend styles for prefix/suffix -->
    <template #prefix v-if="$slots.prefix">
      <slot name="prefix"></slot>
    </template>
    <template #suffix v-if="$slots.suffix">
      <slot name="suffix"></slot>
    </template>
  </FormKit>
</template>

<script lang="ts">
export default {
  inheritAttrs: false
};
</script>
<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    default: 'text',
    validator(value: string) {
      const isValid = includes(TYPES)(value);
      if (!isValid) {
        console.warn(`allowed types are ${TYPES}`);
      }
      return isValid;
    }
  },
  value: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  validation: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(['update']);

const handleUpdate = (value: string): void => {
  let response: string | number = value;
  if (props.type === 'number') {
    response = value === null || value === '' ? null : (Number(value) as number);
  }
  emit('update', response);
};
</script>

<script lang="ts">
const TYPES = [
  'text',
  'email',
  'url',
  'password',
  'number',
  'date',
  'datetime-local',
  'month',
  'search',
  'tel',
  'time',
  'week',
  'hidden'
];
const includes =
  (types: Array<string>) =>
  (type: string): boolean =>
    types.includes(type);
</script>
