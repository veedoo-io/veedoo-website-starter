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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"menu_item_type":"Contacts","menu_text":"grown","menu_link":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"logo":{"dimensions":{"width":3810,"height":5715},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117"},"main_link_text":"tail","main_link_url":{"link_type":"Web","url":"https://prismic.io"},"background_color":"#8a497c","text_color":"#0e89a9","menu_label":"fewer"},"id":"_Default","slice_type":"header_veedoo"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
