import MyComponent from './index.vue';

export default {
  title: 'atoms/Button',
  component: MyComponent,
};

const Template = (args, { argTypes }) => ({
  components: { MyComponent },
  props: Object.keys(argTypes),
  template: '<MyComponent v-bind="$props" />',
});

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  text: 'My button',
  url: 'https://veedoo.io/',
};
