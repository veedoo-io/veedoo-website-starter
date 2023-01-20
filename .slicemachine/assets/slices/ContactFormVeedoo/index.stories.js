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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"mailto_email":"felt","image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a"},"form_title":"eye","description":[{"type":"paragraph","text":"Officia laborum quis aliquip tempor exercitation Lorem non magna laboris laborum nisi voluptate veniam cupidatat eu. Dolor labore elit amet laborum exercitation in sunt exercitation mollit commodo in nostrud anim.","spans":[]}],"name_title":"equal","name_placeholder":"wall","email_title":"habit","email_placeholder":"plastic","message_title":"me","message_placeholder":"related","button_text":"tribe","text_color":"#2f501c","background_color":"#82d56e","button_background_color":"#73a2b7","text_background_color":"#27eda7"},"slice_type":"contact_form_veedoo","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
