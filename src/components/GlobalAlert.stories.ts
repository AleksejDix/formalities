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

export const SuccessAlert = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
SuccessAlert.args = {
  variant: 'success'
};

export const DefaultBadge = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
DefaultBadge.args = {
  variant: 'error'
};

export const InfoBadge = Template.bind({});
InfoBadge.args = {
  variant: 'info'
};

export const WarningBadge = Template.bind({});
WarningBadge.args = {
  variant: 'warning'
};
