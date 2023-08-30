import MyComponent from '../../../../slices/CtaWithBackgroundImage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CtaWithBackgroundImage'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Ad mollit ut incididunt incididunt nulla aute quis irure veniam. Exercitation laboris culpa pariatur laborum.","spans":[]}],"description":[{"type":"paragraph","text":"Eu proident ipsum anim cupidatat esse eiusmod mollit. Do nulla ad elit adipisicing proident. Voluptate exercitation ea sit do duis labore.","spans":[]}],"call_to_action":"inch","button_url":{"link_type":"Web","url":"http://twitter.com"},"background_image":{"dimensions":{"width":4752,"height":3168},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9"},"background_color":"#5b7dac","text_color":"#e390a2","button_text_color":"#885609","button_background_color":"#5bcea2","title_color":"#c6649e","text_alignment":"center"},"id":"_Default","slice_type":"cta_with_background_image"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
