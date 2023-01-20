import MyComponent from '../../../../slices/AudioPlayerWithImage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/AudioPlayerWithImage'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Magna sint laborum ex eiusmod. Nisi duis enim culpa laborum cillum aliquip amet occaecat exercitation nostrud incididunt.","spans":[]}],"name":[{"type":"paragraph","text":"Culpa occaecat tempor ullamco adipisicing. Excepteur eiusmod do dolore labore pariatur aute adipisicing proident ullamco ea ullamco aliquip.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43"},"mp3_file":{"link_type":"Media","name":"mock","kind":"image","url":"https://source.unsplash.com/random","size":"10kB"}},"slice_type":"audio_player_with_image","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
