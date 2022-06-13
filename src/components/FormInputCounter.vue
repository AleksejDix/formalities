<template>
  <section class="inline-flex items-center">
    <label :class="context.classes.customLabel">
      <div>{{ context.label }}</div>
      <div :class="context.classes.customHelp" v-if="context.attrs.labelDescription">
        {{ context.attrs.labelDescription }}
      </div>
    </label>
    <div class="flex items-center justify-between">
      <button
        type="button"
        aria-label="decrease value"
        :aria-labelledby="`title-label-filter-stepper-${context.id}`"
        :disabled="decDisabled"
        :data-disabled="decDisabled || undefined"
        :class="context.classes.counterButton"
        @click="down"
      >
        <slot name="decrease" />
      </button>
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
        <span>{{ context._value || 0 }}</span>
        <span v-if="context.attrs.hiddenLabel" class="sr-only" aria-hidden="true">{{
          context.attrs.hiddenLabel
        }}</span>
      </div>
      <button
        type="button"
        aria-label="increase value"
        :aria-labelledby="`title-label-filter-stepper-${context.id}`"
        :disabled="incDisabled"
        :data-disabled="incDisabled || undefined"
        :class="context.classes.counterButton"
        @click="up"
      >
        <slot name="increase" />
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { toRef, computed } from 'vue';
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

const decDisabled = computed(
  (): boolean => !context.value.value || context.value.value <= context.value.attrs.minValue
);
const incDisabled = computed(
  (): boolean => context.value.value && context.value.value <= context.value.attrs.minValue
);

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
