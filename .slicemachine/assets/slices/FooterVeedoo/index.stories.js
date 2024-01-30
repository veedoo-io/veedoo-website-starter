import MyComponent from '../../../../slices/FooterVeedoo';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FooterVeedoo'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"footer_flag":{"dimensions":{"width":3024,"height":3778},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a"}}],"primary":{"footer_logo":{"dimensions":{"width":2747,"height":4120},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa"},"footer_text":[{"type":"paragraph","text":"Laboris nostrud pariatur voluptate do. Laborum veniam magna nisi commodo exercitation minim magna amet enim ex voluptate incididunt duis reprehenderit culpa.","spans":[]}],"background_color":"#a1dad2","text_color":"#e97836","link":{"link_type":"Web","url":"http://google.com"},"link_text":[{"type":"paragraph","text":"Elit voluptate proident nisi fugiat qui ipsum incididunt occaecat fugiat deserunt culpa. Id eiusmod quis quis officia aliqua sint sint cupidatat deserunt veniam quis nisi aliqua commodo.","spans":[]}],"link_text_color":"#8da560"},"id":"_Default","slice_type":"footer_veedoo"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
