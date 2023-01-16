import MyComponent from '../../../../slices/TwoColumnTextBlock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TwoColumnTextBlock'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"first_column_rich_text":[{"type":"paragraph","text":"Proident dolor non occaecat adipisicing. Sunt consectetur commodo commodo consequat cupidatat non nisi proident ut pariatur tempor. Commodo do elit culpa velit reprehenderit aliquip dolor et quis ullamco anim dolore.","spans":[]}],"second_column_rich_text":[{"type":"paragraph","text":"Anim esse laborum pariatur ullamco aute ipsum.","spans":[]}],"text_size":6,"text_color":"#3b9f82","background_color":"#75112c","margin_top":25,"margin_right":31,"margin_bottom":54,"margin_left":68},"slice_type":"two_column_text_block","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
