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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Velit consequat sunt pariatur fugiat ex consequat cillum nisi eu fugiat.","spans":[]}],"text_alignment":"left","image":{"dimensions":{"width":3277,"height":4092},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055"},"text_color":"#624f7b","background_color":"#7b349e","text_size":46,"margin_top":50,"margin_right":43,"margin_bottom":62,"margin_left":33},"id":"_Default","slice_type":"title"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
