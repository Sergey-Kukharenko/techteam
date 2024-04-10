import { defineComponent, computed, toRefs } from 'vue'

import { GaButtonBase } from '../../atoms/button-base'
import { GaIcon } from '../../atoms/icon'
import { GaLinkBase } from '../../atoms/link-base'

import { VIEW, SIZE } from './scripts/const'

// @vue/component
export default defineComponent({
    name: 'ga-button-expanded',

    components: {
        GaIcon,
    },

    inheritAttrs: false,

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
        /** Ширина иконки */
        iconWidth: {
            type: Number,
            default: 15,
        },
        /** Высота иконки */
        iconHeight: {
            type: Number,
            required: true,
        },
    },

    setup(props, { attrs }) {
        const b = useBem()

        const { iconWidth, iconHeight } = toRefs(props)

        const component = computed(() => {
            return attrs.href ? GaLinkBase : GaButtonBase
        })

        const iconAttrs = computed(() => {
            return {
                width: iconWidth.value,
                height: iconHeight.value,
            }
        })

        return {
            b,

            component,
            iconAttrs,
        }
    },
})
