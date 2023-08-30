import MyComponent from '../../../../slices/RichText';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/RichText'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"rich_text":[{"type":"paragraph","text":"Nisi proident ea proident magna ex est nulla officia. Quis veniam quis officia sunt ex voluptate consectetur et aute occaecat enim duis reprehenderit. Aliquip occaecat ea id officia officia nulla anim ipsum dolor ea cupidatat fugiat ex.","spans":[]}],"text_color":"#a3d5e8","background_color":"#b1513f","margin_top":54,"margin_bottom":10},"id":"_Default","slice_type":"rich_text"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
