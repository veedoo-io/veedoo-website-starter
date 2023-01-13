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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"rich_text":[{"type":"paragraph","text":"Duis qui laboris nisi excepteur deserunt deserunt minim veniam. Mollit laborum fugiat dolor quis deserunt. Aute culpa dolore esse elit sint est mollit aliqua voluptate fugiat.","spans":[]}],"text_color":"#820ee2","background_color":"#98d337","margin_top":10,"margin_right":54,"margin_bottom":27,"margin_left":14,"center_text":false},"slice_type":"rich_text","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
