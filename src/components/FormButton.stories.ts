export default {
  title: 'Form/Button',
  argTypes: {
    control: {
      type: 'customButton'
    }
  }
};

const Template = (args) => ({
  setup() {
    return { args };
  },
  template: `<FormKit v-bind="args">Primary base button</FormKit>`
});

const Template2 = (args) => ({
  setup() {
    return { args };
  },
  template: '<FormKit v-bind="args">Secondary large button</FormKit>'
});

const Template3 = (args) => ({
  setup() {
    return { args };
  },
  template: '<FormKit v-bind="args">Critical icon button</FormKit>'
});

export const Primary = Template.bind({});
export const Secondary = Template2.bind({});
export const IconCritical = Template3.bind({});
Primary.args = {
  name: 'button',
  type: 'button',
  variant: 'primary',
  size: 'base'
};
Secondary.args = {
  name: 'button2',
  type: 'button',
  variant: 'secondary',
  size: 'large'
};
IconCritical.args = {
  name: 'button3',
  type: 'button',
  variant: 'critical',
  size: 'icon'
};
