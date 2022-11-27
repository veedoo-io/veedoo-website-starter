import MyComponent from './index.vue';

export default {
  title: 'atoms/Text',
  component: MyComponent,
};

const Template = (args, { argTypes }) => ({
  components: { MyComponent },
  props: Object.keys(argTypes),
  template: '<MyComponent v-bind="$props" />',
});

export const DefaultTextH1 = Template.bind({});

DefaultTextH1.args = {
  text: 'Text Atom',
  htmlTag: 'h1',
  class: 'text-blue-300 text-5xl',
};

export const TextWithStartIcon = Template.bind({});

TextWithStartIcon.args = {
  text: 'Tag Content',
  htmlTag: 'h1',
  class: 'text-blue-300 ',
  startIcon:
    'https://veedoo-web.cdn.prismic.io/veedoo-web/2c9e3f32-7c05-47b1-aaa3-45e4f1b118be_Logo+Icon.svg',
};

export const TextWithEndIcon = Template.bind({});

TextWithEndIcon.args = {
  text: 'Tag Content',
  htmlTag: 'p',
  class: 'text-blue-300 text-5xl',
  endIcon:
    'https://veedoo-web.cdn.prismic.io/veedoo-web/2c9e3f32-7c05-47b1-aaa3-45e4f1b118be_Logo+Icon.svg',
};

export const TextWithStartAndEndIcon = Template.bind({});

TextWithStartAndEndIcon.args = {
  text: 'Tag Content',
  htmlTag: 'p',
  class: 'text-blue-300 text-[150px]',
  startIcon:
    'https://veedoo-web.cdn.prismic.io/veedoo-web/2c9e3f32-7c05-47b1-aaa3-45e4f1b118be_Logo+Icon.svg',
  endIcon:
    'https://veedoo-web.cdn.prismic.io/veedoo-web/2c9e3f32-7c05-47b1-aaa3-45e4f1b118be_Logo+Icon.svg',
  iconClass: 'w-32 h-32',
};

export const LinkText = Template.bind({});

LinkText.args = {
  text: 'Click Me I am a Link',
  htmlTag: 'a',
  class: 'text-blue-300 underline text-5xl',
  url: 'https://veedoo.io',
};

export const TextWithEmoji = Template.bind({});

TextWithEmoji.args = {
  text: '🚀 I am a text with emoji 🚀',
  htmlTag: 'h1',
  class: 'text-red-300  text-5xl',
};

export const largeParagraph = Template.bind({});

largeParagraph.args = {
  text: 'Lorem ipsum dolor sit amet consectetur. Sed a faucibus condimentum porta. Turpis ac interdum praesent dictum elit tellus.',
  htmlTag: 'p',
  class: 'text-black w-[586px] text-[19px] h-fit',
};
