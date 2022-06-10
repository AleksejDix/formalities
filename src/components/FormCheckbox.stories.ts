export default {
  title: 'Form/Input/Checkbox|Radio',
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

const Template2 = (args) => ({
  setup() {
    return { args };
  },
  template: '<FormKit v-bind="args" />'
});

export const Radio = Template2.bind({})
export const Checkbox = Template.bind({});
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
