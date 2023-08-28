import MyComponent from '../../../../slices/CallToActionWithImage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CallToActionWithImage'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"image":{"dimensions":{"width":4024,"height":4024},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43"},"title":[{"type":"heading1","text":"Suggest","spans":[]}],"description":[{"type":"paragraph","text":"Laboris irure occaecat labore dolore ipsum dolore enim cupidatat excepteur culpa. Culpa occaecat voluptate mollit est enim Lorem commodo sint esse. Excepteur adipisicing ad minim.","spans":[]}],"backgroundcolor":"#09c7b8","button_text":"increase","button_url":{"link_type":"Web","url":"https://prismic.io"},"button_color":"#e45781","button_text_color":"#59ea6d","margin_top":91,"margin_bottom":57,"text_alignment":"center"},"id":"_Default","slice_type":"call_to_action_with_image"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
