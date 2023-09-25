import MyComponent from '../../../../slices/AlternateGrid';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/AlternateGrid'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"feature_image":{"dimensions":{"width":3168,"height":4752},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88"},"feature_title":[{"type":"paragraph","text":"Consectetur occaecat deserunt velit nisi sint mollit eu duis culpa eu velit sit. Deserunt nulla minim Lorem elit tempor dolore sint amet aliquip velit non est esse. Sit aliquip adipisicing pariatur fugiat in est sit ex enim veniam duis.","spans":[]}],"feature_description":[{"type":"paragraph","text":"Laborum eu sint irure ad in anim fugiat labore deserunt laboris eiusmod consectetur.","spans":[]}]}],"primary":{"title":[{"type":"paragraph","text":"Ipsum ex cupidatat aliqua consequat velit nisi.","spans":[]}],"description":[{"type":"paragraph","text":"Magna nulla id magna laboris ut aliqua. Est duis nisi ad tempor minim cupidatat. Incididunt tempor sunt enim consectetur do ut amet exercitation do qui.","spans":[]}],"background_color":"#35f9f4","text_color":"#a601ae","secondary_text_color":"#8d423c","margin_top":67,"margin_bottom":13},"id":"_Default","slice_type":"alternate_grid"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
