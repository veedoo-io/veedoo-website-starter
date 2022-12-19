import MyComponent from '../../../../slices/FaqAccordion';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FaqAccordion'
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
            "question": [
              {
                "type": "paragraph",
                "text": "Question 1",
                "spans": []
              }
            ],
            "answer": [
              {
                "type": "paragraph",
                "text": "Only use them when the content is appropriate. If the panels are too long, the user will end up scrolling too much (esp. on mobile), which negates the whole purpose of using an accordion. For very long panels, using links to separate pages is preferred.",
                "spans": []
              }
            ],
            "background_color": "#ffffff",
            "text_color": "#000000"
          },
          {
            "question": [
              {
                "type": "paragraph",
                "text": "Question 2",
                "spans": []
              }
            ],
            "answer": [
              {
                "type": "paragraph",
                "text": "Learn about Prismic by reading questions and answers. It’s almost like talking to a human – and maybe even better.",
                "spans": []
              }
            ],
            "background_color": "#e4fcff",
            "text_color": "#ff0000"
          },
          {
            "question": [
              {
                "type": "paragraph",
                "text": "Question 3",
                "spans": []
              }
            ],
            "answer": [
              {
                "type": "paragraph",
                "text": "Only use them when the content is appropriate. If the panels are too long, the user will end up scrolling too much (esp. on mobile), which negates the whole purpose of using an accordion. For very long panels, using links to separate pages is preferred.",
                "spans": []
              }
            ],
            "background_color": null,
            "text_color": null
          }
        ],
        "primary": {
          "title": "Answers to common questions",
          "description": [
            {
              "type": "paragraph",
              "text": "Learn about Prismic by reading questions and answers.\nIt’s almost like talking to a human – and maybe even\nbetter.",
              "spans": []
            }
          ],
          "background_color": null,
          "primary_text_color": null,
          "secondary_text_color": null,
          "max_width": 652
        },
        "slice_type": "faq_accordion"
      } }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
