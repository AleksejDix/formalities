import {
  AppAccordion,
  AppAccordionBox,
  AppAccordionButton,
  AppAccordionPanel
} from './AppAccordion.vue';

export default {
<<<<<<< HEAD
  title: 'AppAccordion'
=======
  title: 'UI/Accordion'
>>>>>>> c8a2cf432a590969f8731f1badc5a30f106b7b83
};

const Accordion = (args) => ({
  components: {
    AppAccordion,
    AppAccordionButton,
    AppAccordionBox,
    AppAccordionPanel
  },
  setup() {
    return { args };
  },
  template: `
  <AppAccordion v-bind="args" class="text-white">
    <AppAccordionBox data-table="hi" class="border border-white">
      <AppAccordionButton>Expand me</AppAccordionButton>
      <AppAccordionPanel>panel 1</AppAccordionPanel>
    </AppAccordionBox>
    <AppAccordionBox class="border border-white" selected>
      <AppAccordionButton>Expand me</AppAccordionButton>
      <AppAccordionPanel>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </AppAccordionPanel>
<<<<<<< HEAD
    </AppAccordionBox>
  </AppAccordion>`
});

export const AccordionSingle = Accordion.bind({});

AccordionSingle.args = {};
=======
      </AppAccordionBox>
  </AppAccordion>`
});

export const Single = Accordion.bind({});

Single.args = {
  multiple: false
};

export const Multipe = Accordion.bind({});

Multipe.args = {
  multiple: true
};
>>>>>>> c8a2cf432a590969f8731f1badc5a30f106b7b83
