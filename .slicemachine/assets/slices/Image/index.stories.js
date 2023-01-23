import MyComponent from '../../../../slices/Image';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Image'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51"},"rounded":"radius 0","margin_top":27,"margin_right":54,"margin_bottom":7,"margin_left":42,"background_color":"#379e3d","wdith":84,"height":37,"alignment":"center"},"slice_type":"image","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
