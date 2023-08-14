import MyComponent from '../../../../slices/AtomTags';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/AtomTags'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"tag_label":"immediately","tag_image":{"dimensions":{"width":5000,"height":4613},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea"}}],"primary":{"margin_top":52,"margin_bottom":46},"id":"_Default","slice_type":"atom_tags"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
