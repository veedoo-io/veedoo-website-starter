import MyComponent from '../../../../slices/HeaderVeedoo';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HeaderVeedoo'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"menu_item_type":"Menu","menu_text":"discover","menu_link":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"logo":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51"},"main_link_text":"ear","main_link_url":{"link_type":"Web","url":"https://prismic.io"},"background_color":"#957d0c","text_color":"#30e627"},"slice_type":"header_veedoo","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
