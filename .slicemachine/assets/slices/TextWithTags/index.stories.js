import MyComponent from '../../../../slices/TextWithTags';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TextWithTags'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"tag_label":"corn","text":[{"type":"paragraph","text":"Velit velit qui labore excepteur dolor consequat aliquip. Exercitation aute ut ad reprehenderit occaecat ullamco labore non mollit duis dolore.","spans":[]}],"tag_label_color":"#d2c511","tag_color":"#249247","tag_image":{"dimensions":{"width":5616,"height":3744},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1"},"text_color":"#dda9a7"}],"primary":{"margin_top":48,"margin_bottom":42},"id":"_Default","slice_type":"text_with_tags"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''

export const _NoShadowTag = () => ({
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
      mock: {"variation":"noShadowTag","version":"sktwi1xtmkfgx8626","items":[{"tag_label":"use","text":[{"type":"paragraph","text":"Aute velit sunt consectetur exercitation nostrud tempor dolore ea. Reprehenderit sint officia consequat velit ea. Magna non pariatur deserunt voluptate mollit excepteur culpa dolore.","spans":[]}],"tag_label_color":"#861ec5","tag_color":"#162392","tag_image":{"dimensions":{"width":3810,"height":5715},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117"},"text_color":"#18dec5"}],"primary":{"margin_top":82,"margin_bottom":45},"id":"_NoShadowTag","slice_type":"text_with_tags"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_NoShadowTag.storyName = ''
