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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"full_name":"importance","job_position":"loud","testimonial":[{"type":"paragraph","text":"Ipsum esse minim mollit anim magna dolor enim est qui consectetur tempor voluptate deserunt culpa. Veniam amet qui commodo in fugiat ad aute deserunt commodo cupidatat irure do nostrud eiusmod nulla.","spans":[]}]}],"primary":{"title":[{"type":"paragraph","text":"Voluptate reprehenderit dolor eiusmod ut. Proident tempor laboris in eiusmod commodo voluptate. Amet qui sint dolore laborum sunt laboris velit deserunt labore magna minim dolore minim.","spans":[]}],"title_color":"#4742fc","slice_background_color":"#6914be"},"slice_type":"testimonial","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
