import MyComponent from '../../../../slices/RichText';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/RichText'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"rich_text":[{"type":"paragraph","text":"Esse eiusmod non mollit ad ea labore mollit do irure. Enim in dolore aute occaecat excepteur nostrud nulla Lorem Lorem Lorem dolor qui. Anim Lorem labore veniam aliquip duis fugiat ipsum sint cupidatat adipisicing occaecat dolor consectetur cillum deserunt.","spans":[]}],"text_color":"#decd3c","background_color":"#c37d98","center_text":false,"margin_top":93,"margin_right":37,"margin_bottom":57,"margin_left":13},"slice_type":"rich_text","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
