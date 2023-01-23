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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Et pariatur ut Lorem dolor est mollit irure quis sint voluptate mollit eiusmod sunt eiusmod.","spans":[]}],"title_alignment":"left","date":"2019-04-21","text_size":25,"text_color":"#9deec1","background_color":"#7b6c41","margin_top":18,"margin_right":72,"margin_bottom":45,"margin_left":91,"share_icons_background_color":"#0a9021","share_icon_color":"#f4efe1"},"slice_type":"title_with_date_and_share_icons","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
