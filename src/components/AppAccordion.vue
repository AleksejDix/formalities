<script lang="ts">
// // WAI-ARIA: https://www.w3.org/TR/wai-aria-practices-1.2/#disclosure

import { nanoid } from 'nanoid';

import { defineComponent, h, provide, inject, ref, computed } from 'vue';
import type { ComputedRef } from 'vue';

export const AppAccordion = defineComponent({
  name: 'AppAccordion',
  props: {
    multiple: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const selected = ref<Map<string, boolean>>(new Map());

    const has = (id: string) => {
      return selected.value.has(id);
    };

    const close = (id: string) => {
      selected.value.delete(id);
    };

    const open = (id: string) => {
      selected.value.set(id, true);
    };

    const clear = () => {
      selected.value.clear();
    };

    const toggle = (id: string) => {
      if (props.multiple) {
        has(id) ? close(id) : open(id);
      } else {
        clear();
        open(id);
      }
    };

    provide('accordion', {
      toggle,
      close,
      open,
      has,
      selected
    });

    return () => h('div', {}, context.slots.default && context.slots.default());
  }
});

export const AppAccordionBox = defineComponent({
  name: 'AppAccordionBox',
  props: {
    selected: {
      type: Boolean,
      required: false
    }
  },
  setup(props, context) {
    const id = nanoid();
    const buttonId = nanoid();
    const panelId = nanoid();
    const accordion = inject('accordion') as {
      toggle: (id: string) => void;
      has: (id: string) => boolean;
    };

    if (!accordion) {
      console.log('bla');
    }

    const state = ref(props.selected);

    if (props.selected) {
      accordion.toggle(id);
    }

    const isOpen = computed(() => {
      return accordion.has(id);
    });

    const close = () => {
      state.value = false;
    };

    const open = () => {
      state.value = true;
    };

    const toggle = () => {
      isOpen.value ? close() : open();
      if (accordion.toggle) {
        accordion.toggle(id);
      }
    };

    provide('box', {
      isOpen,
      close,
      open,
      toggle,
      panelId,
      buttonId
    });

    return () => h('div', {}, context.slots.default && context.slots.default());
  }
});

export const AppAccordionButton = defineComponent({
  name: 'AppAccordionButton',

  setup(props, context) {
    const { isOpen, toggle } = inject('box') as {
      isOpen: ComputedRef<boolean>;
      toggle: () => void;
    };

    return () =>
      h(
        'button',
        {
          ariaExpanded: isOpen.value,
          onClick: toggle
        },
        context.slots.default && context.slots.default()
      );
  }
});

export const AppAccordionPanel = defineComponent({
  name: 'AppAccordionPanel',

  props: {
    as: {
      type: String,
      default: 'div'
    }
  },

  setup(props, context) {
    const { isOpen } = inject('box') as {
      isOpen: ComputedRef<boolean>;
    };

    return () =>
      h('div', { mode: 'out-in' }, [
        isOpen.value ? h(props.as, {}, context.slots.default && context.slots.default()) : null
      ]);
  }
});

export default AppAccordion;
</script>
