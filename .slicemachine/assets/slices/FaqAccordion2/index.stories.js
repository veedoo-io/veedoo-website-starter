import MyComponent from '../../../../slices/FaqAccordion2';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FaqAccordion2'
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
                "text": "Answer 1.",
                "spans": []
              }
            ],
            "background_color": "#ffffff",
            "text_color": "#000000",
            "answer_text_color": "#000000"
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
                "text": "Answer 2.",
                "spans": []
              }
            ],
            "background_color": "#ffffff",
            "text_color": "#000000",
            "answer_text_color": "#000000"
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
                "text": "Answer 3.",
                "spans": []
              }
            ],
            "background_color": "#ffffff",
            "text_color": "#000000",
            "answer_text_color": "#000000"
          }
        ],
        "primary": {
          "title": [
            {
              "type": "paragraph",
              "text": "Answers to common questions.",
              "spans": []
            }
          ],
          "background_color": "#D94B6A",
          "image": {
            "dimensions": {
              "width": 900,
              "height": 500
            },
            "alt": null,
            "copyright": null,
            "url": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef"
          },
          "title_color": "#ffffff",
          "max_width": 430
        },
        "slice_type": "faq_accordion2"
      } }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
