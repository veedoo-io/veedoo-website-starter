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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"social_icon_image":{"dimensions":{"width":6597,"height":4398},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f"},"social_url":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"alignment":"right","background_color":"#e2fb7a","margin_top":27,"margin_bottom":4,"social_icon_background":"#8760a6","radius":"50"},"id":"_Default","slice_type":"social_follow_icons"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
