import MyComponent from '../../../../slices/FaqAccordion2';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FaqAccordion2'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"question":[{"type":"paragraph","text":"Non amet laboris duis labore aliquip id deserunt eiusmod incididunt est do eu. Laborum aliqua pariatur reprehenderit laborum do adipisicing labore incididunt minim id officia nisi in. Sit exercitation amet nulla irure excepteur est adipisicing est cillum irure dolor in et.","spans":[]}],"answer":[{"type":"paragraph","text":"Duis magna laboris sit ut anim do dolor ad consectetur culpa nulla.","spans":[]}],"background_color":"#355224","question_text_color":"#c9080e","answer_text_color":"#475925"}],"primary":{"title":[{"type":"paragraph","text":"Commodo duis laborum ut do ut ea sunt qui id Lorem magna eu consequat quis. Nulla cillum sunt consectetur.","spans":[]}],"background_color":"#a077c8","image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef"},"title_color":"#c78fbb","max_width":31},"slice_type":"faq_accordion2","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''