import MyComponent from '../../../../slices/Statistics';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Statistics'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"number":[{"type":"paragraph","text":"Amet veniam esse incididunt. Sit dolor deserunt deserunt nisi ex magna occaecat et.","spans":[]}],"description":[{"type":"paragraph","text":"Aliquip amet reprehenderit et nostrud deserunt quis culpa anim excepteur minim. Ea officia culpa consequat cupidatat incididunt fugiat aliqua duis.","spans":[]}],"icon":{"dimensions":{"width":3560,"height":5340},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b"}}],"primary":{"background_color":"#bbce7e","text_color":"#b2d923","margin_top":32,"margin_bottom":42},"id":"_Default","slice_type":"statistics"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
