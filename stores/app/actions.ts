import scrollLock from 'scroll-lock'

import { LAYOUT_VISIBLE_DEFAULT } from './state'

const {
  disablePageScroll,
  enablePageScroll,
  getPageScrollBarWidth,
  getScrollState,
} = scrollLock

function getLastZIndex(state) {
  const zIndexes = Object.values(state.zIndexes)

  if (zIndexes.length === 0) {
    return state.zIndexBase
  }

  return Math.max(...zIndexes)
}

export default {
  disableScroll() {
    disablePageScroll()
    this.updateScrollState()
  },

  enableScroll() {
    enablePageScroll()
    this.updateScrollState()
  },

  updateScrollState() {
    const isScrollEnabled = getScrollState()

    this.scrollEnabled = isScrollEnabled
    this.scrollbarGapWidth = isScrollEnabled ? 0 : getPageScrollBarWidth()
  },

  setWithFocusKeyboard({ value }) {
    this.withFocusKeyboard = value
  },

  setFocusSource({ value }) {
    this.focusSource = value
  },

  setWithHover({ value }) {
    this.withHover = value
  },

  setScrollTop({ scrollTop }) {
    this.scrollTop = scrollTop
  },

  setMobileAppBannerVisible(value) {
    this.mobileAppBannerVisible = value
  },

  reserveZIndex({ id }) {
    const zIndex = getLastZIndex(this) + 1

    this.zIndexes = { ...this.zIndexes, [id]: zIndex }
  },

  unreserveZIndex({ id }) {
    delete this.zIndexes[id]
    this.zIndexes = { ...this.zIndexes }
  },

  setLayoutVisible({ header, main, footer }) {
    this.headerVisible = header
    this.mainVisible = main
    this.footerVisible = footer
  },

  setFooterVisible(value) {
    this.footerVisible = value
  },

  setHeaderVisible(value) {
    this.headerVisible = value
  },

  setMainVisible(value) {
    this.mainVisible = value
  },

  resetLayout() {
    this.footerVisible = LAYOUT_VISIBLE_DEFAULT
    this.headerVisible = LAYOUT_VISIBLE_DEFAULT
    this.mainVisible = LAYOUT_VISIBLE_DEFAULT
  },
}
