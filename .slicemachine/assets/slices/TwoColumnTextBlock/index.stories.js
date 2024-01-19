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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"first_column_rich_text":[{"type":"paragraph","text":"Ullamco Lorem aliquip labore cupidatat reprehenderit labore voluptate laborum nulla dolore occaecat ut.","spans":[]}],"second_column_rich_text":[{"type":"paragraph","text":"Aute ipsum labore tempor cupidatat aute consectetur anim Lorem ullamco anim id velit.","spans":[]}],"text_color":"#0cb8db","background_color":"#57b9d1","margin_top":90,"margin_bottom":96},"id":"_Default","slice_type":"two_column_text_block"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
