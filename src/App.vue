<template>
  <header>
    <div class="wrapper">nothing here</div>
    <HalloLib> world </HalloLib>

    <FormKit type="group" v-model="formData">
      <FormKit
        name="hello_world"
        label="Hello World"
        placeholder="Enter something here..."
        validation="required"
        validation-behavior="live"
        help="Read the docs for more info on using FormKit"
      />
      <FormKit
        name="opinion"
        label="Opinion"
        help="How excited are you about FormKit?"
        type="radio"
        value="A lot"
        :options="['A little', 'A lot']"
      />
      <div class="side-by-side">
        <FormKit
          name="recommendation"
          label="Recommendation"
          v-model="recommendation"
          help="How likely are you to recommend FormKit to a friend?"
          type="range"
          min="0"
          max="10"
        />
        <pre class="range-output">{{ recommendation }} </pre>
      </div>
    </FormKit>
  </header>

  <main></main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HalloLib from "./components/HalloLib.vue";

const recommendation = ref("10");
const formData = ref({});
</script>
