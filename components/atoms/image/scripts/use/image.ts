import getImagePixel from "~/utils/get-image-pixel";

export const useImage = (props: any, { emit, attrs }: any) => {
  const b = useBem()
  const pixel = getImagePixel()

  const { className, src, sources, lazy } = toRefs(props)

  const isPixelLoaded = ref(false)

  const onLoad = ($event: Event) => {
    if (isPixelLoaded.value) {
      emit('load', $event)
    }

    isPixelLoaded.value = true
  }

  const onError = ($event: Event) => {
    if (isPixelLoaded.value) {
      emit('error', $event)
    }

    isPixelLoaded.value = true
  }

  const buildMedia = (media: any) => {
    if (!media) {
      return null
    }

    const from = media.from && `(min-width: ${media.from}px)`
    const till = media.till && `(max-width: ${media.till - 1}px)`

    return [from, till].filter(Boolean).join(' and ')
  }

  const buildSrcset = (srcset: any[]) => {
    return srcset.length > 1
      ? srcset.map((source, index) => `${source} ${index + 1}x`).join(', ')
      : srcset[0]
  }

  const buildType = (ext = 'jpeg') => {
    return `image/${ext}`.toLowerCase()
  }

  const buildSourceAttrs = (source: any) => {
    const attributes = {
      media: source.media,
      type: source.type,
    }

    if (lazy.value) {
      return {
        ...attributes,
        'data-srcset': source.srcset,
      }
    }

    return {
      ...attributes,
      srcset: source.srcset,
    }
  }

  const rootClass = computed(() => {
    const classes = [b(), className.value]

    if (lazy.value) {
      classes.push('lazyload')
    }

    return classes
  })

  const sourcesInternal = computed(() =>
    sources.value.map(({ media, srcset, ext }) => ({
      media: buildMedia(media),
      srcset: buildSrcset(srcset),
      type: buildType(ext),
    }))
  )

  const hasSourcesInternal = computed(() => sourcesInternal.value.length > 0)

  const imgAttrs = computed(() => {
    const attributes = {
      ...attrs,
      src: lazy.value ? pixel : src.value,
    }

    if (lazy.value) {
      return {
        ...attributes,
        'data-src': src.value,
      }
    }

    return attributes
  })

  return {
    b,

    imgAttrs,
    hasSourcesInternal,
    sourcesInternal,
    rootClass,

    onLoad,
    onError,
    buildSourceAttrs,
  }
}
