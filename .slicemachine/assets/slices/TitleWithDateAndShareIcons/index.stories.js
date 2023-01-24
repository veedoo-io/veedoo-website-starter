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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Commodo elit cupidatat anim et in pariatur Lorem sint quis. Ipsum tempor eu aute sunt nisi pariatur consectetur est. Culpa id in cupidatat.","spans":[]}],"title_alignment":"center","date":"2016-09-30","text_size":15,"text_color":"#3a1a58","background_color":"#0710da","margin_top":35,"margin_right":90,"margin_bottom":59,"margin_left":59,"share_icons_background_color":"#5864fb","share_icon_color":"#e044d9"},"slice_type":"title_with_date_and_share_icons","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
