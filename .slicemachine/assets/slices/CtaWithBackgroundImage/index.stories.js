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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Laboris aliqua cillum qui eiusmod qui excepteur esse incididunt proident dolor. Nisi eu irure cillum reprehenderit sint laboris tempor exercitation excepteur. Et ut ea fugiat esse est laboris deserunt ea.","spans":[]}],"description":[{"type":"paragraph","text":"Aliquip irure dolor quis cupidatat esse elit mollit. Do non incididunt duis velit fugiat exercitation adipisicing quis mollit non laborum deserunt.","spans":[]}],"call_to_action":"guess","button_url":{"link_type":"Web","url":"https://slicemachine.dev"},"background_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6"},"text_color":"#272f9f","button_text_color":"#71a44b","button_background_color":"#ccffab"},"slice_type":"cta_with_background_image","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
