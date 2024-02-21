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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"mailto_email":"represent","image":{"dimensions":{"width":4032,"height":3024},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1603899122724-98440dd9c400?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMzc0NjN8MHwxfHNlYXJjaHwyOHx8ZW1haWwlMjBsb2dvfGVufDB8fHx8MTY4MDIzMTM4Ng&ixlib=rb-4.0.3&q=85"},"form_title":[{"type":"paragraph","text":"Est elit aliquip irure non velit pariatur sint qui excepteur aliqua adipisicing ullamco mollit ut nisi. Magna occaecat est enim aliquip duis et sint incididunt culpa tempor.","spans":[]}],"description":[{"type":"paragraph","text":"Est aliquip aute nulla ex duis magna fugiat. Cillum velit magna qui ipsum consequat aute ea consectetur. Exercitation aute officia quis ullamco nostrud dolor qui commodo esse elit laboris ipsum in labore.","spans":[]}],"name_title":"until","name_placeholder":"Name","surname_label":"aloud","surname_placeholder":"horse","phone_number_label":"shoe","phone_number_placeholder":"star","email_title":"highway","email_placeholder":"example@gmail.com","message_title":"ants","message_placeholder":"Message","button_text":"Send","text_color":"#972ecb","background_color":"#c345b8","button_background_color":"#31bee2","text_background_color":"#d097d3","margin_top":42,"margin_bottom":24,"agreement_text":[{"type":"paragraph","text":"Ex minim tempor occaecat sit mollit do aliqua ipsum laborum. Reprehenderit cillum sit duis aute consequat laboris ea eu irure ea ex ex.","spans":[]}]},"id":"_Default","slice_type":"contact_form_veedoo"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
