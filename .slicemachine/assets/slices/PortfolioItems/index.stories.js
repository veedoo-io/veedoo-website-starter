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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764"},"description":[{"type":"paragraph","text":"Amet anim excepteur elit esse minim ullamco eu aliquip eu. Nisi ea incididunt cupidatat ipsum exercitation exercitation nostrud pariatur minim est amet dolore veniam do. Est est adipisicing magna sunt.","spans":[]}],"url_label":"cotton","url":{"link_type":"Web","url":"https://prismic.io"},"background_color":"#604f15","text_color":"#3152b4"}],"primary":{"background_color":"#5dc586"},"slice_type":"portfolio_items","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
