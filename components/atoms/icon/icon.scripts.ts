export default defineComponent({
  name: 'GaIcon',

  props: {
    width: {
      type: [Number, String],
      default: null,
    },
    height: {
      type: [Number, String],
      default: null,
    },
  },

  setup(props) {
    const b = useBem()

    const { width, height } = toRefs(props)

    const style = computed(() => {
      const widthInternal = width.value
        ? `${Number.parseInt(width.value as string, 10)}px`
        : null
      const heightInternal = height.value
        ? `${Number.parseInt(height.value as string, 10)}px`
        : null

      return { width: widthInternal, height: heightInternal }
    })

    return { b, style }
  },
})
