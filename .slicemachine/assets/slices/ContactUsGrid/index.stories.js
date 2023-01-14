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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"social_media_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72"},"social_media_url":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"center":false,"title":[{"type":"paragraph","text":"Tempor dolor consequat eiusmod sint ut do tempor sit consectetur officia. Officia sit commodo pariatur culpa sunt fugiat ex aliqua irure.","spans":[]}],"title_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43"},"description":[{"type":"paragraph","text":"Consequat sit ut cupidatat ipsum deserunt et irure labore non velit fugiat commodo eu sint. Quis ex qui excepteur nisi. Ea officia ea mollit sit mollit commodo eiusmod incididunt laboris laboris est.","spans":[]}],"email_title":[{"type":"paragraph","text":"Adipisicing duis excepteur amet ut ut et occaecat fugiat do culpa laborum consectetur. Ex aliquip commodo qui anim reprehenderit nostrud adipisicing nostrud. Laborum elit incididunt reprehenderit adipisicing nostrud sunt irure consequat dolor ex incididunt laboris.","spans":[]}],"email_title_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"},"email_content":[{"type":"paragraph","text":"Voluptate proident tempor consequat reprehenderit aliquip exercitation id quis sit proident incididunt. Esse sit voluptate commodo ut non nostrud aliqua duis. Deserunt esse ut elit ullamco.","spans":[]}],"social_media_title":[{"type":"paragraph","text":"Est culpa elit non.","spans":[]}],"social_media_title_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"},"background_color":"#5c1c97","text_color":"#b54bd7"},"slice_type":"contact_info","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
