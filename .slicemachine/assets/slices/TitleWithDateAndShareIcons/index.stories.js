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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Culpa ipsum non elit deserunt. Tempor aute velit eu irure in voluptate ipsum sint voluptate eiusmod cupidatat.","spans":[]}],"title_alignment":"left","date":"2012-06-15","text_size":39,"text_color":"#1851a8","background_color":"#22df64","margin_top":86,"margin_bottom":82,"share_icons_background_color":"#c9d251","share_icon_color":"#600155"},"id":"_Default","slice_type":"title_with_date_and_share_icons"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
