import MyComponent from '../../../../slices/LogoGrid';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/LogoGrid'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"image":{"dimensions":{"width":4172,"height":4000},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764"},"link":{"link_type":"Web","url":"http://google.com"}}],"primary":{"margin_top":10,"margin_bottom":45},"id":"_Default","slice_type":"logo_grid"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
