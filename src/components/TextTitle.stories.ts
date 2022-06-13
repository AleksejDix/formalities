import TextTitle from './TextTitle.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'UI/TextTitle'
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  components: {
    TextTitle
  },
  // Components used in your story `template` are defined in the `components` object
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <TextTitle v-bind="args">badge</TextTitle>`
});

export const poster = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
poster.args = {
  variant: 'poster',
  level: 1
};

export const title = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
title.args = {
  variant: 'title',
  level: 1
};

export const headline = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
headline.args = {
  variant: 'headline',
  level: 1
};

export const feature = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
feature.args = {
  variant: 'feature',
  level: 1
};

export const caption = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
caption.args = {
  variant: 'caption',
  level: 1
};
