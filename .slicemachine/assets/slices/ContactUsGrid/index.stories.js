import MyComponent from '../../../../slices/ContactUsGrid';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ContactUsGrid'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"title":[{"type":"paragraph","text":"Ea fugiat sint nulla do quis minim adipisicing ad proident officia labore do do. Cupidatat qui nostrud enim qui ea sit qui esse elit eiusmod in do. Duis ea quis incididunt deserunt occaecat dolor non cupidatat quis aute proident.","spans":[]}],"description":[{"type":"paragraph","text":"Tempor cupidatat qui ex amet proident tempor sit nulla tempor sit nisi.","spans":[]}]}],"primary":{"background_color":"#f39915","text_color":"#3bddb4","social_media_title":[{"type":"paragraph","text":"Irure magna aliquip tempor laboris pariatur enim reprehenderit proident aliquip in non. Irure adipisicing dolore culpa. Adipisicing duis est officia nisi magna irure duis.","spans":[]}],"instagram":{"dimensions":{"width":5000,"height":4613},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea"},"instagram_link":{"link_type":"Web","url":"https://slicemachine.dev"},"facebook":{"dimensions":{"width":5616,"height":3744},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1"},"facebook_link":{"link_type":"Web","url":"https://slicemachine.dev"},"twitter":{"dimensions":{"width":4380,"height":2895},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db"},"twitter_link":{"link_type":"Web","url":"http://twitter.com"},"linkedin":{"dimensions":{"width":4480,"height":4480},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e"},"linkedin_link":{"link_type":"Web","url":"http://google.com"}},"id":"_Default","slice_type":"contact_info"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
