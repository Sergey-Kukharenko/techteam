import { GaButtonBase } from '../../atoms/button-base'
import { GaLinkBase } from '../../atoms/link-base'

import { VIEW } from './scripts/const'

export default defineComponent({
  name: 'GaAction',

  inheritAttrs: false,

  props: {
    view: {
      type: String,
      default: VIEW.REGULAR,
      validator: (value: string) => Object.values(VIEW).includes(value),
    },
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  setup(_, { attrs }) {
    const b = useBem()

    const component = computed(() => {
      return attrs.href ? GaLinkBase : GaButtonBase
    })

    return { b, component }
  },
})
