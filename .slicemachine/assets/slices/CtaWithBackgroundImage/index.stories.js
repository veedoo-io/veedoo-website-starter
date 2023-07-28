import MyComponent from '../../../../slices/CtaWithBackgroundImage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CtaWithBackgroundImage'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Laborum dolor occaecat veniam ex occaecat sunt ut deserunt elit do. Fugiat sit eiusmod laboris commodo sit proident eiusmod do aliquip voluptate tempor anim aliquip commodo aliquip. Est adipisicing deserunt cillum.","spans":[]}],"description":[{"type":"paragraph","text":"Irure dolore dolor nisi incididunt elit.","spans":[]}],"call_to_action":"pride","button_url":{"link_type":"Web","url":"http://google.com"},"background_image":{"dimensions":{"width":4172,"height":4000},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764"},"text_color":"#cb5830","button_text_color":"#2be513","button_background_color":"#19adba","title_color":"#7c0684"},"id":"_Default","slice_type":"cta_with_background_image"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
