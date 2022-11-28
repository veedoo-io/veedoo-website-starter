<script>
import { h } from 'vue';

export default {
  props: {
    text: { type: String, default: 'Text Example' },
    htmlTag: {
      type: String,
      required: true,
      default: 'p',
      validator(value) {
        // The value must match one of these strings
        return ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value);
      },
    },
    class: { type: String, default: '' },
    startIcon: { type: String, default: '' },
    endIcon: { type: String, default: '' },
    url: { type: String, default: '' },
    iconClass: { type: String, default: 'h-[1em] w-[1em]' },
  },
  render(h) {
    return h({
      template: `


  <${this.htmlTag} ${
        this.url != '' ? "href='" + this.url + "'" : ''
      } class="flex items-center justify-center w-fit h-fit gap-2  ${
        this.class
      }" >
      ${
        this.startIcon != ''
          ? "<img class='" +
            this.iconClass +
            "'  src='" +
            this.startIcon +
            "' alt='Start Icon' />"
          : ''
      }
      ${this.text}
      ${
        this.endIcon != ''
          ? "<img class='" +
            this.iconClass +
            "'  src='" +
            this.endIcon +
            "' alt='Start Icon' />"
          : ''
      }
      </${this.htmlTag}>


`,
    });
  },
};
</script>
