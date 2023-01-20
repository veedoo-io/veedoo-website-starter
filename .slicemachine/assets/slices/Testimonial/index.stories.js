import MyComponent from '../../../../slices/Testimonial';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Testimonial'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"full_name":"led","job_position":"operation","testimonial":[{"type":"paragraph","text":"Amet nulla amet ullamco ad et ex ipsum ad. Laboris culpa nostrud magna duis anim mollit consectetur nulla officia labore dolor voluptate amet. Pariatur sit laborum pariatur et fugiat mollit incididunt proident eu elit excepteur consectetur aliqua.","spans":[]}],"picture":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636"}}],"primary":{"title":[{"type":"paragraph","text":"Ea Lorem laborum dolor. Eu adipisicing culpa officia. Sint non Lorem mollit qui sit nisi quis do id non ea culpa ad.","spans":[]}],"title_color":"#670979","slice_background_color":"#4b617b"},"slice_type":"testimonial","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
