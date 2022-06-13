import { ref } from "vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Form/Counter',
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    label: {
      control: {
        type: 'counter'
      }
    }
  }
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const counterValue = ref(0);
    return { args, counterValue };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
  <div class="flex flex-col gap-8">
    <FormKit v-model="counterValue" hidden-label="Number of something" v-bind="args"><template #decrease><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H21C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12Z" fill="#f9f9fe"/></svg></template><template #increase><svg  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V11.25H21C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75H12.75V21C12.75 21.4142 12.4142 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21V12.75H3C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H11.25V3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#f9f9fe"/></svg></template></FormKit>
    <FormKit v-bind="args"><template #decrease>minus</template><template #increase>plus</template></FormKit>
  </div>`
});

export const Counter = Template.bind({});

// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Counter.args = {
  label: 'Counter',
  minValue: '0',
  maxValue: '100',
  name: 'counter',
  type: 'counter',
  labelDescription: 'description'
};
