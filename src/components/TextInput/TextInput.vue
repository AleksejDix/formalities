<template>
  <FormKit
    :label="label"
    type="text"
    :placeholder="placeholder"
    :validation="validation"
    :diabled="disabled"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
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
  setup() {},
});
</script>
