export default defineComponent({
  name: 'GaButtonBase',

  setup(_, { attrs }) {
    const b = useBem()

    const type = computed(() => attrs.type || 'button')

    return { b, type }
  },
})
