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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"type":"double","color":"#1d9194","divider_width":93,"divider_height":77,"margin_top":79,"margin_bottom":23,"alignment":"right"},"id":"_Default","slice_type":"divider"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
