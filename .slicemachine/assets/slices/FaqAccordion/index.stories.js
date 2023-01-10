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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"question":[{"type":"paragraph","text":"Reprehenderit aliqua cillum est. Quis esse et veniam ea nulla ipsum aute cillum veniam excepteur anim consectetur minim amet.","spans":[]}],"answer":[{"type":"paragraph","text":"Adipisicing sint Lorem commodo irure ad ea sint duis anim ipsum incididunt ea quis magna ullamco.","spans":[]}],"background_color":"#532249","text_color":"#47da50","answer_text_color":"#0c2aab"}],"primary":{"title":"direction","description":[{"type":"paragraph","text":"Eiusmod elit sint magna excepteur excepteur proident esse irure.","spans":[]}],"background_color":"#912407","primary_text_color":"#e76c5d","secondary_text_color":"#c2549e","max_width":99},"slice_type":"faq_accordion","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''

export const _WithImage = () => ({
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
      mock: {"variation":"withImage","version":"sktwi1xtmkfgx8626","items":[{"question":[{"type":"paragraph","text":"Consectetur dolore eiusmod do magna laboris duis sunt labore elit adipisicing nulla sint ad laborum.","spans":[]}],"answer":[{"type":"paragraph","text":"Qui cillum commodo laboris proident proident exercitation ullamco tempor. Ea do ad proident tempor ipsum laborum occaecat. Aliquip ipsum deserunt cupidatat aliquip duis officia consectetur eiusmod irure ad officia.","spans":[]}],"background_color":"#768bf3","text_color":"#b718d8","answer_text_color":"#b74e54"}],"primary":{"title":"crack","description":[{"type":"paragraph","text":"Mollit nostrud cillum dolor irure dolore qui consectetur cillum pariatur anim sunt ea id. Enim ipsum id elit quis cillum dolor in adipisicing.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055"},"background_color":"#eff733","primary_text_color":"#95d47e","secondary_text_color":"#7c46d4","max_width":73},"slice_type":"faq_accordion","id":"_WithImage"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_WithImage.storyName = ''
