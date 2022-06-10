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
  template: `<FormKit v-bind="args">My button</FormKit>`
});

const Template2 = (args) => ({
  setup() {
    return { args };
  },
  template: '<FormKit v-bind="args">Button</FormKit>'
});

const Template3 = (args) => ({
  setup() {
    return { args };
  },
  template: '<FormKit v-bind="args">Button</FormKit>'
});

export const Primary = Template.bind({});
export const Secondary = Template2.bind({});
export const IconCritical = Template3.bind({});
Primary.args = {
  name: 'button',
  type: 'button',
  buttonType: 'button',
  variant: 'primary',
  size: 'base'
};
Secondary.args = {
  name: 'button2',
  type: 'button',
  buttonType: 'button',
  variant: 'secondary',
  size: 'large'
};
IconCritical.args = {
  name: 'button3',
  type: 'button',
  buttonType: 'icon',
  variant: 'critical',
  size: 'base'
};
