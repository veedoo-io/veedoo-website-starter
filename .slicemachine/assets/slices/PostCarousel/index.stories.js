import MyComponent from '../../../../slices/PostCarousel';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/PostCarousel'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"tags":{"id":"mock_document_id","link_type":"Document","type":"mock","tags":[],"lang":"en-us","slug":null,"first_publication_date":"1970-01-01T00:00:01+0000","last_publication_date":"1970-01-01T01:00:00+0000"},"categories":{"id":"mock_document_id","link_type":"Document","type":"mock","tags":[],"lang":"en-us","slug":null,"first_publication_date":"1970-01-01T00:00:01+0000","last_publication_date":"1970-01-01T01:00:00+0000"}}],"primary":{"subtitle":[{"type":"paragraph","text":"Anim ut eiusmod minim veniam commodo fugiat cupidatat. Aliqua Lorem nisi minim anim fugiat voluptate adipisicing ut deserunt consectetur ea sint ex.","spans":[]}],"title":[{"type":"paragraph","text":"Consequat reprehenderit voluptate cupidatat labore mollit consequat. Nulla dolore labore nulla exercitation amet tempor.","spans":[]}],"description":[{"type":"paragraph","text":"Sunt ut consectetur laboris nostrud commodo dolore velit reprehenderit duis labore occaecat occaecat dolore. Sint magna qui qui sunt magna amet ullamco laborum ut nostrud ipsum sit et. Ullamco nostrud voluptate labore est laborum aliqua officia irure proident eu laboris minim est.","spans":[]}],"text_color":"#fe2247","background_color":"#4abd98"},"slice_type":"post_carousel","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
