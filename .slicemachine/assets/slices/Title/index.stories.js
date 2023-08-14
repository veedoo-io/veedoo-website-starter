import MyComponent from '../../../../slices/Title';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Title'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Ipsum culpa nostrud ex anim consectetur dolore cillum occaecat dolor consequat laborum officia reprehenderit ad.","spans":[]}],"text_alignment":"left","text_color":"#624f7b","background_color":"#7b349e","margin_top":50,"margin_right":43,"margin_bottom":62,"margin_left":33},"id":"_Default","slice_type":"title"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
