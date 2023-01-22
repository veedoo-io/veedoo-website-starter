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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"person":{"id":"mock_document_id","link_type":"Document","type":"author","tags":[],"lang":"en-us","slug":null,"first_publication_date":"1970-01-01T00:00:01+0000","last_publication_date":"1970-01-01T01:00:00+0000"}}],"primary":{"background_color":"#814fb7","card_backgroundcolor":"#bd61a9","name_text_color":"#7c168e","job_text_color":"#ce8e01","description_text_color":"#5e7ac8","social_icons_color":"#460946","margin_top":70,"margin_right":60,"margin_bottom":24,"margin_left":47},"slice_type":"person","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
