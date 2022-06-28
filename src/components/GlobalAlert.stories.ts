import GlobalAlert from './GlobalAlert.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'UI/Alert'
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  components: {
    GlobalAlert
  },
  // Components used in your story `template` are defined in the `components` object
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <GlobalAlert v-bind="args">Alert</GlobalAlert>`
});

export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Success.args = {
  variant: 'success'
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  variant: 'error'
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info'
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning'
};
