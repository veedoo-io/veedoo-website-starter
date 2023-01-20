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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"social_media_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0"},"social_media_url":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"center":false,"title":[{"type":"paragraph","text":"Dolore consectetur esse deserunt quis nisi proident minim irure exercitation deserunt excepteur. Culpa sunt ad culpa sint cillum elit reprehenderit excepteur et sunt consequat nisi eiusmod reprehenderit esse.","spans":[]}],"title_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8"},"description":[{"type":"paragraph","text":"Anim eiusmod adipisicing qui esse duis est velit incididunt id eiusmod incididunt magna labore cupidatat.","spans":[]}],"email_title":[{"type":"paragraph","text":"Aliquip excepteur deserunt non tempor in culpa eiusmod anim voluptate qui quis deserunt ea cupidatat magna. Qui quis adipisicing eiusmod anim incididunt esse velit occaecat officia sunt Lorem aliqua sint occaecat eu.","spans":[]}],"email_title_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72"},"email_content":[{"type":"paragraph","text":"Cillum cillum Lorem anim minim minim. Veniam officia sint dolore pariatur.","spans":[]}],"social_media_title":[{"type":"paragraph","text":"Ipsum do sint dolore cillum cupidatat ipsum dolor minim exercitation amet esse do consequat. Proident mollit sunt nisi aute magna magna culpa.","spans":[]}],"social_media_title_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117"},"background_color":"#0adfbf","text_color":"#b4de99"},"slice_type":"contact_info","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
