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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Est non do voluptate ut nulla proident non laboris. Enim aliqua velit quis est deserunt ipsum duis. Laboris consectetur et dolor dolore consequat aute duis magna sint id.","spans":[]}],"description":[{"type":"paragraph","text":"Velit sunt voluptate pariatur velit elit duis ipsum aute cupidatat ex excepteur consequat proident.","spans":[]}],"video_id":"hay","text_color":"#ed73bd","description_text_color":"#277231","background_color":"#5df249"},"id":"_Default","slice_type":"youtube_video"}
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
      mock: {"variation":"horizontal","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Pariatur exercitation cupidatat mollit cupidatat aliquip et excepteur magna. Cillum nulla sint aliquip aliqua laborum do anim sunt dolore.","spans":[]}],"description":[{"type":"paragraph","text":"Aute quis nostrud nostrud exercitation anim nostrud reprehenderit ex adipisicing consequat velit ut ad aliqua. Labore anim adipisicing consectetur dolor anim.","spans":[]}],"video_id":"share","text_color":"#770ad3","description_text_color":"#1e10b3","background_color":"#685d3f"},"id":"_Horizontal","slice_type":"youtube_video"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Horizontal.storyName = ''
