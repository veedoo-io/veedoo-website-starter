import MyComponent from './index.vue';

export default {
  title: 'atoms/Tags',
  component: MyComponent,
};

const Template = (args, { argTypes }) => ({
  components: { MyComponent },
  props: Object.keys(argTypes),
  template: '<MyComponent v-bind="$props" />',
});

export const DefaultTag = Template.bind({});
DefaultTag.args = {
  title: 'tag',
};

export const tagWithImage = Template.bind({});
tagWithImage.args = {
  title: 'Web Development',
  image:
    'https://veedoo-web.cdn.prismic.io/veedoo-web/38455de2-6cba-4630-9b4c-e5334c7f5051_clarity_code-line.svg',
};

export const tagWithCustomBackground = Template.bind({});
tagWithCustomBackground.args = {
  title: 'Web Development',
  image:
    'https://veedoo-web.cdn.prismic.io/veedoo-web/38455de2-6cba-4630-9b4c-e5334c7f5051_clarity_code-line.svg',
  extraClass: 'text-[#ff0000] bg-green-300',
};
