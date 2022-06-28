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
  template: `
    <div class="max-w-xs">
      <FormKit v-bind="args" />
      <FormKit v-bind="args" validation="required" validation-visibility="live" />
      <FormKit v-bind="args" label="Disabled" disabled="true" />
    </div>
  `
});

export const Text = Template.bind({});
export const Number = Template.bind({});
export const Password = Template.bind({});
export const Email = Template.bind({});
export const Url = Template.bind({});
export const Textarea = Template.bind({});

// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Text.args = {
  name: 'text',
  label: 'Text',
  autocomplete: 'username',
  placeholder: 'Text placeholder',
  type: 'text'
};
Number.args = {
  name: 'number',
  label: 'Number',
  placeholder: 'Number placeholder',
  validation: 'between:1,10',
  type: 'number'
};
Password.args = {
  name: 'password',
  label: 'Password',
  placeholder: 'Password placeholder',
  type: 'password'
};
Email.args = {
  name: 'email',
  label: 'Email',
  autocomplete: 'email',
  validation: 'email',
  placeholder: 'Email placeholder',
  type: 'email'
};
Url.args = {
  name: 'url',
  label: 'Url',
  placeholder: 'Url placeholder',
  type: 'url'
};
Textarea.args = {
  name: 'textarea',
  label: 'Textarea',
  placeholder: 'Textarea placeholder',
  type: 'textarea'
};