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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"social_media_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1"},"social_media_url":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"center":false,"title":[{"type":"paragraph","text":"Anim minim fugiat eiusmod exercitation esse fugiat sit. Proident tempor laboris laboris aute tempor est. Voluptate eu ut ipsum eu nisi pariatur labore aute consectetur ad consequat sint dolor esse.","spans":[]}],"title_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055"},"description":[{"type":"paragraph","text":"Officia sit quis voluptate enim et id dolore magna elit elit ex aliqua veniam elit do. Ullamco non exercitation reprehenderit. Excepteur laborum eiusmod proident ad tempor cillum culpa irure ut.","spans":[]}],"email_title":[{"type":"paragraph","text":"Adipisicing ipsum commodo ut labore mollit commodo sint qui quis ipsum. Velit culpa ipsum aute ullamco aute qui commodo et proident. Irure in occaecat cupidatat cillum sit velit nisi quis adipisicing aute laboris fugiat.","spans":[]}],"email_title_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e"},"email_content":[{"type":"paragraph","text":"Do consequat in anim cupidatat ut elit eu. Irure occaecat esse nostrud irure anim. Fugiat proident fugiat eiusmod occaecat et eiusmod est id.","spans":[]}],"social_media_title":[{"type":"paragraph","text":"Nostrud qui duis dolore consequat id.","spans":[]}],"social_media_title_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68"},"background_color":"#fffba4","text_color":"#f24965"},"slice_type":"contact_info","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
