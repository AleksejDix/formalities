<template>
  <div>
    <label :class="context.classes.label">{{ context.attrs.text }}</label>
    <VueSlider
      v-bind="$attrs"
      :enable-cross="false"
      :marks="marks"
      :disabled="(context.disabled as boolean)"
      :contained="true"
      :tooltip="'none'"
      dot-size="24"
      :silent="true"
      @change="handleInput"
    />
  </div>
</template>

<script lang="ts" setup>
import { toRef, computed } from 'vue';
import type { PropType } from 'vue';
import VueSlider from 'vue-slider-component';
// import '../assets/slider/pctTheme.scss';
import type { FormKitFrameworkContext } from '@formkit/core';
import type { MarksProp } from 'vue-slider-component/typings/typings';
import { formatNumber } from '../lib/currency';

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext>,
    required: true
  }
});

const context = toRef(props, 'context');
const node = context.value.node;

const marks = computed((): MarksProp => {
  return {
    [context.value.attrs.min?.toString()]: {
      label: context.value.attrs.min?.toString(),
      labelStyle: {
        transform: 'translateX(0)'
      }
    },
    [context.value.attrs.max?.toString()]: {
      label: formatNumber(context.value.attrs.max),
      labelStyle: {
        transform: 'translateX(-100%)'
      }
    }
  };
});

const handleInput = (value: number): void => {
  node.input(value);
};
</script>
