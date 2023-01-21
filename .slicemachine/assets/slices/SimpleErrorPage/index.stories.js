import MyComponent from '../../../../slices/SimpleErrorPage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SimpleErrorPage'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"error_title":[{"type":"paragraph","text":"Consequat id veniam consectetur qui mollit. Nulla aliquip duis mollit minim officia laborum.","spans":[]}],"title_color":"#55723e","message":[{"type":"paragraph","text":"Ullamco est voluptate sunt laborum eiusmod.","spans":[]}],"message_text_color":"#3af29c","background_color":"#297f71","go_home_button_text":"ate","go_home_button_text_color":"#f7e544","go_home_button_background_color":"#18ea89","error_code_color":"#a43a5c"},"slice_type":"simple_error_page","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
