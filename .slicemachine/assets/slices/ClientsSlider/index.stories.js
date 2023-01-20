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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"logo":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1547394765-185e1e68f34e"},"url":{"link_type":"Web","url":"http://google.com"}}],"primary":{"title":"mainly","title_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118"},"description":[{"type":"paragraph","text":"Ipsum consectetur nulla pariatur esse reprehenderit mollit proident magna irure.","spans":[]}],"background_color":"#933df9","primary_text_color":"#e3e238","description_text_color":"#74d814"},"slice_type":"clients_slider","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
