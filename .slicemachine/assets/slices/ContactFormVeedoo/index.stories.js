import MyComponent from '../../../../slices/ContactFormVeedoo';
import SliceZone from 'vue-slicezone';

export default {
  title: 'slices/ContactFormVeedoo',
};

export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone,
  },
  methods: {
    resolve() {
      return MyComponent;
    },
  },
  data() {
    return {
      mock: {
        variation: 'default',
        version: 'sktwi1xtmkfgx8626',
        items: [{}],
        primary: {
          mailto_email: 'taoufiq@veedoo.io',
          image: {
            dimensions: {
              width: 60,
              height: 60,
            },
            alt: null,
            copyright: null,
            url: 'https://veedoo-website-starter.cdn.prismic.io/veedoo-website-starter/58eb12e7-b170-4fb0-844b-41998d03c252_mail.svg',
          },
          form_title: 'Contact us',
          description: [
            {
              type: 'paragraph',
              text: 'to discuss your next project ',
              spans: [],
            },
          ],
          name_title: null,
          name_placeholder: null,
          email_title: 'Your email',
          email_placeholder: 'example@gmail.com',
          message_title: 'Message',
          message_placeholder: 'Message',
          button_text: 'Send',
          text_color: '#353c47',
          background_color: '#ffffff',
          button_background_color: '#f2776b',
          text_background_color: '#ffffff',
        },
        slice_type: 'contact_form_veedoo',
      },
    };
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />',
});
_Default.storyName = '';
