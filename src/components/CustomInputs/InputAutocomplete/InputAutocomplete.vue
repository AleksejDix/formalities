<template>
  <div class="relative flex flex-col" id="autocomplete">
    <label :class="context.classes.customLabel">
      {{ context.label }}
    </label>
    <div class="relative">
      <input type="search" @input="onChange" :placeholder="context.attrs.placeholder"
      v-model="state.query" @keydown.down="onArrowDown" @keydown.up="onArrowUp"
      @keydown.enter="onEnter" @keydown.escape="onEscape" @focus="handleFocus"
      :class="context.classes.input" role="combobox" aria-expanded=true/false autocomplete="off"
      aria-autocomplete="list" aria-control="autocomplete-listbox" />
      <div class="pointer-events-none absolute top-1/2 left-2 -translate-y-1/2 transform">
        <slot v-if="$slots.prefix" name="prefix"></slot>
      </div>
      <button
        v-if="isOpen && state.query"
        @click="clearSearch"
        type="button"
        class="cursor-pointer absolute top-1/2 right-2 -translate-y-1/2 transform"
      >
        <slot v-if="$slots.sufix" name="sufix"></slot>
      </button>
      <ul
        id="autocomplete-listbox"
        :aria-label="context.label"
        role="listbox"
        v-if="isOpen"
        :class="context.classes.options"
      >
        <li
          v-for="(result, i) in results"
          :key="i"
          @click="setResult(result)"
          @mouseover="onMouseOver"
          @mouseleave="onMouseLeave"
          role="option"
          :aria-posinset="i"
          :aria-selected="state.selection.name === result.name"
          :tabindex="state.selection.name === result.name ? 0 : -1"
          :class="[context.classes.item, i === arrowCounter && context.classes.activeItem]"
        >
          <!-- or pass slot so you can choose what to put inside <slot :result="result"></slot> -->
          {{ result.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: false
};
</script>
<script lang="ts" setup>
import { ref, computed, watch, onDeactivated, onMounted, toRef } from 'vue';
import type { PropType } from 'vue';
import type { FormKitFrameworkContext } from '@formkit/core';
const emit = defineEmits(['update:modelValue']);
type ListBoxState = 'idle' | 'browsing' | 'searching';
interface IListbox {
  state: ListBoxState;
  query: string;
  selection: Record<string, string>;
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext>,
    required: true
  },
  modelValue: {
    type: String,
    default: ''
  },
  options: {
    type: [Function, Array],
    required: true
  },
  // to be used before we release
  trackBy: {
    type: String,
    default: 'value'
  },
  // to be used before we release
  searchBy: {
    type: String,
    default: 'label'
  }
});
const context = toRef(props, 'context');
const results = ref([]);
const arrowCounter = ref();
const state = ref<IListbox>({
  state: 'idle',
  query: '',
  selection: ''
});
const isOpen = computed((): boolean => {
  return state.value.state === 'searching';
});

const handleFocus = (event: Event): void => {
  setState('searching');
};

const setResult = (value: unknown) => {
  state.value.query = value.name;
  state.value.selection = value;
  setState('idle');
};

const clearSearch = () => {
  state.value.query = '';
};

const loadResults = (value: string) => {
  // Uncomment before publish, this is just for test purpose to have some response
  // return props.options(value).then((response: unknown[]) => {
  //   results.value = response;
  //   return response;
  // });

  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {
      results.value = json;
      return json;
    });
};

const setState = (value: ListBoxState): void => {
  state.value.state = value;
};

const select = (delta) => {
  const available = [...results.value];
  let idx = available.indexOf(state.value.selection) + delta;
  arrowCounter.value = idx;
  if (idx >= available.length) {
    idx = 0;
  } else if (idx < 0) {
    idx = available.length - 1;
  }
  state.value.selection = available[idx];
};

const handleClickOutside = (event: Event): void => {
  if (!document.querySelector('#autocomplete').contains(event.target)) {
    setState('idle');
  }
};

const onMouseOver = (e: Event): void => {
  state.value.selection = results.value.find((item) => {
    return item.name === e.target.textContent;
  });
  arrowCounter.value = results.value.indexOf(state.value.selection);
};

const onMouseLeave = (e: Event): void => {
  if (e.target.textContent === state.value.selection.name) {
    state.value.selection = '';
    arrowCounter.value = null;
  }
};

const onArrowDown = (): void => {
  select(1);
};
const onArrowUp = (): void => {
  select(-1);
};
const onEnter = (): void => {
  setResult(results.value[arrowCounter.value]);
};

const onEscape = (): void => {
  setState('idle');
  state.value.selection = '';
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onDeactivated(() => {
  document.removeEventListener('click', handleClickOutside);
});

watch(
  () => props.value,
  (newValue: string) => {
    if (!newValue) {
      state.value.query = '';
      state.value.selection = '';
    }
  }
);

watch(
  () => state.value.selection,
  (newValue: string) => {
    emit('update:modelValue', newValue);
  }
);

watch(
  () => state.value.query,
  (value: string) => {
    if (value && value.length > 2) {
      loadResults(value);
    }
  }
);
</script>
<style scoped>
/* clears the 'X' from Internet Explorer */
input[type='search']::-ms-clear,
input[type='search']::-ms-reveal {
  display: none;
  width: 0;
  height: 0;
}

/* clears the 'X' from Chrome */
input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  display: none;
}
</style>
