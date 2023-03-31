import MyComponent from '../../../../slices/ContactFormVeedoo';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ContactFormVeedoo'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {
        "variation":"default",
        "version":"sktwi1xtmkfgx8626",
        "items":[
           {

           }
        ],
        "primary":{
           "mailto_email":"felt",
           "image":{
              "dimensions":{
                 "width":60,
                 "height":60
              },
              "alt":null,
              "copyright":null,
              "url":"https://veedoo-website-starter.cdn.prismic.io/veedoo-website-starter/0574031c-1fa6-4e6a-8110-4c51f4f0c74d_Contact+us+form+mail+icon.svg"
           },
           "form_title":"Ready to Start?",
           "description":[
              {
                 "type":"paragraph",
                 "text":"Contact Us!",
                 "spans":[

                 ]
              }
           ],
           "name_title":"Your name:",
           "name_placeholder":"Name",
           "email_title":"Your email address:",
           "email_placeholder":"example@gmail.com",
           "message_title":"Message:",
           "message_placeholder":"Message",
           "button_text":"Send",
           "text_color":"#353C47",
           "background_color":"#FFFFFF",
           "button_background_color":"#F2776B",
           "text_background_color":"#FFFFFF"
        },
        "slice_type":"contact_form_veedoo",
        "id":"_Default"
     }

    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
