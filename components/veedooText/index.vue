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
    classes: { type: String, default: '' },
    startIcon: { type: String, default: '' },
    endIcon: { type: String, default: '' },
    url: { type: Object, default: null },
    iconClass: { type: String, default: 'h-[1.5em] w-[1.5em]' },
    textSize: { type: String, default: '16px' },
  },
  render(h) {
    return h({
      template: `


  <${
    this.url?.url || this.url.link_type != 'Any'
      ? `a href="${this.url?.url}" `
      : this.htmlTag
  }
    class="flex items-center justify-center w-fit h-fit gap-2 ${
      this.classes
    }" style='font-size:${this.textSize}'  >
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
      </${this.url?.url ? `a href="${this.url?.url}" ` : this.htmlTag}>


`,
    });
  },
  data() {
    console.log('url ', this.url);
    return {};
  },
};
</script>
