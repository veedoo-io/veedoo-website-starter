<script>
import { h } from 'vue';

export default {
  props: {
    text: {
      type: String,
      default: () => 'My Button',
    },
    class: { type: String, default: '' },
    url: { type: String, default: '' },
    startIcon: { type: String, default: '' },
    endIcon: { type: String, default: '' },
    iconClass: { type: String, default: 'h-[1em] w-[1em]' },
  },
  render(h) {
    return h({
      template: `
      <a href='${
        this.url
      }' class='flex items-center justify-center gap-2 w-fit h-fit active:scale-90 ${
        this.class
      } ' >
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
        </a>
`,
    });
  },
};
</script>
