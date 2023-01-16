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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Tempor Lorem veniam proident et voluptate nulla dolor ullamco dolore laborum. Cupidatat est deserunt officia proident consectetur.","spans":[]}],"text_alignment":"left","image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1606248897732-2c5ffe759c04"},"text_color":"#f8e0d5","background_color":"#04018f","text_size":10,"margin_top":34,"margin_right":37,"margin_bottom":43,"margin_left":30},"slice_type":"title","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
