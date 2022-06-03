import GlobalOptions from './GlobalOptions.vue';
export default {
  title: 'Options',
  argTypes: {
    control: {
      type: 'checkbox'
    }
  }
};

const Template = (args) => ({
  components: {
    GlobalOptions
  },
  setup() {
    return { args };
  },
  template: '<GlobalOptions v-bind="args" />'
});

export const Text = Template.bind({});
Text.args = {
  name: 'options',
  label: 'Global Options',
  type: 'checkbox',
  options: [
    { label: 'France', value: 'fr' },
    { label: 'Germany', value: 'de' },
    { label: 'Spain', value: 'es' },
    { label: 'Italy', value: 'ie' },
    { label: 'Greece', value: 'gr' }
  ]
};
