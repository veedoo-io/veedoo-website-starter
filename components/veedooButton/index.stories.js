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
  text: 'Contact us',
  url: 'https://veedoo.io/',
  class: 'bg-[#F2776B] py-2.5 px-[20px] rounded text-white',
};

export const ButtonWithEmoji = Template.bind({});
ButtonWithEmoji.args = {
  text: 'Contact ✅ us',
  url: 'https://veedoo.io/',
  class: 'bg-[#F2776B] py-2.5 px-[20px] rounded text-white',
};

export const ButtonWithStartIcon = Template.bind({});
ButtonWithStartIcon.args = {
  text: 'Contact us',
  url: 'https://veedoo.io/',
  class: 'bg-[#F2776B] py-2.5 px-[20px] rounded text-white',
  startIcon:
    'https://veedoo-web.cdn.prismic.io/veedoo-web/8d1b715d-e791-4a9e-b4f6-db8cc2f26b5e_mail.svg',
};

export const ButtonWithEndIcon = Template.bind({});
ButtonWithEndIcon.args = {
  text: 'Contact us',
  url: 'https://veedoo.io/',
  class: 'bg-[#F2776B] py-2.5 px-[20px] rounded text-white',
  endIcon:
    'https://veedoo-web.cdn.prismic.io/veedoo-web/9f0f3743-61b8-4d19-a472-46a4f78e6b91_Group+36.svg',
};

export const ButtonWithStartAndEndIcon = Template.bind({});
ButtonWithStartAndEndIcon.args = {
  text: 'Contact us',
  url: 'https://veedoo.io/',
  class: 'bg-[#F2776B] py-2.5 px-[20px] rounded text-white',
  startIcon:
    'https://veedoo-web.cdn.prismic.io/veedoo-web/9f0f3743-61b8-4d19-a472-46a4f78e6b91_Group+36.svg',
  endIcon:
    'https://veedoo-web.cdn.prismic.io/veedoo-web/8d1b715d-e791-4a9e-b4f6-db8cc2f26b5e_mail.svg',
};

export const ButtonWithImageOnly = Template.bind({});
ButtonWithImageOnly.args = {
  text: '',
  url: 'https://veedoo.io/',
  class: 'bg-transparent py-2.5 px-[20px] rounded text-5xl text-white',
  startIcon:
    'https://veedoo-web.cdn.prismic.io/veedoo-web/9f0f3743-61b8-4d19-a472-46a4f78e6b91_Group+36.svg',
};
