<template>
  <div class="relative">
    <VueTelInput
      id="tel-input"
      v-model="phone"
      valid-characters-only
      disabled-fetching-country
      default-country="CH"
      mode="international"
      :input-options="{
        placeholder: 'Phone number',
        type: 'tel',
        autocomplete: 'tel'
      }"
      :value="value"
      @input="handleInput"
      @validate="handleValidate"
    />
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: false
};
</script>
<script lang="ts" setup>
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';
import { ref, watch } from 'vue';
import debounce from 'lodash-es/debounce';

const emit = defineEmits(['update:modelValue', 'validate']);

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
});
const isPristine = ref(true);
const phone = ref('');

const handleInput = debounce((value: string): void => {
  if (isPristine.value) {
    isPristine.value = false;
  } else {
    emit('update:modelValue', value);
  }
}, 100);

const handleValidate = debounce((event: Event): void => {
  emit('validate', event);
}, 100);

watch(
  () => props.value,
  (newValue: string) => {
    phone.value = newValue;
  }
);
</script>
<style lang="postcss">
.vue-tel-input {
  @apply relative flex rounded-lg border text-left border-denim-600 dark:border-denim-400 bg-white dark:bg-white focus-within:shadow-none;
}
.vue-tel-input.disabled .selection,
.vue-tel-input.disabled .dropdown,
.vue-tel-input.disabled input {
  @apply cursor-not-allowed;
}
.vti__dropdown {
  @apply flex bg-offwhite-100 dark:bg-offwhite-100 cursor-pointer flex-col content-center justify-center p-2 rounded-lg  hover:border-velvet-600 focus:border-velvet-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-offset-denim-900 focus:ring-velvet-600;
}
.vti__dropdown.show {
  @apply max-h-60 overflow-y-scroll;
}
.vti__dropdown.open,
.vti__dropdown:hover {
  @apply rounded-lg bg-transparent;
}
.vti__selection {
  @apply flex items-center text-14;
}
.vti__flag {
  @apply mx-1;
}
.vti__dropdown-list {
  @apply absolute left-0 z-10 m-0 max-h-60 list-none overflow-y-auto rounded-lg border p-0 text-left dark:border-denim-500 bg-white dark:bg-white;
}
.vti__dropdown-list.below {
  @apply top-full;
}
.vti__dropdown-list.above {
  top: auto;
  bottom: 100%;
  margin-bottom: -2px;
}
.vti__dropdown-arrow {
  transform: scaleY(0.5);
  display: inline-block;
}
.vti__dropdown-item {
  @apply flex cursor-default flex-wrap p-2;
}

.vti__dropdown-item strong {
  @apply flex-1;
}
.vti__dropdown-item.highlighted {
  @apply bg-velvet-600 text-offwhite-100;
}

.vti__dropdown-item .vti__flag {
  @apply mr-4 inline-block self-center;
}
.vti__input {
  @apply flex-1 rounded-lg border-none bg-transparent px-4 py-2 text-left outline-none placeholder-denim-700  hover:border-velvet-600 focus:border-velvet-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-offset-denim-900 focus:ring-velvet-600;
}
</style>
