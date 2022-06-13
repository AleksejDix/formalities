import GlobalBadge from './GlobalBadge.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'UI/Badge'
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  components: {
    GlobalBadge
  },
  // Components used in your story `template` are defined in the `components` object
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <GlobalBadge v-bind="args">badge</GlobalBadge>`
});

export const Gradient = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Gradient.args = {
  variant: 'gradient'
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {};
