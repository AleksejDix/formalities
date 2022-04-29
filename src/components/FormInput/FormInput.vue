<template>
  <FormKit
    :label="label"
    :type="type"
    :placeholder="placeholder"
    :validation="validation"
    :disabled="disabled"
    @input="handleUpdate"
  >
    <template #prefix v-if="$slots.prefix">
      <slot name="prefix"></slot>
    </template>
    <template #suffix v-if="$slots.suffix">
      <slot name="suffix"></slot>
    </template>
  </FormKit>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  model: {
    prop: "value",
    event: "update",
  },
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    validation: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const handleUpdate = (value: string): void => {
      let response: string | number = value;
      if (props.type === "number") {
        response =
          value === null || value === "" ? null : (Number(value) as number);
      }
      emit("update", response);
    };
    return { handleUpdate };
  },
});
</script>
