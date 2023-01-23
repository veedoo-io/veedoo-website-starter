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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"},"title":[{"type":"paragraph","text":"Veniam in anim labore occaecat aliquip reprehenderit.","spans":[]}],"description":[{"type":"paragraph","text":"In sunt adipisicing ipsum laboris esse mollit. Pariatur laborum voluptate incididunt est aliqua mollit aute enim ea duis. Excepteur irure Lorem nostrud fugiat.","spans":[]}],"title_color":"#3a3d47","description_color":"#1511be","blurb_background_color":"#21620d"}],"primary":{"margin_top":53,"margin_right":47,"margin_bottom":34,"margin_left":64,"background_color":"#9a6e15"},"slice_type":"blurb","id":"_Default"}
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
      mock: {"variation":"vertical","version":"sktwi1xtmkfgx8626","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2"},"title":[{"type":"paragraph","text":"Deserunt aliqua mollit sit ullamco id aute occaecat laboris duis ad do cupidatat ea consectetur amet. Magna consectetur ullamco anim nulla minim et sunt duis. Mollit nulla laboris consectetur eiusmod in ullamco voluptate id veniam cupidatat sunt labore consectetur.","spans":[]}],"description":[{"type":"paragraph","text":"Irure dolor id elit occaecat dolore commodo amet sunt consequat minim officia ex fugiat culpa. Dolor cillum deserunt ex esse et id qui culpa adipisicing velit labore minim excepteur excepteur.","spans":[]}],"title_color":"#c99fed","description_color":"#10031c","blurb_background_color":"#00e22c"}],"primary":{"margin_top":9,"margin_right":58,"margin_bottom":61,"margin_left":40,"background_color":"#75bf99"},"slice_type":"blurb","id":"_Vertical"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Vertical.storyName = ''