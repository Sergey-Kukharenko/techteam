export default defineComponent({
  name: 'GaLinkBase',

  inheritAttrs: false,

  props: {
    nuxt: {
      type: Boolean,
      default: false,
    },
    openInModal: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { attrs }) {
    const b = useBem()

    const { nuxt, openInModal } = toRefs(props)
    // const { route } = useRoute()
    const route = { value: { fullPath: null } }

    const rel = computed(() => {
      const { target, rel: relInternal } = attrs

      return target === '_blank' ? 'noopener noreferrer' : relInternal
    })

    const component = computed(() => {
      const { href, ...attrsInternal } = { ...attrs, rel: rel.value }

      return nuxt.value && route.value.fullPath !== href
        ? {
            is: defineNuxtLink({}),
            attrs: {
              ...attrsInternal,
              to: {
                path: href,
                query: openInModal.value
                  ? { openInModal: openInModal.value }
                  : {},
              },
            },
          }
        : {
            is: 'a',
            attrs: { ...attrsInternal, href },
          }
    })

    return { b, component }
  },
})
