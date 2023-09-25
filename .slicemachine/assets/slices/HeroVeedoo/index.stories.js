import MyComponent from '../../../../slices/HeroVeedoo';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HeroVeedoo'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":"service","intro_text":[{"type":"paragraph","text":"Elit adipisicing duis do adipisicing.","spans":[]}],"background_color":"#77c747","intro_text_color":"#9b81aa","margin_top":35,"margin_bottom":2},"id":"_Default","slice_type":"hero_veedoo"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
