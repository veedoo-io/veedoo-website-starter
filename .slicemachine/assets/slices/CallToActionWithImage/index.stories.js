import MyComponent from '../../../../slices/CallToActionWithImage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CallToActionWithImage'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading1","text":"Attempt","spans":[]}],"description":[{"type":"paragraph","text":"Culpa ad laboris irure et enim anim. Amet exercitation laboris nostrud aliquip esse exercitation officia anim. Ullamco consequat veniam Lorem nulla amet laborum veniam commodo exercitation eiusmod duis velit culpa.","spans":[]}],"backgroundcolor":"#9ecf9f","image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb"},"button_text":"somebody","button_url":{"link_type":"Web","url":"https://prismic.io"},"button_color":"#5e9da2","button_text_color":"#0e9ae4"},"slice_type":"call_to_action_with_image","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
