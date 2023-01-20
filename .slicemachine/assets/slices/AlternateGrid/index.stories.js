import MyComponent from '../../../../slices/AlternateGrid';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/AlternateGrid'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"feature_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6"},"feature_title":"canal","feature_description":[{"type":"paragraph","text":"Ipsum occaecat commodo labore laborum mollit aliqua pariatur sunt elit labore aliqua enim in cillum.","spans":[]}]}],"primary":{"title":"solid","description":[{"type":"paragraph","text":"Laboris enim in qui aliquip aliqua dolore est. Sint quis sit nisi.","spans":[]}],"background_color":"#3b5d13","text_color":"#70cbe5","secondary_text_color":"#a27507"},"slice_type":"alternate_grid","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
