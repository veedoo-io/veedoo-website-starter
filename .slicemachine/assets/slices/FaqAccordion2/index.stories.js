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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"question":[{"type":"paragraph","text":"Cupidatat irure pariatur quis ad consequat commodo consequat voluptate. Voluptate labore dolor nostrud et anim.","spans":[]}],"answer":[{"type":"paragraph","text":"Ipsum occaecat anim sint mollit. Minim nulla officia quis ea exercitation enim minim magna nostrud do. Deserunt dolor fugiat est excepteur proident laboris nisi veniam non magna aliquip voluptate.","spans":[]}],"background_color":"#ffef42","question_text_color":"#39ea4d","answer_text_color":"#bd4057"}],"primary":{"title":[{"type":"paragraph","text":"Ullamco veniam aliquip id incididunt non cupidatat incididunt eiusmod eiusmod. Ex anim ullamco est nostrud proident sunt ipsum nisi consequat laboris mollit minim ea.","spans":[]}],"background_color":"#cb5697","image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88"},"title_color":"#f04c26","max_width":93},"slice_type":"faq_accordion2","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
