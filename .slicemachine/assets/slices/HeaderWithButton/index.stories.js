import MyComponent from '../../../../slices/HeaderWithButton';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HeaderWithButton'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"menu_link":{"link_type":"Web","url":"http://google.com"},"menu_item":"mighty","icon":{"dimensions":{"width":4172,"height":4000},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764"}}],"primary":{"logo":{"dimensions":{"width":4000,"height":4000},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da"},"background_color":"#ce37ef","button_text":"solid","button_link":{"link_type":"Web","url":"https://slicemachine.dev"},"button_color":"#cf1bb1","text_color":"#1e3704","button_text_color":"#678bf3"},"id":"_Default","slice_type":"header_with_button"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
