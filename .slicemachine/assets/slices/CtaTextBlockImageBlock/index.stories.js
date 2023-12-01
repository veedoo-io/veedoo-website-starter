import MyComponent from '../../../../slices/CtaTextBlockImageBlock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CtaTextBlockImageBlock'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading1","text":"Bound","spans":[]}],"description":[{"type":"paragraph","text":"Nisi officia laboris est veniam elit esse veniam.","spans":[]}],"button_link":{"link_type":"Web","url":"http://twitter.com"},"button_text":"everyone","button_color":"#08d921","button_text_color":"#0eb49a","text_color":"#5ce094","image":{"dimensions":{"width":3456,"height":3456},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8"},"margin_top":45,"margin_bottom":46},"id":"_Default","slice_type":"cta_text_block_image_block"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''

export const _ImageRight = () => ({
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
      mock: {"variation":"imageRight","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading1","text":"Strike","spans":[]}],"description":[{"type":"paragraph","text":"Nisi in elit commodo deserunt cupidatat esse laborum quis labore. Voluptate incididunt voluptate mollit eu sint cupidatat laboris cillum.","spans":[]}],"button_link":{"link_type":"Web","url":"https://prismic.io"},"button_text":"collect","button_color":"#87eb88","button_text_color":"#3c57cc","text_color":"#68c8e7","image":{"dimensions":{"width":3560,"height":5340},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b"}},"id":"_ImageRight","slice_type":"cta_text_block_image_block"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ImageRight.storyName = ''

export const _ImageLeft = () => ({
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
      mock: {"variation":"imageLeft","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading1","text":"Count","spans":[]}],"description":[{"type":"paragraph","text":"Fugiat aliquip sint eu consequat velit aute aliquip. Exercitation excepteur irure incididunt veniam enim eiusmod deserunt velit et cupidatat reprehenderit pariatur eiusmod aliquip ullamco. Cillum occaecat consectetur laborum ad magna in qui.","spans":[]}],"button_link":{"link_type":"Web","url":"https://slicemachine.dev"},"button_text":"loose","button_color":"#edc913","button_text_color":"#36d30e","text_color":"#977baf","image":{"dimensions":{"width":2545,"height":2545},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51"}},"id":"_ImageLeft","slice_type":"cta_text_block_image_block"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ImageLeft.storyName = ''
