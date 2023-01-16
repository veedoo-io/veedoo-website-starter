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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Occaecat ipsum id enim ullamco ad. Est cupidatat sit enim.","spans":[]}],"name":[{"type":"paragraph","text":"Labore voluptate nulla elit velit magna. Officia id dolore qui eu laborum qui irure aliquip veniam ipsum ea aliqua ullamco nisi enim. Dolore consectetur officia fugiat excepteur eiusmod reprehenderit veniam.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea"},"mp3_file":{"link_type":"Media","name":"mock","kind":"image","url":"https://source.unsplash.com/random","size":"10kB"}},"slice_type":"audio_player_with_image","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
