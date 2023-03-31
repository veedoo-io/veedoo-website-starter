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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"rich_text":[{"type":"paragraph","text":"Ullamco eiusmod amet ullamco qui minim sunt. Amet laborum proident aliquip commodo adipisicing ipsum quis in et. Incididunt occaecat ex culpa proident ipsum commodo Lorem amet.","spans":[]}],"text_color":"#585f88","background_color":"#1f1d57","center_text":true,"margin_top":93,"margin_right":64,"margin_bottom":19,"margin_left":71},"id":"_Default","slice_type":"rich_text"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
