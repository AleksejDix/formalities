import TextCopy from './TextCopy.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'UI/TextCopy'
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  components: {
    TextCopy
  },
  // Components used in your story `template` are defined in the `components` object
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <TextCopy v-bind="args">badge</TextCopy>`
});

export const lead = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
lead.args = {
  variant: 'lead'
};

export const body = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
body.args = {
  variant: 'body'
};

export const small = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
small.args = {
  variant: 'small'
};
