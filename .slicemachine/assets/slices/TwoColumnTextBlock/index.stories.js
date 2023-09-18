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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"first_column_rich_text":[{"type":"paragraph","text":"Eu irure id mollit consequat consectetur laboris do ipsum proident aute velit cupidatat cupidatat anim. Ea ut consectetur dolore.","spans":[]}],"second_column_rich_text":[{"type":"paragraph","text":"Aute et culpa elit cillum in est minim.","spans":[]}],"text_color":"#0cb8db","background_color":"#57b9d1","margin_top":90,"margin_bottom":96},"id":"_Default","slice_type":"two_column_text_block"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
