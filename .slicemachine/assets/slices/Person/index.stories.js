import MyComponent from '../../../../slices/Person';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Person'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"person":{"id":"mock_document_id","link_type":"Document","type":"author","tags":[],"lang":"en-us","slug":null,"first_publication_date":"1970-01-01T00:00:01+0000","last_publication_date":"1970-01-01T01:00:00+0000"},"text_color":"#cd3ad3","secondary_text_color":"#17c344","background_color":"#8c3277","margin_top":80,"margin_right":1,"margin_bottom":13,"margin_left":76},"slice_type":"person","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
