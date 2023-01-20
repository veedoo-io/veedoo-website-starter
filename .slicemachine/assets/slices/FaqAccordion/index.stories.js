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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"question":[{"type":"paragraph","text":"Lorem labore ad deserunt adipisicing.","spans":[]}],"answer":[{"type":"paragraph","text":"Minim consectetur qui consectetur esse tempor reprehenderit veniam id veniam sunt sit mollit.","spans":[]}],"background_color":"#af5ddd","text_color":"#139a3d","answer_text_color":"#662491"}],"primary":{"title":"whale","description":[{"type":"paragraph","text":"Dolore veniam sint dolore eiusmod cupidatat eiusmod aliqua ullamco sint minim proident aute qui aliqua.","spans":[]}],"background_color":"#aefb9d","primary_text_color":"#fea615","secondary_text_color":"#3e86fb","max_width":23},"slice_type":"faq_accordion","id":"_Default"}
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
      mock: {"variation":"withImage","version":"sktwi1xtmkfgx8626","items":[{"question":[{"type":"paragraph","text":"Sint eu officia aliqua mollit incididunt sit aliqua adipisicing nostrud. Ex magna voluptate occaecat voluptate aute cillum aliqua laborum. Est officia consequat mollit dolor reprehenderit incididunt id sit tempor aliqua veniam anim culpa ex pariatur.","spans":[]}],"answer":[{"type":"paragraph","text":"Labore cupidatat id amet dolore ipsum ullamco laboris qui enim aliquip excepteur dolor laborum nulla. Minim consequat velit excepteur cupidatat excepteur nulla officia. Anim magna non nisi occaecat.","spans":[]}],"background_color":"#2043c9","text_color":"#c7ee43","answer_text_color":"#abfce9"}],"primary":{"title":"can","description":[{"type":"paragraph","text":"Tempor mollit sunt deserunt eu est magna.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa"},"background_color":"#13d6c6","primary_text_color":"#5d9a7a","secondary_text_color":"#9388f6","max_width":41},"slice_type":"faq_accordion","id":"_WithImage"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_WithImage.storyName = ''

export const _WithAnswerImage = () => ({
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
      mock: {"variation":"withAnswerImage","version":"sktwi1xtmkfgx8626","items":[{"question":[{"type":"paragraph","text":"Pariatur adipisicing id deserunt quis labore.","spans":[]}],"answer":[{"type":"paragraph","text":"Eu velit do et elit minim amet esse ex qui. Deserunt irure aliquip voluptate tempor do officia dolor dolor aliqua proident adipisicing. Veniam nisi incididunt id dolor voluptate cillum reprehenderit nulla sit occaecat irure adipisicing exercitation occaecat proident.","spans":[]}],"background_color":"#f0d4d3","text_color":"#f8cd97","answer_text_color":"#51be95","image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1"}}],"primary":{"title":"amount","description":[{"type":"paragraph","text":"Quis anim Lorem laborum exercitation labore in voluptate dolore do ex. Anim irure exercitation sit deserunt qui eu minim do est Lorem. Ea quis occaecat tempor dolore amet consectetur aute ut.","spans":[]}],"background_color":"#df8f71","primary_text_color":"#7e1956","secondary_text_color":"#6eebc2","max_width":41},"slice_type":"faq_accordion","id":"_WithAnswerImage"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_WithAnswerImage.storyName = ''
