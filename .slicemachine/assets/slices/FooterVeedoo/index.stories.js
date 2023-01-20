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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"footer_flag":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117"}}],"primary":{"footer_logo":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6"},"footer_text":[{"type":"paragraph","text":"Incididunt aliquip officia sit et aute ipsum est ipsum.","spans":[]}],"background_color":"#3152de","text_color":"#24ed56"},"slice_type":"footer_veedoo","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
