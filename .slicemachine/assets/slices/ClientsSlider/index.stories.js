import MyComponent from '../../../../slices/ClientsSlider';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ClientsSlider'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"logo":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853"},"url":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"title":"airplane","title_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118"},"description":[{"type":"paragraph","text":"Nisi officia ipsum dolore non consequat est nisi ipsum adipisicing cillum.","spans":[]}],"background_color":"#050d0d","primary_text_color":"#aefbae","description_text_color":"#6a94bf"},"slice_type":"clients_slider","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
