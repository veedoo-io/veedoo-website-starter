import MyComponent from '../../../../slices/CtaWithBackgroundImage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CtaWithBackgroundImage'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Do cillum irure duis. Aute id pariatur veniam aliqua magna cupidatat irure. Veniam eu veniam nulla quis fugiat veniam aliqua nulla.","spans":[]}],"description":[{"type":"paragraph","text":"Aute velit ea exercitation Lorem sunt esse esse.","spans":[]}],"call_to_action":"color","button_url":{"link_type":"Web","url":"http://google.com"},"background_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1571126770897-2d612d1f7b89"},"text_color":"#310c87","button_text_color":"#b9fddb","button_background_color":"#0dfb1f"},"slice_type":"cta_with_background_image","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
