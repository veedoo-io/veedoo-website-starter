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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"rich_text":[{"type":"paragraph","text":"Elit eu in velit quis dolor fugiat dolore id ea irure aliquip. Excepteur commodo veniam incididunt consectetur adipisicing duis. Adipisicing ea excepteur aliqua ut dolore in nostrud consequat consectetur ea in voluptate consectetur culpa.","spans":[]}],"text_color":"#08cb4f","background_color":"#a4d727","margin_top":47,"margin_right":85,"margin_bottom":83,"margin_left":14,"center_text":false},"slice_type":"rich_text","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
