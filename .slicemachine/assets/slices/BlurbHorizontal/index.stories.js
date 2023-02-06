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
      mock: {
        "variation": "default",
        "version": "sktwi1xtmkfgx8626",
        "items": [
          {
              "image": {
                  "dimensions": {
                      "width": 100,
                      "height": 100
                  },
                  "alt": null,
                  "copyright": null,
                  "url": "https://veedoo-website-starter.cdn.prismic.io/veedoo-website-starter/d7a51668-cf62-4d05-bfba-98d7fee974d9_task_alt.svg"
              },
              "title": [
                  {
                      "type": "paragraph",
                      "text": "Porttitor neque",
                      "spans": []
                  }
              ],
              "description": [
                  {
                      "type": "paragraph",
                      "text": "Lorem ipsum dolor sit amet consectetur. Tem porarcu dui ultr ices fermen tum pharetra amet donec egestas ullamcorper.",
                      "spans": []
                  }
              ],
              "title_color": "#000000",
              "description_color": "#b6b3b3",
              "blurb_background_color": "#d6f8ff"
          },
          {
              "image": {
                  "dimensions": {
                      "width": 100,
                      "height": 100
                  },
                  "alt": null,
                  "copyright": null,
                  "url": "https://veedoo-website-starter.cdn.prismic.io/veedoo-website-starter/d7a51668-cf62-4d05-bfba-98d7fee974d9_task_alt.svg"
              },
              "title": [
                  {
                      "type": "paragraph",
                      "text": "Porttitor neque",
                      "spans": []
                  }
              ],
              "description": [
                  {
                      "type": "paragraph",
                      "text": "Lorem ipsum dolor sit amet consectetur. Tem porarcu dui ultr ices fermen tum pharetra amet donec egestas ullamcorper.",
                      "spans": []
                  }
              ],
              "title_color": "#000000",
              "description_color": "#b6b3b3",
              "blurb_background_color": "#d6f8ff"
          },
          {
              "image": {
                  "dimensions": {
                      "width": 100,
                      "height": 100
                  },
                  "alt": null,
                  "copyright": null,
                  "url": "https://veedoo-website-starter.cdn.prismic.io/veedoo-website-starter/d7a51668-cf62-4d05-bfba-98d7fee974d9_task_alt.svg"
              },
              "title": [
                  {
                      "type": "paragraph",
                      "text": "Porttitor neque",
                      "spans": []
                  }
              ],
              "description": [
                  {
                      "type": "paragraph",
                      "text": "Lorem ipsum dolor sit amet consectetur. Tem porarcu dui ultr ices fermen tum pharetra amet donec egestas ullamcorper.",
                      "spans": []
                  }
              ],
              "title_color": "#000000",
              "description_color": "#b6b3b3",
              "blurb_background_color": "#d6f8ff"
          }
      ],
        "primary": {
          "margin_top": null,
          "margin_right": null,
          "margin_bottom": null,
          "margin_left": null,
          "background_color": null
      },
        "slice_type": "blurb"
      }}
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
      mock: {
        "variation": "vertical",
        "version": "sktwi1xtmkfgx8626",
        "items":[
          {
              "image": {
                  "dimensions": {
                      "width": 100,
                      "height": 100
                  },
                  "alt": null,
                  "copyright": null,
                  "url": "https://veedoo-website-starter.cdn.prismic.io/veedoo-website-starter/d7a51668-cf62-4d05-bfba-98d7fee974d9_task_alt.svg"
              },
              "title": [
                  {
                      "type": "paragraph",
                      "text": "Porttitor neque",
                      "spans": []
                  }
              ],
              "description": [
                  {
                      "type": "paragraph",
                      "text": "Lorem ipsum dolor sit amet consectetur. Tem porarcu dui ultr ices fermen tum pharetra amet donec egestas ullamcorper.",
                      "spans": []
                  }
              ],
              "title_color": "#000000",
              "description_color": "#b6b3b3",
              "blurb_background_color": "#d6f8ff"
          },
          {
              "image": {
                  "dimensions": {
                      "width": 100,
                      "height": 100
                  },
                  "alt": null,
                  "copyright": null,
                  "url": "https://veedoo-website-starter.cdn.prismic.io/veedoo-website-starter/d7a51668-cf62-4d05-bfba-98d7fee974d9_task_alt.svg"
              },
              "title": [
                  {
                      "type": "paragraph",
                      "text": "Porttitor neque",
                      "spans": []
                  }
              ],
              "description": [
                  {
                      "type": "paragraph",
                      "text": "Lorem ipsum dolor sit amet consectetur. Tem porarcu dui ultr ices fermen tum pharetra amet donec egestas ullamcorper.",
                      "spans": []
                  }
              ],
              "title_color": "#000000",
              "description_color": "#b6b3b3",
              "blurb_background_color": "#d6f8ff"
          },
          {
              "image": {
                  "dimensions": {
                      "width": 100,
                      "height": 100
                  },
                  "alt": null,
                  "copyright": null,
                  "url": "https://veedoo-website-starter.cdn.prismic.io/veedoo-website-starter/d7a51668-cf62-4d05-bfba-98d7fee974d9_task_alt.svg"
              },
              "title": [
                  {
                      "type": "paragraph",
                      "text": "Porttitor neque",
                      "spans": []
                  }
              ],
              "description": [
                  {
                      "type": "paragraph",
                      "text": "Lorem ipsum dolor sit amet consectetur. Tem porarcu dui ultr ices fermen tum pharetra amet donec egestas ullamcorper.",
                      "spans": []
                  }
              ],
              "title_color": "#000000",
              "description_color": "#b6b3b3",
              "blurb_background_color": "#d6f8ff"
          }
      ],
        "primary": {
          "margin_top": null,
          "margin_right": null,
          "margin_bottom": null,
          "margin_left": null,
          "background_color": null
      },
        "slice_type": "blurb"
      }  }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Vertical.storyName = ''
