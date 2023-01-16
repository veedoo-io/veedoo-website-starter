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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Tempor veniam ullamco do proident voluptate ea exercitation excepteur qui ullamco. Nulla laboris occaecat commodo sunt duis consectetur excepteur est cillum aliqua amet pariatur eiusmod aliquip aute.","spans":[]}],"date":"2021-07-30","text_size":28,"text_color":"#157deb","background_color":"#af223a","margin_top":31,"margin_right":2,"margin_bottom":5,"margin_left":75},"slice_type":"title_with_date_and_share_icons","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
