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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"footer_flag":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e"}}],"primary":{"footer_logo":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a"},"footer_text":[{"type":"paragraph","text":"Nisi quis est ut ut consectetur eiusmod consequat non proident nostrud in aliqua do.","spans":[]}],"background_color":"#e03f06","text_color":"#520731"},"slice_type":"footer_veedoo","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
