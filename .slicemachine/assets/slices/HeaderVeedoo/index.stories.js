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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"menu_item_type":"Contacts","menu_text":"nervous","menu_link":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"logo":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8"},"main_link_text":"around","main_link_url":{"link_type":"Web","url":"https://prismic.io"},"background_color":"#685ea1","text_color":"#6b0b35","menu_label":"cotton"},"slice_type":"header_veedoo","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
