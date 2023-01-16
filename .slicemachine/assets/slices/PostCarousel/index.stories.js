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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"tags":{"id":"mock_document_id","link_type":"Document","type":"mock","tags":[],"lang":"en-us","slug":null,"first_publication_date":"1970-01-01T00:00:01+0000","last_publication_date":"1970-01-01T01:00:00+0000"},"categories":{"id":"mock_document_id","link_type":"Document","type":"mock","tags":[],"lang":"en-us","slug":null,"first_publication_date":"1970-01-01T00:00:01+0000","last_publication_date":"1970-01-01T01:00:00+0000"}}],"primary":{"subtitle":[{"type":"paragraph","text":"Ipsum in aliquip aute nisi duis minim dolor sunt. Magna dolor et elit nulla labore ut amet Lorem dolore irure cupidatat proident consectetur adipisicing. Laborum tempor ipsum ea aliqua quis proident culpa nisi.","spans":[]}],"title":[{"type":"paragraph","text":"In consectetur ipsum aliquip sint dolor ex velit dolore aliquip velit amet.","spans":[]}],"description":[{"type":"paragraph","text":"Elit pariatur ullamco officia laborum minim fugiat aliquip fugiat.","spans":[]}],"text_color":"#1c0525","background_color":"#af5c74"},"slice_type":"post_carousel","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
