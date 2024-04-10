import { initClient } from "./utils/initClient";

export const useAppInit = async () => {
  const storeApp = useAppStore()
  const storeWindow = useWindowStore()

  const focus = computed(() => storeApp.focusSource)

  const hover = computed(() =>
    storeApp.withHover ? 'supported' : 'unsupported'
  )

  const resizing = computed(() => storeWindow.windowResizing)

  const bodyMods = computed(() => {
    return {
      'data-app': null,
      'data-focus': focus,
      'data-resizing': resizing,
      'data-hover': hover,
    }
  })

  // const { localeProperties } = useI18n()
  const htmlDir = 'ltr' // TODO: Вернуть useI18n

  if (process.client) {
    await initClient()
  }

  return {
    bodyMods,
    htmlDir,
    isDev: process.dev,
  }
}
