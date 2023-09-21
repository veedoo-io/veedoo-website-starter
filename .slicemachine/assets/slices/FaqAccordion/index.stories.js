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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"question":[{"type":"paragraph","text":"Incididunt non ipsum reprehenderit ullamco ipsum duis veniam aliqua. In fugiat amet adipisicing aliquip amet est excepteur.","spans":[]}],"answer":[{"type":"paragraph","text":"Voluptate pariatur commodo commodo enim et fugiat do magna fugiat irure.","spans":[]}]}],"primary":{"title":[{"type":"paragraph","text":"Pariatur eu incididunt anim consectetur reprehenderit do proident quis aliquip sint consequat pariatur magna. Ad in est Lorem non quis cillum. Dolor est amet nulla ut duis quis ea excepteur est aliquip esse quis Lorem.","spans":[]}],"description":[{"type":"paragraph","text":"Consectetur ea consectetur ipsum id ut cupidatat non laborum ex irure pariatur.","spans":[]}],"background_color":"#a0b002","primary_text_color":"#7d31d2","secondary_text_color":"#95169e","question_text_color":"#415991","answer_text_color":"#cfd7c3","question_background":"#ea79f0"},"id":"_Default","slice_type":"faq_accordion"}
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
      mock: {"variation":"withImage","version":"sktwi1xtmkfgx8626","items":[{"question":[{"type":"paragraph","text":"Nostrud voluptate dolore mollit sunt culpa culpa elit ea ullamco velit eiusmod. Consequat id cupidatat pariatur proident eu velit eu magna excepteur laboris. Lorem irure in esse tempor Lorem anim eiusmod proident aliquip dolor consequat do excepteur laborum.","spans":[]}],"answer":[{"type":"paragraph","text":"Adipisicing exercitation exercitation consequat id esse ipsum Lorem incididunt nostrud occaecat do aliqua fugiat. Tempor esse velit veniam ex minim ipsum.","spans":[]}]}],"primary":{"title":[{"type":"paragraph","text":"Sit eu magna anim consectetur consequat in elit.","spans":[]}],"description":[{"type":"paragraph","text":"Excepteur ullamco magna deserunt eu dolor laboris culpa laboris eiusmod ex deserunt eiusmod aute excepteur sunt. Incididunt magna veniam culpa ad. Ea irure exercitation irure officia voluptate sint pariatur.","spans":[]}],"image":{"dimensions":{"width":4172,"height":4000},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764"},"background_color":"#a3606f","primary_text_color":"#f6a647","secondary_text_color":"#0b785d","max_width":10,"answer_text_color":"#84426e","question_text_color":"#90be26","question_background":"#d554bf"},"id":"_WithImage","slice_type":"faq_accordion"}
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
      mock: {"variation":"withAnswerImage","version":"sktwi1xtmkfgx8626","items":[{"question":[{"type":"paragraph","text":"Labore pariatur aliquip quis culpa exercitation occaecat et aute magna deserunt ipsum.","spans":[]}],"answer":[{"type":"paragraph","text":"Reprehenderit est do id magna laboris veniam exercitation velit. Ut magna amet magna aute cillum esse qui Lorem Lorem ea labore nisi elit eu. Aute irure officia est incididunt do id enim est incididunt in nostrud et.","spans":[]}],"image":{"dimensions":{"width":5616,"height":3744},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"}}],"primary":{"title":[{"type":"paragraph","text":"Eiusmod nulla enim dolore. Ad amet excepteur laborum consectetur ullamco ea deserunt occaecat non enim. Ullamco officia reprehenderit fugiat esse id anim.","spans":[]}],"description":[{"type":"paragraph","text":"Elit proident velit non labore eu ea culpa magna amet.","spans":[]}],"background_color":"#d8e61e","primary_text_color":"#2eba39","secondary_text_color":"#5b0c09","max_width":27,"question_text_color":"#f24d33","answer_text_color":"#2a8282","question_background":"#d9bcae"},"id":"_WithAnswerImage","slice_type":"faq_accordion"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_WithAnswerImage.storyName = ''
