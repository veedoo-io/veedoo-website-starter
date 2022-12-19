import MyComponent from '../../../../slices/ContactInfo';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ContactInfo'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading1","text":"Arrow","spans":[]}],"description":[{"type":"paragraph","text":"Pariatur pariatur id ullamco ex pariatur fugiat voluptate do reprehenderit et amet qui irure. Adipisicing duis consectetur ipsum consectetur sit amet ipsum nulla non est minim.","spans":[]}]},"slice_type":"contact_info","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
