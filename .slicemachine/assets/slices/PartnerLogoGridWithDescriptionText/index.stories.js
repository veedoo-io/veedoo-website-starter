import MyComponent from '../../../../slices/PartnerLogoGridWithDescriptionText';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/PartnerLogoGridWithDescriptionText'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"logo":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468"},"description":[{"type":"paragraph","text":"Reprehenderit tempor mollit minim sit nisi enim eiusmod sint mollit. Id labore enim exercitation sint et anim mollit anim duis pariatur occaecat aute adipisicing.","spans":[]}],"link_text":"morning","link":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"background_color":"#a5f079"},"slice_type":"partner_logo_grid_with_description_text","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
