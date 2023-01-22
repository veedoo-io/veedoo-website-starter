import MyComponent from '../../../../slices/PageNotFound1';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/PageNotFound1'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Exercitation aute cupidatat dolor irure consequat adipisicing pariatur ullamco ullamco pariatur proident sunt occaecat. Excepteur adipisicing laborum quis eu consequat aute pariatur eiusmod quis non Lorem officia tempor consectetur qui.","spans":[]}],"title_color":"#0e8560","description":[{"type":"paragraph","text":"Velit aliqua dolor cupidatat ullamco culpa non fugiat in do occaecat. Non minim amet nisi exercitation duis consectetur sunt aute enim sint nostrud. Amet mollit officia veniam consectetur quis aliqua nulla est eiusmod.","spans":[]}],"message_background_color":"#52267f","background_color":"#bb3570","go_home_button_text":"largest","go_home_button_text_color":"#c32525","go_home_button_background_color":"#8349e7","error_code_color":"#2ecae5"},"slice_type":"page_not_found1","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''