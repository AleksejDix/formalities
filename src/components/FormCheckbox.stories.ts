export default {
  title: 'Form/Input/Checkbox|Radio|Toggle',
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

export const Checkbox = Template.bind({});
export const Radio = Template.bind({});
export const Toggle = Template.bind({});
Checkbox.args = {
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
Radio.args = {
  name: 'radio',
  label: 'radio',
  type: 'radio',
  options: [
    { label: 'France', value: 'fr' },
    { label: 'Germany', value: 'de' },
    { label: 'Spain', value: 'es' },
    { label: 'Italy', value: 'ie' },
    { label: 'Greece', value: 'gr' }
  ]
};
Toggle.args = {
  name: 'toggle',
  label: 'toggle',
  type: 'toggle',
};
