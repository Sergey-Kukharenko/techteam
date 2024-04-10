export const LAYOUT_VISIBLE_DEFAULT = true

export default () => {
  return {
    scrollEnabled: true,
    scrollbarGapWidth: 0,

    withFocusKeyboard: false,
    focusSource: undefined,
    withHover: false,

    scrollTop: 0,

    zIndexBase: 9999,
    zIndexes: {},
  }
}
