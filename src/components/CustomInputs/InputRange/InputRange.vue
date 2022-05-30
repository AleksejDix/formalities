<template>
  <VueSlider
    :label="label"
    :min="min"
    :max="max"
    :help="help"
    :value="modelValue"
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
<script lang="ts" setup>
import { toRef, computed, PropType } from 'vue';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/antd.css';
import type { FormKitFrameworkContext } from '@formkit/core';
import { MarksProp } from 'vue-slider-component/typings/typings';
import { formatNumber } from '@/lib/currency';

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext>,
    required: true
  },
  modelValue: {
    type: Number,
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

.vue-slider-rail {
  @apply rounded;
}

.vue-slider-process {
  @apply rounded bg-ruby-700;
}

.vue-slider-mark {
  z-index: 4;
}

.vue-slider-mark:first-child .vue-slider-mark-step,
.vue-slider-mark:last-child .vue-slider-mark-step {
  @apply hidden;
}

.vue-slider-mark-step {
  @apply h-4 w-px -translate-y-1/3 transform bg-denim-400;
}

.vue-slider-mark-label {
  @apply mt-4 whitespace-nowrap text-14 !important;
}

.vue-slider-dot-handle {
  @apply h-full w-full cursor-pointer rounded-full border-4 border-offwhite-100 bg-ruby-700 shadow-lg hover:!border-offwhite-100;
}

.vue-slider-dot-focus {
  @apply rounded-full;
}
.vue-slider-dot-disabled {
  @apply cursor-not-allowed;
}

.vue-slider-dot-inner {
  @apply min-h-6 whitespace-nowrap rounded border-ruby-700 bg-offwhite-100 px-4 py-2 text-center text-14;
}

.vue-slider-dot-tooltip-wrapper {
  @apply opacity-0 transition-all;
}
.vue-slider-dot-show {
  @apply opacity-100;
}
</style>
