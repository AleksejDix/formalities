// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Form/Input',
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    label: {
      name: 'label',
      type: { name: 'string', required: false },
      description: 'demo description',
      table: {
        type: { summary: 'string' }
      },
      control: {
        type: 'text'
      }
    }
  }
};

const Template = (args) => ({
  setup() {
    return { args };
  },
  template: '<FormKit v-bind="args" />'
});

export const Text = Template.bind({});
export const Number = Template.bind({});
export const Email = Template.bind({});
export const Url = Template.bind({});
export const Textarea = Template.bind({});

// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Text.args = {
  name: 'text',
  label: 'Text',
  autocomplete: 'username',
  validation: 'required',
  type: 'text'
};
Number.args = {
  name: 'number',
  label: 'Number',
  type: 'number'
};
Email.args = {
  name: 'email',
  label: 'Email',
  autocomplete: 'email',
  validation: 'required|email',
  type: 'email'
};
Url.args = {
  name: 'url',
  label: 'Url',
  type: 'url'
};
Textarea.args = {
  name: 'textarea',
  label: 'Textarea',
  type: 'textarea'
};