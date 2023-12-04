import MyComponent from '../../../../slices/GallerySlider';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/GallerySlider'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"photo":{"dimensions":{"width":3277,"height":4092},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055"}}],"primary":{"title":[{"type":"paragraph","text":"Et occaecat tempor consectetur excepteur duis deserunt tempor aute minim. Laboris duis non qui dolor est ex exercitation exercitation culpa pariatur consectetur.","spans":[]}],"description":[{"type":"paragraph","text":"Voluptate enim ex officia incididunt elit et nisi ipsum reprehenderit non aliqua. Ullamco anim mollit incididunt elit tempor elit dolore elit sint laborum ad labore elit. Pariatur id cillum nostrud minim aute sit commodo occaecat non qui culpa labore ex.","spans":[]}],"text_color":"#835cb6","margin_bottom":23,"margin_top":94},"id":"_Default","slice_type":"gallery_slider"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''

export const _HoryzontalImage = () => ({
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
      mock: {"variation":"horyzontalImage","version":"sktwi1xtmkfgx8626","items":[{"photo":{"dimensions":{"width":3024,"height":3778},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a"}}],"primary":{"title":[{"type":"paragraph","text":"In in do mollit id ex Lorem minim ipsum officia id proident occaecat occaecat. Voluptate quis anim esse ipsum mollit incididunt velit ullamco ipsum non sint irure anim aute cupidatat. Veniam dolore est non adipisicing amet cillum commodo officia est ea.","spans":[]}],"description":[{"type":"paragraph","text":"Eu reprehenderit et in minim dolor veniam mollit ipsum incididunt.","spans":[]}],"text_color":"#6035cd","margin_bottom":69,"margin_top":42},"id":"_HoryzontalImage","slice_type":"gallery_slider"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_HoryzontalImage.storyName = ''

export const _VerticalImage = () => ({
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
      mock: {"variation":"verticalImage","version":"sktwi1xtmkfgx8626","items":[{"photo":{"dimensions":{"width":4480,"height":4480},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e"}}],"primary":{"title":[{"type":"paragraph","text":"Ad Lorem Lorem elit qui dolore officia quis quis id in. Magna labore dolor anim sint. Ipsum eu pariatur Lorem mollit est esse velit esse incididunt minim labore et qui proident aliquip.","spans":[]}],"description":[{"type":"paragraph","text":"Id duis eu Lorem est cupidatat ut amet. Eiusmod nisi ullamco ullamco elit magna sit fugiat do non elit. Occaecat et qui sint adipisicing cupidatat officia.","spans":[]}],"text_color":"#756a83","margin_bottom":50,"margin_top":50},"id":"_VerticalImage","slice_type":"gallery_slider"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_VerticalImage.storyName = ''
