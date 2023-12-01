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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading1","text":"Physical","spans":[]}],"description":[{"type":"paragraph","text":"Voluptate elit irure aute duis aliqua commodo magna esse ad velit velit sint consequat occaecat eu. Nulla sunt id irure ad proident quis labore anim nostrud occaecat culpa velit aute eiusmod. Sint sit exercitation dolore laborum dolor velit minim mollit fugiat.","spans":[]}],"button_link":{"link_type":"Web","url":"http://twitter.com"},"button_text":"movie","button_color":"#82ca5a","button_text_color":"#6656ac","text_color":"#f858f9","image":{"dimensions":{"width":3168,"height":4752},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613"},"background_color":"#39d2a3","margin_bottom":92,"margin_top":54},"id":"_Default","slice_type":"cta_text_block_image_block"}
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
      mock: {"variation":"imageRight","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading1","text":"History","spans":[]}],"description":[{"type":"paragraph","text":"Voluptate fugiat sint sint incididunt.","spans":[]}],"button_link":{"link_type":"Web","url":"https://prismic.io"},"button_text":"safe","button_color":"#6fac63","button_text_color":"#b64866","text_color":"#ce9868","image":{"dimensions":{"width":4380,"height":2895},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db"}},"id":"_ImageRight","slice_type":"cta_text_block_image_block"}
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
      mock: {"variation":"imageLeft","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading1","text":"Known","spans":[]}],"description":[{"type":"paragraph","text":"Qui velit irure incididunt sit aute ipsum exercitation fugiat quis nisi do nisi. Exercitation enim et quis dolore anim sint ex ut do duis id culpa. Est laboris et deserunt id dolor eu aute pariatur ut consequat ut sunt Lorem Lorem ut.","spans":[]}],"button_link":{"link_type":"Web","url":"https://slicemachine.dev"},"button_text":"new","button_color":"#c71db0","button_text_color":"#faf5e9","text_color":"#1ad2a1","image":{"dimensions":{"width":2747,"height":4120},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa"}},"id":"_ImageLeft","slice_type":"cta_text_block_image_block"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ImageLeft.storyName = ''
