import MyComponent from '../../../../slices/TitleWithDateAndShareIcons';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TitleWithDateAndShareIcons'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Consectetur commodo anim nisi cillum culpa exercitation pariatur nisi. Occaecat Lorem proident ullamco aliqua excepteur ad cupidatat occaecat sint fugiat consequat enim elit fugiat do.","spans":[]}],"date":"2020-10-22","text_size":63,"text_color":"#dc9dc8","background_color":"#64a138","margin_top":47,"margin_right":47,"margin_bottom":71,"margin_left":45},"slice_type":"title_with_date_and_share_icons","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
