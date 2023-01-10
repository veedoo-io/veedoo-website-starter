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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"question":[{"type":"paragraph","text":"Duis officia minim deserunt cupidatat aliqua magna sit aliquip nulla. Exercitation consequat cillum dolore. Labore aliquip non et enim ea irure dolor in sint consequat non est nulla.","spans":[]}],"answer":[{"type":"paragraph","text":"Voluptate velit tempor nostrud veniam aute dolor elit. Adipisicing anim amet ad ea dolore adipisicing elit nisi laborum cillum aute nulla. Nostrud mollit mollit sunt Lorem in nostrud duis amet.","spans":[]}],"background_color":"#78ace8","text_color":"#7420e7","answer_text_color":"#ea5b09"}],"primary":{"title":"chamber","description":[{"type":"paragraph","text":"Nisi quis id id sint enim et aliqua.","spans":[]}],"background_color":"#82c593","primary_text_color":"#ebde62","secondary_text_color":"#752246","max_width":79},"slice_type":"faq_accordion","id":"_Default"}
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
      mock: {"variation":"withImage","version":"sktwi1xtmkfgx8626","items":[{"question":[{"type":"paragraph","text":"Anim fugiat deserunt reprehenderit adipisicing quis nostrud proident pariatur officia ipsum ipsum velit dolor. Ipsum est qui aliqua sunt incididunt irure do sint in.","spans":[]}],"answer":[{"type":"paragraph","text":"Cupidatat nisi proident laborum nostrud. Cillum ex enim dolore amet nulla minim mollit dolor labore duis est.","spans":[]}],"background_color":"#cd70d9","text_color":"#5e61e4","answer_text_color":"#629dee"}],"primary":{"title":"silence","description":[{"type":"paragraph","text":"Culpa aute exercitation aliquip reprehenderit officia duis est nulla anim dolore nulla anim qui quis ipsum. Qui consectetur reprehenderit Lorem quis officia sint duis. Reprehenderit cillum culpa et dolore adipisicing laboris ea fugiat aute.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0"},"background_color":"#79292e","primary_text_color":"#6b2d0b","secondary_text_color":"#d64c1c","max_width":32},"slice_type":"faq_accordion","id":"_WithImage"}
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
      mock: {"variation":"withAnswerImage","version":"sktwi1xtmkfgx8626","items":[{"question":[{"type":"paragraph","text":"Ipsum consequat aliqua consectetur est deserunt amet non. Sunt dolor minim ipsum esse non amet nostrud consectetur proident aliquip. Enim irure pariatur in dolore adipisicing dolor veniam amet ex commodo deserunt dolore laboris irure id.","spans":[]}],"answer":[{"type":"paragraph","text":"Aliqua reprehenderit culpa veniam.","spans":[]}],"background_color":"#61ab38","text_color":"#0983c7","answer_text_color":"#19aae5","image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117"}}],"primary":{"title":"cat","description":[{"type":"paragraph","text":"Amet aliquip culpa exercitation consectetur minim culpa occaecat. Quis tempor sint officia dolor sit ea nulla cillum commodo elit Lorem ullamco pariatur labore.","spans":[]}],"background_color":"#35c085","primary_text_color":"#1e72bd","secondary_text_color":"#8566dd","max_width":13},"slice_type":"faq_accordion","id":"_WithAnswerImage"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_WithAnswerImage.storyName = ''
