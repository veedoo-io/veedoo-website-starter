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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"first_column_rich_text":[{"type":"paragraph","text":"Est adipisicing amet duis tempor voluptate occaecat do commodo voluptate et veniam culpa elit sint. Et quis consequat laborum exercitation dolore consectetur ad.","spans":[]}],"second_column_rich_text":[{"type":"paragraph","text":"Sint fugiat aliqua eiusmod sit in est deserunt tempor. Consequat non elit consequat aliqua proident irure ut labore dolore incididunt aliqua esse.","spans":[]}],"text_size":68,"text_color":"#10053c","background_color":"#5ed2cd","margin_top":61,"margin_right":0,"margin_bottom":44,"margin_left":24},"slice_type":"two_column_text_block","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
