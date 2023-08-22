import MyComponent from '../../../../slices/Title';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Title'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Aliquip labore aliquip culpa aliqua ut adipisicing fugiat eu pariatur nostrud sunt et. Sunt velit do qui consectetur sit qui deserunt exercitation consequat excepteur quis voluptate nisi Lorem. Deserunt est duis sint.","spans":[]}],"center_text":true,"text_color":"#908e2b","background_color":"#d25748","margin_top":7,"margin_bottom":20},"id":"_Default","slice_type":"title"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
