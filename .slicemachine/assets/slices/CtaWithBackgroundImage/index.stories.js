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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Fugiat esse in commodo.","spans":[]}],"description":[{"type":"paragraph","text":"Nulla nisi veniam laboris labore quis sint cupidatat anim anim exercitation. Esse quis adipisicing enim cillum sit laboris in aliquip anim eiusmod magna dolor exercitation.","spans":[]}],"call_to_action":"pride","button_url":{"link_type":"Web","url":"http://google.com"},"background_image":{"dimensions":{"width":4172,"height":4000},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764"},"background_color":"#d905d5","text_color":"#cb5830","button_text_color":"#2be513","button_background_color":"#19adba","title_color":"#7c0684","text_alignment":"center"},"id":"_Default","slice_type":"cta_with_background_image"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
