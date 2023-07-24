import MyComponent from '../../../../slices/Tags';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Tags'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"tag_label":"look","tag_image":{"dimensions":{"width":3212,"height":3880},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6"}}],"primary":{},"id":"_Default","slice_type":"tags"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
