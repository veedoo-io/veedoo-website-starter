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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"image":{"dimensions":{"width":4000,"height":4000},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da"},"margin_top":59,"margin_bottom":19,"background_color":"#5806ec","rounded":"10","alignment":"center"},"id":"_Default","slice_type":"image"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
