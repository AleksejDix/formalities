<template>
  <div class="relative flex flex-col" id="autocomplete">
    <label :class="context.classes.customLabel">
      {{ context.label }}
    </label>
    <input
      type="search"
      @input="onChange"
      :placeholder="context.attrs.placeholder"
      v-model="state.query"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter="onEnter"
      @focus="handleFocus"
      :class="context.classes.input"
    />
    <ul v-if="isOpen" :class="context.classes.options">
      <li
        v-for="(result, i) in results"
        :key="i"
        @click="setResult(result)"
        @mouseover="onMouseOver"
        @mouseleave="onMouseLeave"
        :class="[context.classes.item, i === arrowCounter && context.classes.activeItem]"
      >
        {{ result.name }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'update'
  }
};
</script>
<script lang="ts" setup>
import { ref, computed, watch, nextTick, onDeactivated, onMounted, toRef } from 'vue';
import type { PropType } from 'vue';
import type { FormKitFrameworkContext } from '@formkit/core';
const emit = defineEmits(['update']);
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
  value: {
    type: String,
    default: ''
  },
  options: {
    type: Function,
    required: true
  },
  trackBy: {
    type: String,
    default: 'value'
  },
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
  state.value.state = 'searching';
  nextTick(() => {
    (event.target as HTMLElement).scrollIntoView({ block: 'end', behavior: 'smooth' });
  });
};

const setResult = (value: unknown) => {
  state.value.query = value.name;
  state.value.selection = value;
  state.value.state = 'idle';
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
    state.value.state = 'idle';
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
      state.value.selection = null;
    }
  }
);

watch(
  () => state.value.selection,
  (newValue: string) => {
    emit('update', newValue);
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
