<template>
  <section class="inline-flex items-center">
    <label :class="context.classes.customLabel">
      <div>{{ context.label }}</div>
      <div :class="context.classes.customHelp" v-if="context.attrs.labelDescription">
        {{ context.attrs.labelDescription }}
      </div>
    </label>
    <div class="flex items-center justify-between">
      <FormKit
        type="customButton"
        buttonType="icon"
        variant="secondary"
        aria-label="decrease value"
        :aria-labelledby="`title-label-filter-stepper-${context.id}`"
        :disabled="context.value <= context.attrs.minValue"
        @click="down"
      >
        <template #prefix>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H21C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12Z"
              fill="#f9f9fe"
            />
          </svg>
        </template>
      </FormKit>
      <input
        type="hidden"
        @input="context.handlers.DOMInput"
        @blur="handleBlur"
        :value="context._value"
        :id="context.id"
        :name="node.name"
        :class="context.classes.input"
        :disabled="(context.disabled as boolean)"
        v-bind="context.attrs"
      />
      <div class="text-center" :class="context.classes.input">
        <span>{{ context._value }}</span>
        <span v-if="context.attrs.hiddenLabel" class="sr-only" aria-hidden="true">{{
          context.attrs.hiddenLabel
        }}</span>
      </div>
      <FormKit
        type="customButton"
        buttonType="icon"
        variant="secondary"
        aria-label="increase value"
        :aria-labelledby="`title-label-filter-stepper-${context.id}`"
        :disabled="context.value >= context.attrs.maxValue"
        @click="up"
      >
        <template #prefix>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V11.25H21C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75H12.75V21C12.75 21.4142 12.4142 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21V12.75H3C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H11.25V3C11.25 2.58579 11.5858 2.25 12 2.25Z"
              fill="#f9f9fe"
            />
          </svg>
        </template>
      </FormKit>
    </div>
  </section>
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

const handleBlur = () => {
  context.value.handlers.blur();
};

function up() {
  const num = node._value ? (node._value as number) : 0;
  node.input(num + 1);
}

function down() {
  const num = node._value ? (node._value as number) : 0;
  node.input(num - 1);
}
</script>
