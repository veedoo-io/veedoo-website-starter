import MyComponent from '../../../../slices/FaqAccordion';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FaqAccordion'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"question":[{"type":"paragraph","text":"Anim excepteur ea magna occaecat anim duis excepteur minim pariatur ipsum elit.","spans":[]}],"answer":[{"type":"paragraph","text":"Veniam mollit ea dolore minim deserunt cupidatat aliqua. Ad incididunt aliquip do irure labore nulla. Fugiat pariatur ipsum voluptate laborum laboris voluptate ipsum ad.","spans":[]}],"background_color":"#efd867","text_color":"#59a34a"}],"primary":{"title":"friend","description":[{"type":"paragraph","text":"Et amet enim eu elit enim ullamco culpa dolor duis ex.","spans":[]}],"background_color":"#3323a4","primary_text_color":"#1b1685","secondary_text_color":"#7f1ec9"},"slice_type":"faq_accordion","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
