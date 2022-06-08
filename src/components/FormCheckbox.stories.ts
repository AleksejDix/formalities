export default {
  title: 'Form/Input/Checkbox',
  argTypes: {
    control: {
      type: 'checkbox'
    }
  }
};

const Template = (args) => ({
  setup() {
    return { args };
  },
  template: '<FormKit v-bind="args" />'
});

export const Component = Template.bind({});
Component.args = {
  name: 'checkbox',
  label: 'checkbox',
  type: 'checkbox',
  options: [
    { label: 'France', value: 'fr' },
    { label: 'Germany', value: 'de' },
    { label: 'Spain', value: 'es' },
    { label: 'Italy', value: 'ie' },
    { label: 'Greece', value: 'gr' }
  ]
};
