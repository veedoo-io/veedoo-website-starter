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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Et laboris magna in reprehenderit exercitation cupidatat excepteur ipsum.","spans":[]}],"description":[{"type":"paragraph","text":"Id consectetur eu incididunt tempor id reprehenderit labore labore ad reprehenderit aliquip nostrud cupidatat. Laboris irure Lorem commodo Lorem aliquip proident commodo ullamco incididunt ullamco veniam aute ut commodo duis. Dolor fugiat sint irure occaecat ex labore eu velit eu velit occaecat consequat eu.","spans":[]}],"video_id":"easy","text_color":"#7eabd8","description_text_color":"#d9ff60","background_color":"#97189e","text_alignment":"center"},"id":"_Default","slice_type":"youtube_video"}
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
      mock: {"variation":"horizontal","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Culpa proident nulla aliqua eu esse. Cupidatat exercitation sit reprehenderit minim. Proident ut consequat laborum nisi aliqua et elit quis nostrud do esse deserunt.","spans":[]}],"description":[{"type":"paragraph","text":"Sunt exercitation incididunt mollit reprehenderit sit excepteur quis sit dolore ea ea eiusmod nulla deserunt.","spans":[]}],"video_id":"save","text_color":"#e80fe4","description_text_color":"#b279e3","background_color":"#844724"},"id":"_Horizontal","slice_type":"youtube_video"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Horizontal.storyName = ''
