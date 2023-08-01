import MyComponent from '../../../../slices/BlurbHorizontal';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/BlurbHorizontal'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"image":{"dimensions":{"width":3424,"height":3424},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c"},"title":[{"type":"paragraph","text":"Aute amet in ullamco deserunt cupidatat ad voluptate anim laboris id. Velit non nisi eiusmod magna.","spans":[]}],"description":[{"type":"paragraph","text":"Lorem magna dolore irure eiusmod laboris eu incididunt fugiat ullamco fugiat. Quis exercitation cillum tempor sit ullamco nisi incididunt qui culpa laborum elit. Et veniam mollit reprehenderit commodo aute ex proident.","spans":[]}],"title_color":"#643ec4","description_color":"#e88e2f","blurb_background_color":"#d679e7"}],"primary":{"margin_top":71,"margin_bottom":31,"background_color":"#32b613"},"id":"_Default","slice_type":"blurb"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''

export const _Vertical = () => ({
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
      mock: {"variation":"vertical","version":"sktwi1xtmkfgx8626","items":[{"image":{"dimensions":{"width":3648,"height":4560},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2"},"title":[{"type":"paragraph","text":"Pariatur Lorem ex esse enim culpa ullamco qui excepteur do nisi dolor proident velit fugiat dolore.","spans":[]}],"description":[{"type":"paragraph","text":"Labore commodo sunt magna aliquip officia exercitation. Eu nisi reprehenderit adipisicing magna ipsum officia enim amet commodo cupidatat. Est ea incididunt voluptate enim laborum ullamco in Lorem voluptate culpa ex anim.","spans":[]}],"title_color":"#d2810e","description_color":"#43239c","blurb_background_color":"#6ddee0"}],"primary":{"margin_top":34,"margin_right":18,"margin_bottom":57,"margin_left":44,"background_color":"#43075c"},"id":"_Vertical","slice_type":"blurb"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Vertical.storyName = ''
