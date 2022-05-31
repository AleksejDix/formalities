// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Input',
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    label: {
      name: 'label',
      type: { name: 'string', required: false },
      defaultValue: 'Hello',
      description: 'demo description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Hello' }
      },
      control: {
        type: 'text'
      }
    }
  }
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<FormKit v-bind="args" />'
});

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Text.args = {
  name: 'text',
  label: 'Username',
  autocomplete: 'username'
};
