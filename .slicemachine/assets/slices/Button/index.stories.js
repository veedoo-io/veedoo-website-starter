import MyComponent from '../../../../slices/Button';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Button'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"button_text":"create","button_text_color":"#c89913","button_color":"#b6b416","margin_top":45,"margin_bottom":45,"alignment":"right","link":{"link_type":"Web","url":"http://twitter.com"}},"id":"_Default","slice_type":"button"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
