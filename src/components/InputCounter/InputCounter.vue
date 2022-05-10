<template>
  <div :class="context.classes.outer">
    <div>
      <div :class="context.classes.label">{{ context.label }}</div>
      <div>
        {{ context.help }}
      </div>
    </div>
    <div>
      <button type="button" @click="down" :class="context.classes.down">down</button>
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
      <div :class="context.classes.input">
        <span>{{ context._value }}</span>
        <span class="sr-only" aria-hidden="true"></span>
      </div>
      <button type="button" @click="up" :class="context.classes.up">up</button>
    </div>
  </div>
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
console.log(context);

node.props.inputType = 'password';
node.props.icon = 'view';

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
