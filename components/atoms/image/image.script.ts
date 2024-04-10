import { useImage } from './scripts/use'

export default defineComponent({
  name: 'GaImage',

  inheritAttrs: false,

  props: {
    className: {
      type: String,
      default: null,
    },
    src: {
      type: String,
      required: true,
    },
    sources: {
      type: Array,
      default: () => [],
    },
    lazy: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, context) {
    return useImage(props, context)
  },
})
