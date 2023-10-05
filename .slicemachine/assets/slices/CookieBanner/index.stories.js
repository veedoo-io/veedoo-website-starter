import MyComponent from '../../../../slices/CookieBanner';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CookieBanner'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Do proident est adipisicing quis velit ad sit esse aliqua enim proident do deserunt sunt fugiat.","spans":[]}],"description":[{"type":"paragraph","text":"Consequat id ullamco sint adipisicing cupidatat nulla magna duis occaecat. Ut ea consectetur cupidatat sint ea laborum eu labore ex voluptate consectetur.","spans":[]}],"image":{"dimensions":{"width":4016,"height":6016},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482"},"button_text":"contrast","button_color":"#74624f","background_color":"#9fc118","button_text_color":"#2e1ae2","text_color":"#242eb9"},"id":"_Default","slice_type":"cookie_banner"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
