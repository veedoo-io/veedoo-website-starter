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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"logo":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a"},"description":[{"type":"paragraph","text":"Nostrud voluptate elit anim ipsum reprehenderit in nisi labore. Excepteur nulla aliqua ea et eiusmod veniam duis exercitation adipisicing nulla irure labore quis id. Cupidatat officia laborum ut quis aliquip magna ipsum duis nulla ad labore amet amet.","spans":[]}],"link_text":"face","link":{"link_type":"Web","url":"http://google.com"}}],"primary":{"background_color":"#939efc"},"slice_type":"partner_logo_grid_with_description_text","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
