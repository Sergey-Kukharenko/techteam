const HOVER_STATE = {
  SUPPORTED: 'supported',
  UNSUPPORTED: 'unsupported',
}

class HoverDetector {
  /**
   * Проверяет поддерживает ли браузер событие hover
   *
   * @return {string} строку supported или unsupported
   */
  get hover() {
    try {
      const hoverIsHover = window.matchMedia('(hover: hover)').matches
      const hoverIsNone = window.matchMedia('(hover: none)').matches

      const hoverMediaIsProbablySupported = hoverIsHover || hoverIsNone

      return hoverMediaIsProbablySupported
        ? HOVER_STATE.SUPPORTED
        : HOVER_STATE.UNSUPPORTED
    } catch (error) {
      return HOVER_STATE.UNSUPPORTED
    }
  }

  /**
   * Сравнивает значение высчитанное методом hover с константой HOVER_STATE.SUPPORTED
   *
   * @return {boolean} значение поддерживает ли браузер событие hover
   */
  get isSupportHover() {
    return this.hover === HOVER_STATE.SUPPORTED
  }
}

export { HoverDetector }
