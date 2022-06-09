export default {
  title: 'Form/Button',
  argTypes: {
    control: {
      type: 'customButton'
    }
  }
};
import CustomButton from './CustomButton.vue';

const Template = (args) => ({
  components: {CustomButton},
  setup() {
    return { args };
  },
  template: '<CustomButton v-bind="args">My button</CustomButton>'
});

export const Component = Template.bind({});
Component.args = {
  name: 'button',
  type: 'button',
  variant: 'primary',
  size: 'base'
};
