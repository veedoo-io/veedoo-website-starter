import MyComponent from '../../../../slices/PartnerLogoGridWithDescriptionText';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/PartnerLogoGridWithDescriptionText'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"logo":{"dimensions":{"width":8640,"height":8640},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68"},"description":[{"type":"paragraph","text":"Incididunt enim pariatur pariatur amet duis aute Lorem mollit reprehenderit aliqua aliquip nostrud laborum duis. Id ea qui non excepteur nostrud commodo velit Lorem ipsum quis.","spans":[]}],"link_text":"satellites","link":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"background_color":"#29d7dc"},"id":"_Default","slice_type":"partner_logo_grid_with_description_text"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
