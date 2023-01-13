import MyComponent from '../../../../slices/PostListing';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/PostListing'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"tags":{"id":"mock_document_id","link_type":"Document","type":"mock","tags":[],"lang":"en-us","slug":null,"first_publication_date":"1970-01-01T00:00:01+0000","last_publication_date":"1970-01-01T01:00:00+0000"},"categories":{"id":"mock_document_id","link_type":"Document","type":"mock","tags":[],"lang":"en-us","slug":null,"first_publication_date":"1970-01-01T00:00:01+0000","last_publication_date":"1970-01-01T01:00:00+0000"}}],"primary":{"text_color":"#ffbde9","secondary_text_color":"#7c4c7d","background_color":"#56519a"},"slice_type":"post_listing","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
