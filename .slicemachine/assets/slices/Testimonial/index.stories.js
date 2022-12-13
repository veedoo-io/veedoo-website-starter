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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"full_name":"naturally","job_position":"pleasant","testimonial":[{"type":"paragraph","text":"Reprehenderit eiusmod eu magna commodo ut tempor cupidatat quis enim non esse deserunt proident. Do consequat nisi dolore labore culpa adipisicing culpa anim sit commodo qui anim exercitation.","spans":[]}]}],"primary":{"title":[{"type":"paragraph","text":"Nostrud fugiat nisi est velit aliquip commodo. Laborum laborum qui minim ad incididunt do.","spans":[]}],"title_color":"#802932","slice_background_color":"#56afea"},"slice_type":"testimonial","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
