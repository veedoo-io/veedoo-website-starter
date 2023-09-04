import MyComponent from '../../../../slices/ImageSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ImageSlice'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"image":{"dimensions":{"width":4000,"height":4000},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1606248897732-2c5ffe759c04"},"rounded":"radius 20","margin_top":76,"margin_bottom":58,"background_color":"#b08286","alignment":"left"},"id":"_Default","slice_type":"image"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
