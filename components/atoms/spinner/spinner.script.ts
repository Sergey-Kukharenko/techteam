import { VIEW } from './scripts/const'

export default defineComponent({
  name: 'GaSpinner',

  props: {
    view: {
      type: String,
      default: VIEW.DOT,
      validator: (value: string) => Object.values(VIEW).includes(value),
    },
  },

  setup() {
    const b = useBem()

    return {
      b,
    }
  },
})
