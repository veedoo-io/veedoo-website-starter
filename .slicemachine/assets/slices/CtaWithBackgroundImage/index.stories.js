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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Excepteur reprehenderit nulla ea eu.","spans":[]}],"description":[{"type":"paragraph","text":"Dolore veniam et quis laboris aliquip labore quis ad amet. Ut id id magna ea adipisicing nulla irure voluptate in ullamco laborum aliqua.","spans":[]}],"call_to_action":"definition","button_url":{"link_type":"Web","url":"http://google.com"},"background_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db"},"text_color":"#32eb14","button_text_color":"#fb8dc5","button_background_color":"#5e7bc2"},"slice_type":"cta_with_background_image","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
