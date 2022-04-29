<template>
  <header>
    <h1>All inputs</h1>
  </header>
  <section>
    <FormKit
      v-for="type in inputTypes"
      :key="type"
      :label="`This is a ${type} input`"
      :type="type"
      :placeholder="`${type} input placeholder`"
      :options="inputOptions[type] ? inputOptions[type] : null"
      :help="`Help text for the ${type} input`"
      :multiple="type === 'file'"
      :disabled="type === 'date' ? true : undefined"
      :validation="type === 'email' ? 'required|email' : 'required'"
      :validation-visibility="type === 'email' ? 'live' : 'blur'"
      :validation-label="type"
    />
    <FormKit type="form">
      <FormKit
        type="otp"
        digits="4"
        label="One-time password"
        name="two_factor_code"
        help="We’ve sent a code to your phone."
        validation="required"
        validation-visibility="live"
      />
    </FormKit>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const inputTypes = ref([
      "button",
      "checkbox",
      "color",
      "date",
      "datetime-local",
      "email",
      "file",
      "month",
      "number",
      "password",
      "radio",
      "range",
      "search",
      "select",
      "submit",
      "tel",
      "text",
      "textarea",
      "time",
      "url",
      "week",
    ]);
    const inputOptions = ref({
      checkbox: [
        "I like Tailwind",
        "I also like FormKit",
        "I like other things too",
      ],
      radio: ["I like Tailwind", "I like FormKit", "I like everything"],
      select: ["I like Tailwind", "I like FormKit", "I like everything"],
    });
    return { inputTypes, inputOptions };
  },
});
</script>
