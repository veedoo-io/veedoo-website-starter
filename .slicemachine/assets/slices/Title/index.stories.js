import MyComponent from '../../../../slices/Title';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Title'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Irure incididunt consequat et.","spans":[]}],"text_alignment":"left","image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055"},"text_color":"#cbf9b4","background_color":"#b79157","text_size":16,"margin_top":83,"margin_right":86,"margin_bottom":22,"margin_left":4},"slice_type":"title","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
