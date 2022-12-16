import MyComponent from '../../../../slices/AlternateGrid';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/AlternateGrid'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"feature_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f"},"feature_title":"sound","feature_description":[{"type":"paragraph","text":"Pariatur Lorem proident ullamco sunt tempor magna magna et nostrud elit Lorem elit in consectetur.","spans":[]}]}],"primary":{"title":"society","description":[{"type":"paragraph","text":"Non enim pariatur deserunt aute ut sit amet cupidatat ut officia enim cillum.","spans":[]}],"background_color":"#1a05c2","text_color":"#e47d66"},"slice_type":"alternate_grid","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
