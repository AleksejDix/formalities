<template>
  <VueSlider
    :label="label"
    :min="min"
    :max="max"
    :help="help"
    :value="value"
    :validation="validation"
    :interval="interval"
    :enable-cross="false"
    :disabled="disabled"
    :marks="marks"
    :contained="true"
    :tooltip="'none'"
    dot-size="24"
    :silent="true"
    :process-style="{ background: '#664AC9' }"
    :dot-style="{ background: '#664AC9' }"
    :rail-style="{ background: '#A3A3A6' }"
    :label-style="{ color: '#F9F9FF' }"
    @change="handleInput"
  />
</template>
<script lang="ts">
export default {
  inheritAttrs: false
};
</script>
<script lang="ts" setup>
import { toRef, computed, PropType } from 'vue';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/antd.css';
import type { FormKitFrameworkContext } from '@formkit/core';
import type { MarksProp } from 'vue-slider-component/typings/typings';
import { formatNumber } from '../../../lib/currency';

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext>,
    required: true
  },
  value: {
    type: [Number, Array],
    default: 0
  },
  label: {
    type: String,
    default: ''
  },
  help: {
    type: String,
    default: ''
  },
  interval: {
    type: Number,
    default: 1
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  disabled: {
    type: Boolean,
    default: false
  },
  validation: {
    type: String,
    default: ''
  }
});

const context = toRef(props, 'context');
const node = context.value.node;

const marks = computed((): MarksProp => {
  return {
    [props.min?.toString()]: {
      label: props.min?.toString(),
      labelStyle: {
        transform: 'translateX(0)'
      }
    },
    [props.max?.toString()]: {
      label: formatNumber(props.max),
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
<style lang="postcss">
.vue-slider-disabled {
  @apply cursor-not-allowed;
}

.vue-slider-mark:first-of-type .vue-slider-mark-step,
.vue-slider-mark:last-of-type .vue-slider-mark-step {
  @apply hidden;
}

.vue-slider-mark-label {
  @apply mt-4 whitespace-nowrap text-14 !important;
}

.vue-slider-dot-handle {
  @apply cursor-pointer  border-4 shadow-lg !border-offwhite-100;
}

.vue-slider-dot-disabled {
  @apply cursor-not-allowed;
}
</style>
