import MyComponent from '../../../../slices/SocialFollowIcons';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SocialFollowIcons'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading1","text":"Start","spans":[]}],"description":[{"type":"paragraph","text":"Non eu ex ad aliquip ipsum enim consequat reprehenderit consectetur dolor reprehenderit sit excepteur sint. Mollit anim ut aliqua aliqua tempor irure ex amet veniam occaecat ipsum aliquip cupidatat in commodo.","spans":[]}]},"slice_type":"social_follow_icons","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
