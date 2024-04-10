/**
 * TODO:
 *  - добавить состояние loading и анимацию
 */
import { GaButtonBase } from '~/components/atoms/button-base'
import { GaIcon } from '~/components/atoms/icon'
import { GaLinkBase } from '~/components/atoms/link-base'

import { ICON_GAP, ICON_PLACEMENT, SIZE, STATE, VIEW } from './scripts/const'

// @vue/component
export default defineComponent({
  name: 'GaButtonLink',

  components: {
    GaIcon,
  },

  inheritAttrs: false,

  props: {
    /** Внешний вид кнопки */
    view: {
      type: String,
      default: VIEW.MAIN,
      validator: (value: string) => Object.values(VIEW).includes(value),
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
    /** Задает отступ между текстом и иконкой */
    iconGap: {
      type: Number,
      default: ICON_GAP['5'],
      validator: (value: number) => Object.values(ICON_GAP).includes(value),
    },
    /** Добавляет анимацию загрузки */
    loading: {
      type: Boolean,
      default: false,
    },
    /** Убирает интерактивность */
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { attrs }) {
    const b = useBem()

    const { view, size, iconPlacement, iconGap, loading, disabled } =
      toRefs(props)

    const component = computed(() => {
      return attrs.href ? GaLinkBase : GaButtonBase
    })

    const state = computed(() => {
      switch (true) {
        case disabled.value:
          return STATE.DISABLED
        case loading.value:
          return STATE.LOADING
        default:
          return STATE.DEFAULT
      }
    })

    const disabledInternal = computed(() => {
      return [STATE.DISABLED, STATE.LOADING].includes(state.value)
    })

    const reverse = computed(() => {
      return iconPlacement.value !== ICON_PLACEMENT.END
    })

    const mods = computed(() => {
      return {
        view: view.value,
        size: size.value,
        state: state.value,
        reverse: reverse.value,
      }
    })

    const iconStyle = computed(() => {
      if (!iconGap.value) {
        return {}
      }

      return reverse.value
        ? { marginRight: `${iconGap.value}px` }
        : { marginLeft: `${iconGap.value}px` }
    })

    return {
      b,

      component,

      mods,
      disabledInternal,

      iconStyle,
    }
  },
})
