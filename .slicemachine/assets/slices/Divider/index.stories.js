import MyComponent from '../../../../slices/Divider';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Divider'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"type":"solid","color":"#2fedfc","divider_height":78,"margin_top":46,"margin_right":25,"margin_bottom":28,"margin_left":87,"rounded":false},"slice_type":"divider","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
