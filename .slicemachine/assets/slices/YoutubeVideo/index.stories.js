import MyComponent from '../../../../slices/YoutubeVideo';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/YoutubeVideo'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Commodo et dolore sint tempor consequat. Deserunt occaecat aliqua reprehenderit fugiat ullamco amet laborum ad cupidatat cillum dolore culpa.","spans":[]}],"description":[{"type":"paragraph","text":"Duis consequat deserunt ad consequat ullamco ullamco amet irure.","spans":[]}],"video_id":"firm","text_color":"#15722c","description_text_color":"#14a96b","background_color":"#1ceb9f"},"slice_type":"youtube_video","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''

export const _Horizontal = () => ({
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
      mock: {"variation":"horizontal","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Occaecat exercitation mollit consectetur reprehenderit. Anim velit pariatur adipisicing pariatur sunt adipisicing proident exercitation fugiat ipsum qui consectetur. Voluptate dolor velit tempor voluptate eiusmod deserunt dolor magna ullamco ad duis fugiat reprehenderit.","spans":[]}],"description":[{"type":"paragraph","text":"Ut quis laborum quis eiusmod pariatur dolor ex officia duis. Enim fugiat enim consequat sunt aute veniam laboris minim laboris ad.","spans":[]}],"video_id":"after","text_color":"#b934a3","description_text_color":"#0267f7","background_color":"#7d0334"},"slice_type":"youtube_video","id":"_Horizontal"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Horizontal.storyName = ''
