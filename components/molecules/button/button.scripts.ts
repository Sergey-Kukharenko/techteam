import { GaButtonBase } from '~/components/atoms/button-base'
import { GaLinkBase } from '~/components/atoms/link-base'
import { GaSpinner } from '~/components/atoms/spinner'

import { SIZE, STATE, VIEW } from './scripts/const'

export default defineComponent({
  name: 'GaButton',

  components: {
    GaSpinner,
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
    /** Дает возможность расшириться кнопке на 100% от свободного пространства */
    block: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { attrs }) {
    const b = useBem()

    const { loading, disabled } = toRefs(props)
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

    const isLoading = computed(() => {
      return state.value === STATE.LOADING
    })

    return {
      b,

      component,

      state,
      disabledInternal,

      isLoading,
    }
  },
})
