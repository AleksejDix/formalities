import { ref } from "vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Form/Slider'
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const slider1Value = ref(0);
    const slider2Value = ref(0);
    return { args, slider1Value, slider2Value };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
  <div class="max-w-xs flex flex-col gap-12">
    <FormKit v-bind="args" v-model="slider1Value" />
    <FormKit v-bind="args" text="Disabled slider" disabled="true" v-model="slider2Value" />
  </div>`
});

export const Slider = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Slider.args = {
  name: 'slider',
  label: 'Slider',
  text: 'Slider',
  type: 'slider',
  min: 1,
  max: 100,
  interval: 5,
  enableCross: false,
  contained: true,
  tooltip: 'none',
  silent: true
};
