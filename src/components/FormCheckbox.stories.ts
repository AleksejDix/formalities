export default {
  title: 'Form/Checkbox & Radio',
  argTypes: {
    control: {
      type: 'checkbox'
    }
  }
};

const Template = (args) => ({
  setup() {
    return { args };
  },
  template: `<div class="space-y-4">
    <FormKit v-bind="args" label="Default" />
    <FormKit v-bind="args" validation="required" validation-visibility="live" />
    <FormKit v-bind="args" label="Disabled" disabled />
  </div>`
});

const TemplateToggle = (args) => ({
  setup() {
    return { args };
  },
  template: `<div class="space-y-4">
      <FormKit v-bind="args" />
      <FormKit v-bind="args" label="Icon"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.19619 0.135207C4.33031 0.269341 4.36871 0.471879 4.29299 0.645796C4.02031 1.27206 3.90532 2.02924 3.90532 2.80474C3.90532 5.7262 6.2738 8.09468 9.19526 8.09468C9.97076 8.09468 10.7279 7.97969 11.3542 7.70701C11.5281 7.63129 11.7307 7.66969 11.8648 7.80381C11.9989 7.93793 12.0373 8.14047 11.9616 8.31439C11.0005 10.5224 8.75304 12 6.21301 12C2.78175 12 0 9.21825 0 5.78699C0 3.24696 1.47759 0.999519 3.68561 0.0383689C3.85953 -0.0373397 4.06206 0.00107371 4.19619 0.135207ZM3.10196 1.43031C1.77272 2.39799 0.923076 4.00091 0.923076 5.78699C0.923076 8.70845 3.29155 11.0769 6.21301 11.0769C7.99909 11.0769 9.60201 10.2273 10.5697 8.89804C10.1161 8.98231 9.65027 9.01775 9.19526 9.01775C5.764 9.01775 2.98224 6.236 2.98224 2.80474C2.98224 2.34973 3.01769 1.88395 3.10196 1.43031Z" fill="#6B50CE"/></svg></FormKit>
  </div>`
});

export const Checkbox = Template.bind({});
export const Radio = Template.bind({});
export const Toggle = TemplateToggle.bind({});
export const Pill = Template.bind({});
Checkbox.args = {
  name: 'checkbox',
  label: 'checkbox',
  type: 'checkbox',
  options: [
    { label: 'France', value: 'fr' },
    { label: 'Germany', value: 'de' },
    { label: 'Spain', value: 'es' },
    { label: 'Italy', value: 'ie' },
    { label: 'Greece', value: 'gr' }
  ]
};
Radio.args = {
  name: 'radio',
  label: 'radio',
  type: 'radio',
  options: [
    { label: 'France', value: 'fr' },
    { label: 'Germany', value: 'de' },
    { label: 'Spain', value: 'es' },
    { label: 'Italy', value: 'ie' },
    { label: 'Greece', value: 'gr' }
  ]
};
Toggle.args = {
  name: 'toggle',
  label: 'toggle',
  type: 'toggle',
};
Pill.args = {
  name: 'pill',
  label: 'Pill',
  type: 'pill',
}
