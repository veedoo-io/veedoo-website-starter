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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"tags":{"id":"mock_document_id","link_type":"Document","type":"mock","tags":[],"lang":"en-us","slug":null,"first_publication_date":"1970-01-01T00:00:01+0000","last_publication_date":"1970-01-01T01:00:00+0000"},"categories":{"id":"mock_document_id","link_type":"Document","type":"mock","tags":[],"lang":"en-us","slug":null,"first_publication_date":"1970-01-01T00:00:01+0000","last_publication_date":"1970-01-01T01:00:00+0000"}}],"primary":{"subtitle":[{"type":"paragraph","text":"Aliquip officia dolor aliqua. Exercitation velit in ex eu aliqua do. Dolor mollit cillum ea qui ex consequat id.","spans":[]}],"title":[{"type":"paragraph","text":"Officia culpa eu pariatur eiusmod cillum sunt. Dolor amet ut incididunt occaecat cupidatat fugiat tempor culpa aliquip proident qui eu officia nisi do. Elit id irure quis commodo nostrud officia aliqua duis tempor officia cupidatat minim in.","spans":[]}],"description":[{"type":"paragraph","text":"Mollit nisi ea culpa pariatur amet amet ut laboris eiusmod ut.","spans":[]}],"text_color":"#ebc202","background_color":"#8a5282"},"id":"_Default","slice_type":"post_carousel"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
