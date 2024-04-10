import { GaButtonBase } from '../../atoms/button-base'
import { GaIcon } from '../../atoms/icon'
import { GaLinkBase } from '../../atoms/link-base'

import { ICON_PLACEMENT, SIZE, VIEW } from './scripts/const'

export default defineComponent({
  name: 'GaButtonIcon',

  components: {
    GaIcon,
  },

  props: {
    /** Внешний вид кнопки */
    view: {
      type: String,
      default: VIEW.MAIN,
    },
    /** Размер кнопки */
    size: {
      type: String,
      default: SIZE.M,
      validator: (value: string) => Object.values(SIZE).includes(value),
    },
    /** Текст кнопки */
    text: {
      type: String,
      required: true,
    },
    /** Меняет расположение иконки */
    iconPlacement: {
      type: String,
      default: ICON_PLACEMENT.END,
      validator: (value: string) =>
        Object.values(ICON_PLACEMENT).includes(value),
    },
    /** Дает возможность расшириться кнопке на 100% от свободного пространства */
    block: {
      type: Boolean,
      default: false,
    },
    /** Выравнивает текст внутри кнопки по вертикали, альтернатива block */
    flex: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { attrs }) {
    const b = useBem()

    const { view, size, iconPlacement, block, flex } = toRefs(props)
    const component = computed(() => {
      return attrs.href ? GaLinkBase : GaButtonBase
    })

    const mods = computed(() => {
      const reverse = iconPlacement.value !== ICON_PLACEMENT.END

      return {
        view: view.value,
        size: size.value,
        block: block.value,
        flex: flex.value,
        reverse,
      }
    })

    return { b, component, mods }
  },
})
