export default {
  title: 'Form/Button',
  argTypes: {
    control: {
      type: 'button'
    }
  }
};

const Template = (args) => ({
  setup() {
    return { args };
  },
  template: `<div>
    <FormKit class="mb-4" v-bind="args" size="base">Base</FormKit>
    <FormKit class="mb-4" v-bind="args" size="large">Large</FormKit>
    <FormKit class="mb-4" v-bind="args" size="base" disabled>Disabled</FormKit>
    <FormKit class="mb-4" v-bind="args" size="icon"><svg  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V11.25H21C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75H12.75V21C12.75 21.4142 12.4142 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21V12.75H3C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H11.25V3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#f9f9fe"/></svg></FormKit>
  </div>`
});
const TemplateIcon = (args) => ({
  setup() {
    return { args };
  },
  template: `
    <div class="flex gap-4">
      <FormKit v-bind="args" variant="primary"><svg  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V11.25H21C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75H12.75V21C12.75 21.4142 12.4142 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21V12.75H3C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H11.25V3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#f9f9fe"/></svg></FormKit>
      <FormKit v-bind="args" variant="secondary"><svg  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V11.25H21C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75H12.75V21C12.75 21.4142 12.4142 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21V12.75H3C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H11.25V3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#f9f9fe"/></svg></FormKit>
      <FormKit v-bind="args" variant="critical"><svg  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V11.25H21C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75H12.75V21C12.75 21.4142 12.4142 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21V12.75H3C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H11.25V3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#f9f9fe"/></svg></FormKit>
      <FormKit v-bind="args" disabled variant="critical"><svg  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V11.25H21C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75H12.75V21C12.75 21.4142 12.4142 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21V12.75H3C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H11.25V3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#f9f9fe"/></svg></FormKit>
    </div>
    `
});

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Critical = Template.bind({});
export const Icon = TemplateIcon.bind({});

Primary.args = {
  name: 'Primary',
  type: 'button',
  variant: 'primary',
  ariaLabel: 'ariatest'
};
Secondary.args = {
  name: 'Secondary',
  type: 'button',
  variant: 'secondary'
};
Critical.args = {
  name: 'Critical',
  type: 'button',
  variant: 'critical'
};
Icon.args = {
  name: 'Icon',
  type: 'button',
  size: 'icon'
};