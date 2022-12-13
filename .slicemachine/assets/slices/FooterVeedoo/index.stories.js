import MyComponent from '../../../../slices/FooterVeedoo';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FooterVeedoo'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"footer_flag":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c"}}],"primary":{"footer_logo":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085"},"footer_text":[{"type":"paragraph","text":"Aute quis mollit do culpa consequat est est consequat non ut commodo velit ad.","spans":[]}]},"slice_type":"footer_veedoo","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
