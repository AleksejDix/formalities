<template>
  <FormKit
    :label="label"
    type="text"
    :placeholder="placeholder"
    :validation="validation"
    validation-label="Input"
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
  },
  setup() {},
});
</script>
