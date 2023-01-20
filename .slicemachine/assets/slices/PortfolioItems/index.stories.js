import MyComponent from '../../../../slices/PortfolioItems';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/PortfolioItems'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43"},"description":[{"type":"paragraph","text":"Ad qui non nulla magna.","spans":[]}],"url_label":"through","url":{"link_type":"Web","url":"http://twitter.com"},"background_color":"#991c5f","text_color":"#8ca060"}],"primary":{"background_color":"#98ffa6"},"slice_type":"portfolio_items","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
