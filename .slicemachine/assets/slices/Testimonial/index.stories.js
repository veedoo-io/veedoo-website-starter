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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading1","text":"Morning","spans":[]}],"description":[{"type":"paragraph","text":"Officia aliqua proident exercitation do reprehenderit. Labore culpa occaecat enim ea et ut tempor dolor qui nulla qui eu nostrud nulla. Qui enim elit officia enim sint reprehenderit qui exercitation dolore ea sunt tempor.","spans":[]}]},"slice_type":"testimonial","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
