import MyComponent from '../../../../slices/SocialFollowIcons';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SocialFollowIcons'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"social_icon_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b"},"social_url":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"alignment":"center","background_color":"#250034","margin_top":85,"margin_right":78,"margin_bottom":4,"margin_left":36},"slice_type":"social_follow_icons","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
