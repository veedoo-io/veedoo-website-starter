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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Officia in veniam occaecat minim sint. Mollit est ad amet adipisicing officia aute ex esse amet nisi esse sint.","spans":[]}],"name":[{"type":"paragraph","text":"Id duis ex officia laborum aliqua occaecat in. Nisi aliquip dolore sint eu eu. Exercitation in duis cillum cillum fugiat anim tempor.","spans":[]}],"image":{"dimensions":{"width":6000,"height":4000},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f"},"mp3_file":{"link_type":"Media","name":"mock","kind":"image","url":"https://source.unsplash.com/random","size":"10kB"}},"id":"_Default","slice_type":"audio_player_with_image"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
