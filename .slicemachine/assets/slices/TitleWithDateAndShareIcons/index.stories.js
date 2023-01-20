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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Esse enim adipisicing commodo eiusmod proident dolor do reprehenderit quis laborum eiusmod minim cillum. Ad consectetur duis ad fugiat. Culpa velit incididunt sit reprehenderit sint velit.","spans":[]}],"date":"2020-01-27","text_size":97,"text_color":"#24f3cf","background_color":"#052df9","margin_top":65,"margin_right":50,"margin_bottom":41,"margin_left":76,"share_icons_background_color":"#0f144d","share_icon_color":"#28aa63"},"slice_type":"title_with_date_and_share_icons","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
