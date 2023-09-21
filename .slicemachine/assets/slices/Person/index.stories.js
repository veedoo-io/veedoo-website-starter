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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"person":{"id":"mock_document_id","link_type":"Document","type":"author","tags":[],"lang":"en-us","slug":null,"first_publication_date":"1970-01-01T00:00:01+0000","last_publication_date":"1970-01-01T01:00:00+0000"}}],"primary":{"background_color":"#1848d0","card_backgroundcolor":"#9e1b13","name_text_color":"#66189a","job_text_color":"#b7e02b","description_text_color":"#6af761","social_icons_color":"#625d1a","margin_top":90,"margin_bottom":19},"id":"_Default","slice_type":"person"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
