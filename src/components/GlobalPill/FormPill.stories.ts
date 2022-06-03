import GlobalPill from './GlobalPill.vue';
export default {
  title: 'Pill',
  argTypes: {
    control: {
      type: 'checkbox'
    }
  }
};

const Template = (args) => ({
  components: {
    GlobalPill
  },
  setup() {
    return { args };
  },
  template: '<GlobalPill v-bind="args" />'
});

export const Text = Template.bind({});
Text.args = {
  name: 'Pill',
  label: 'Pill',
  type: 'checkbox',
  options: [
    { label: 'France', value: 'fr' },
    { label: 'Germany', value: 'de' },
    { label: 'Spain', value: 'es' },
    { label: 'Italy', value: 'ie' },
    { label: 'Greece', value: 'gr' }
  ],
  modelValue: ''
};
